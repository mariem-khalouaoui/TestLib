import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
