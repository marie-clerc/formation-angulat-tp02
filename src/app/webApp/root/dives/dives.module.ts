import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivesListComponent } from './composants/dives-list/dives-list.component';


@NgModule({
  declarations: [
    DivesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DivesListComponent
  ]
})
export class DivesModule { }
