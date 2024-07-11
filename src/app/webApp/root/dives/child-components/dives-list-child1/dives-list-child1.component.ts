import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() infos!:string

  // @Output()
  // remonté de l'info du compo enfant au parent
  // output toujours un eventEmitter
  @Output() outputEventDive:EventEmitter<any> = new EventEmitter();

  public choixDive = (e:any) => {
    // console.log('checkbox : ', e, e.target, e.target.checked);
    console.warn('warn :',this.inputDive, e.target.checked);
    // ---
    this.outputEventDive.emit({
      paramIsChacked:e.target.checked, // paramIsChecked : Boolean
      paramDive:this.inputDive, // objet entier {id:1, name: ...}
      paramIdDive:this.inputDive.id
    })

  }

}
