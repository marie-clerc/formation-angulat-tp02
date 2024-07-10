import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivesListComponent } from './composants/dives-list/dives-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DivesListComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule
    HttpClientModule,
    // 
  ],
  exports: [
    DivesListComponent
  ]
})
export class DivesModule { }
