import { Injectable } from '@angular/core';
import { Dives } from '../class/dives';
import { HttpClient } from '@angular/common/http';
import { delay, map, tap } from 'rxjs';

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
    .pipe(
      // le pipe encapsule(wrappe) tous les opérateurs RxJS
      tap(
        // opérateur de débug
        (responseHTTP:any) => {
          console.log('Depuis le service : ', responseHTTP);
          
        }
      ),
      // delay(4000),
      map(
        (data:Dives[]) => {
          return data.filter(
            (datum:Dives) => {
              // return datum.id >=3;
              return datum.id >=0;
            
            }
          )
        }
      )
    )
  }
}
