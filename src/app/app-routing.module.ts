import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './webApp/root/accueil/components/home-page/home-page.component';
import { DivesListComponent } from './webApp/root/dives/composants/dives-list/dives-list.component';
import { Page404Component } from './shared/components/page404.component';

const routes: Routes = [
  { path:'', component: HomePageComponent}, //www.domain.tld
  { path:'liste-des-plongées', component:DivesListComponent},
  
  // ** tous les paths non repertoriés
  // { path: '**', redirectTo:''}
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
