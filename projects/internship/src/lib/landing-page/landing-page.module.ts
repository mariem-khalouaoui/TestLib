import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    LandingPageComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent,
    PricingComponent,
  ],
})
export class LandingPageModule {}
