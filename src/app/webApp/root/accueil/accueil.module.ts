import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { DivesModule } from '../dives/dives.module';
import { RouterModule } from '@angular/router';
// import { CompteClientModule } from '../../compte-client/compte-client.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    // 1 des composantse module (cette partie de l'appli)
    // utilise une directive des formulaires angular
    FormsModule,
    RouterModule,
    // nos propres modules
    DivesModule,
    // pour faire le lien entre compte-client (enfant) à accueil (parent)
    // CompteClientModule,
    
  ],
  exports : [
    LandingPageComponent
  ]
})
export class AccueilModule { }
