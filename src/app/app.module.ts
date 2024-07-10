import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilModule } from './webApp/root/accueil/accueil.module';
import { Page404Component } from './shared/components/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // importer notre propre modules
    AccueilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
