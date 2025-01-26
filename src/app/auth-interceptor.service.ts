import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResponse } from 'projects/internship/src/lib/api/models';
import { UserControllerService } from 'projects/internship/src/lib/api/services';

import {
  BehaviorSubject,
  catchError,
  filter,
  Observable,
  switchMap,
  take,
  throwError,
} from 'rxjs';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(
    private router: Router,
    private userApiService: UserControllerService
  ) { }

  refreshToken(): Observable<AuthenticationResponse> {
    return this.userApiService.refreshToken();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<Object>> {
    let authReq = req;
    let token = window.sessionStorage.getItem('access_token');
    if (this.isRefreshing) {
      token = window.sessionStorage.getItem('refresh_token');
    }
    if (token) {
      authReq = this.addTokenHeader(req, token);
    }

    return next.handle(authReq).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          authReq.url.includes('logout') &&
          (error.status === 401 || error.status === 403)
        ) {
          this.isRefreshing = false;
          window.sessionStorage.clear();
          this.router.navigate(['login']);
          return throwError(error);
        } else if (
          error instanceof HttpErrorResponse &&
          !authReq.url.includes('login') &&
          (error.status === 401 || error.status === 403)
        ) {
          return this.handleRefreshTokenError(authReq, next);
        } else return throwError(error);
      })
    );
  }

  private handleRefreshTokenError(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const token = window.sessionStorage.getItem('refresh_token');
      if (token) {
        this.addTokenHeader(request, token);
        return this.refreshToken().pipe(
          switchMap((token: AuthenticationResponse) => {
            this.isRefreshing = false;

            window.sessionStorage.removeItem('access_token');
            window.sessionStorage.setItem('access_token', token.access_token!);
            window.sessionStorage.removeItem('refresh_token');
            window.sessionStorage.setItem(
              'refresh_token',
              token.refresh_token!
            );
            this.refreshTokenSubject.next(token.access_token);

            return next.handle(
              this.addTokenHeader(request, token.access_token!)
            );
          }),
          catchError((err) => {
            this.isRefreshing = false;
            return throwError(err);
          })
        );
      }
    }

    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
