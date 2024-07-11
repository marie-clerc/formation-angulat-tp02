import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dives } from '../../../../../shared/class/dives';

@Component({
  selector: 'app-dives-detail',
  templateUrl: './dives-detail.component.html',
  styleUrl: './dives-detail.component.scss'
})
export class DivesDetailComponent implements OnInit {

    // props
    public title:string='';
    public dive:Dives = new Dives();
    // public dive!:Dives;
    // public dive:Dives = {} as Dives; // cast
 

    // constructor
    constructor(
      private _routeActive:ActivatedRoute,
    ){}

    ngOnInit(): void {
      console.log(this._routeActive.snapshot.params['id']);
      // console.log(this._routeActive.snapshot.params['param']);
      
      // autre moyen de recup les parametres
      const id = this._routeActive.snapshot.paramMap.get('id');
      this.title = `Plongée N° ${id}`;
    
      

    // 1 : Si on a un ID ==> 
    // reconsommer le service 
    // (rappel de l'observable multicast subject behaviourSubject)
    
    //  reconsulter le storage (10MB de datas simples) Cookie (4KB) ou indexedDB (BBD noSQL locale indexée)
    // localStorage.setItem('1','test');
    
    // 2- On utilise le queryParams de NG

    this._routeActive.queryParams
    // .pipe()
    .subscribe(
      (param:Params) => {
        console.log('QueryParams : ', param, typeof(param));
        this.dive = param as Dives; // as = cast
      }
    )
    }

}
