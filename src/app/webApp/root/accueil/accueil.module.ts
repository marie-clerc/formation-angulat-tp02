import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    LandingPageComponent
  ]
})
export class AccueilModule { }
