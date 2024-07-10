import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  // propriétés
 
  public codeCours:string='NG';
 
  public result:string='ok';
 
  // méthodes
  public methodClic(){
    this.result='Vous avez cliqué !';
  } 
}
