import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './webApp/root/accueil/components/home-page/home-page.component';
import { DivesListComponent } from './webApp/root/dives/composants/dives-list/dives-list.component';
import { Page404Component } from './shared/components/page404.component';
import { DivesDetailComponent } from './webApp/root/dives/composants/dives-detail/dives-detail.component';

const routes: Routes = [
  { path:'', component: HomePageComponent, title: 'home'}, // title = seo
  { path:'liste-des-plongées', component:DivesListComponent},
  // nouveau path pour avoir le detail quand user click btn sur page liste-des-plongées
  // ':' c'est le paramètrequ'on veut faire passer dans un url
  {path:'liste-des-plongées/details/:id',
    // path:'liste-des-plongées/details/:param',
    component:DivesDetailComponent},
  
  
  // ** tous les paths non repertoriés
  // { path: '**', redirectTo:''}
  // doit toujours être en dernier
  {path:'**', component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
