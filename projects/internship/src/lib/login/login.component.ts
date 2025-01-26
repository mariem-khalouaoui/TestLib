import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../api/models';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  password: string = '';
  email: string = '';
  confirmPassword: string = '';
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';
  saveMyInfo: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordFieldType =
      this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
  }
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    sessionStorage.clear();
  }

  onNavigateToSignUp() {
    this.router.navigate(['sign-up']);
  }

  onLogin() {
    this.loginService
      .loginUser(this.email, this.password)
      .subscribe((result: AuthenticationResponse) => {
        window.sessionStorage.clear();
        window.sessionStorage.setItem('access_token', result.access_token!);
        window.sessionStorage.setItem('refresh_token', result.refresh_token!);
        window.sessionStorage.setItem('auth-user', JSON.stringify(result));
        this.router.navigate(['landing-page']);
      });
  }
}
