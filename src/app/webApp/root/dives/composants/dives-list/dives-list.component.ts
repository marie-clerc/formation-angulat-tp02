import { Component } from '@angular/core';
import { DivesService } from '../../../../../shared/services/dives.service';

@Component({
  selector: 'app-dives-list',
  templateUrl: './dives-list.component.html',
  styleUrl: './dives-list.component.scss'
})
export class DivesListComponent {
  // 1- props

  // 2- const
  // injection de dépendances :
  // soit un service
  // soit des fonctionnalités
  constructor (
    private _service:DivesService
  ){
    
  }

  // 3- méthodes
}
