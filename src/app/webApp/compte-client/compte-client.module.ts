import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompteClientRoutingModule } from './compte-client-routing.module';
import { ClientBodyComponent } from './composants/client-body/client-body.component';
import { ClientFooterComponent } from './composants/client-footer/client-footer.component';
import { ClientHeaderComponent } from './composants/client-header/client-header.component';
import { ClientLandingPageComponent } from './composants/client-landing-page/client-landing-page.component';
import { RouterModule } from '@angular/router';
import { ClientMesCommandesComponent } from './composants-routing/client-mes-commandes/client-mes-commandes.component';
import { ClientMesLivraisonsComponent } from './composants-routing/client-mes-livraisons/client-mes-livraisons.component';
import { ClientMonEspaceComponent } from './composants-routing/client-mon-espace/client-mon-espace.component';


@NgModule({
  declarations: [
    ClientBodyComponent,
    ClientFooterComponent,
    ClientHeaderComponent,
    ClientLandingPageComponent,
    ClientMesCommandesComponent,
    ClientMesLivraisonsComponent,
    ClientMonEspaceComponent
  ],
  imports: [
    CommonModule,
    CompteClientRoutingModule,
    RouterModule,
  ],
  exports : [
    ClientLandingPageComponent,
  ]
})
export class CompteClientModule { }
