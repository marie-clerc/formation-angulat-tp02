import { Injectable } from '@angular/core';
import { Dives } from '../class/dives';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// décorateur 
@Injectable({
  providedIn: 'root'
})

export class DivesService {
 // le rôle : faire une requête HTTPClient (GET)
 // 1- Props
  private dives:Dives[] =[];

 // 2- constructor
  constructor(
    private _http:HttpClient
  ) {}

  // 3- méthodes
  public getDives(){

    const API_URL='http://localhost:4201/dives'
    // const API_URL = 'https://dev.webjs.fr/dives.json'

    return this._http.get<Dives[]>(API_URL)
    
  }
}
