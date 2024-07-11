import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivesListComponent } from './composants/dives-list/dives-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DivesDetailComponent } from './composants/dives-detail/dives-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DivesListComponent,
    DivesDetailComponent
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
