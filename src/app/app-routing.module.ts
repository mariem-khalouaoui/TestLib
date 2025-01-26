import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from 'projects/internship/src/lib/sign-up/sign-up.component';
import { LoginComponent } from 'projects/internship/src/lib/login/login.component';
import { LandingPageComponent } from 'projects/internship/src/lib/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
