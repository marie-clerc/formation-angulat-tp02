import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dives-detail',
  templateUrl: './dives-detail.component.html',
  styleUrl: './dives-detail.component.scss'
})
export class DivesDetailComponent implements OnInit {

    // props

    // constructor
    constructor(
      private _routeActive:ActivatedRoute,
    ){}

    ngOnInit(): void {
      console.log(this._routeActive);
      
    }


}
