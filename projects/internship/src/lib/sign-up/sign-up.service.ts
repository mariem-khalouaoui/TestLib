import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserControllerService } from '../api/services';
import { AuthenticationResponse } from '../api/models';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private userApiService: UserControllerService) {}

  registerUser(
    username: string,
    password: string
  ): Observable<AuthenticationResponse> {
    return this.userApiService.register({
      body: {
        password: password,
        username: username,
      },
    });
  }
}
