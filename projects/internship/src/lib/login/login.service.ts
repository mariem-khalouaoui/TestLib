import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserControllerService } from '../api/services';
import { AuthenticationResponse, Users } from '../api/models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private userControllerService: UserControllerService) {}

  loginUser(
    username: string,
    password: string
  ): Observable<AuthenticationResponse> {
    let body: Users = {
      username: username,
      password: password,
    };
    return this.userControllerService.login({ body: body });
  }
}
