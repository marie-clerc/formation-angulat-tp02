import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMesLivraisonsComponent } from './composants-routing/client-mes-livraisons/client-mes-livraisons.component';
import { ClientMesCommandesComponent } from './composants-routing/client-mes-commandes/client-mes-commandes.component';
import { ClientMonEspaceComponent } from './composants-routing/client-mon-espace/client-mon-espace.component';

// export const routesClient: Routes = [
  const routes: Routes = [
  {path: 'mes-livraisons', component:ClientMesLivraisonsComponent},
  {path: 'mes-commandes', component: ClientMesCommandesComponent},
  {path: 'mon-espace', component: ClientMonEspaceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteClientRoutingModule { }
