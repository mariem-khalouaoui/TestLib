import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NavButtonComponent } from './app-header/nav-button/nav-button.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppHeaderComponent, NavButtonComponent, ActionButtonComponent, AppFooterComponent],
  exports: [AppHeaderComponent, NavButtonComponent, ActionButtonComponent, AppFooterComponent]
})
export class SharedModule { }
