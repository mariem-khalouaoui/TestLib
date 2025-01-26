import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';
import { AuthenticationResponse } from '../api/models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  password: string = '';
  email: string = '';
  confirmPassword: string = '';
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';

  togglePasswordVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordFieldType =
      this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
  }
  constructor(private router: Router, private signUpService: SignUpService) {}

  ngOnInit() {
    sessionStorage.clear();
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }
  submit() {
    this.signUpService
      .registerUser(this.email, this.password)
      .subscribe((result: AuthenticationResponse) => {
        if (result.access_token) {
          this.router.navigate(['login']);
        }
      });
  }
}
