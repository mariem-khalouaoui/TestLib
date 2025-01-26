import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    FormsModule
  ],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
