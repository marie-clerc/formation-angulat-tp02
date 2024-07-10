import { Component, OnDestroy, OnInit } from '@angular/core';
import { DivesService } from '../../../../../shared/services/dives.service';
import { Dives } from '../../../../../shared/class/dives';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dives-list',
  templateUrl: './dives-list.component.html',
  styleUrl: './dives-list.component.scss'
})
export class DivesListComponent implements OnInit, OnDestroy {
  // 1- props
  public dives:Dives[] = [];

  private subData:Subscription = new Subscription();


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

    // Abonnement !
    this.subData = this._service.getDives()
    .subscribe(
      (data:Dives[]) => {
        console.log('Depuis le composant : ', data);
        this.dives = data;
      }
    )
  }
  // -------------

  ngOnDestroy(): void {
    window.alert('Comp Destroy');
    this.subData.unsubscribe();
  }

  // 4- méthodes
}
