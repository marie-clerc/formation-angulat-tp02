import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivesListComponent } from './composants/dives-list/dives-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DivesDetailComponent } from './composants/dives-detail/dives-detail.component';
import { RouterModule } from '@angular/router';
import { DivesListChild1Component } from './child-components/dives-list-child1/dives-list-child1.component';
import { DivesListChild2Component } from './child-components/dives-list-child2/dives-list-child2.component';


@NgModule({
  declarations: [
    DivesListComponent,
    DivesDetailComponent,
    DivesListChild1Component,
    DivesListChild2Component
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule
    HttpClientModule,
    RouterModule
    // 
  ],
  exports: [
    DivesListComponent
  ]
})
export class DivesModule { }
