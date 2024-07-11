import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilModule } from './webApp/root/accueil/accueil.module';
import { Page404Component } from './shared/components/page404.component';
import { CompteClientModule } from './webApp/compte-client/compte-client.module';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // importer notre propre modules
    AccueilModule,
    CompteClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
