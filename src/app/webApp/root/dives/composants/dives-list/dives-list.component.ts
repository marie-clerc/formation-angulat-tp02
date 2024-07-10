import { Component, OnInit } from '@angular/core';
import { DivesService } from '../../../../../shared/services/dives.service';
import { Dives } from '../../../../../shared/class/dives';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dives-list',
  templateUrl: './dives-list.component.html',
  styleUrl: './dives-list.component.scss'
})
export class DivesListComponent implements OnInit {
  // 1- props
  public dives:Dives[] = [];


  // 2- const
  // injection de dépendances :
  // soit un service
  // soit des fonctionnalités
  constructor (
    private _service:DivesService,
    private _title:Title,
    private meta:Meta
    ){
    console.warn('Constructor');
    this._title.setTitle('liste de plongés, SEO');
    this.meta.addTags([
      {name:'description', content:'texte de description seo ... 150 caractères'},
      {name: 'auteur', content:'ORSYS'}
    ])
  }


  // cycles de vie 
  ngOnInit(): void {
    // Rôle : chargement ou l'init des DATA
    console.warn('Oninit');
    console.table(this._service.getDives())
    // this.dives = this._service.getDives()

    this._service.getDives().subscribe(
      (data:Dives[]) => {
        console.log(data);
        this.dives = data;
      }
    )
  }


  // 4- méthodes
}
