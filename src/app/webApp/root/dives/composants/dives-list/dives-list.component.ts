import { Component, OnInit } from '@angular/core';
import { DivesService } from '../../../../../shared/services/dives.service';

@Component({
  selector: 'app-dives-list',
  templateUrl: './dives-list.component.html',
  styleUrl: './dives-list.component.scss'
})
export class DivesListComponent implements OnInit {
  // 1- props
  public dives:any[] = [];


  // 2- const
  // injection de dépendances :
  // soit un service
  // soit des fonctionnalités
  constructor (
    private _service:DivesService
  ){
    console.warn('Constructor');

  }


  // cycles de vie 
  ngOnInit(): void {
    // Rôle : chargement ou l'init des DATA
    console.warn('Oninit');
    console.table(this._service.getDives())
    this.dives = this._service.getDives()
  }


  // 4- méthodes
}
