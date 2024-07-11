import { Component, Input } from '@angular/core';
import { Dives } from '../../../../../shared/class/dives';

@Component({
  selector: 'app-dives-list-child1',
  templateUrl: './dives-list-child1.component.html',
  styleUrl: './dives-list-child1.component.scss'
})
export class DivesListChild1Component {
 
  // définition des Inputs comme une prop
  // @Inout et les @Output permettent d'établir la communication entre comp parent et enfant(s)
  // ils se définissent tjs dans l'enfant 
  @Input() inputDive!:Dives

}
