import { Injectable } from '@angular/core';

// décorateur 
@Injectable({
  providedIn: 'root'
})

export class DivesService {
 // le rôle : faire une requête HTTPClient (GET)
 // 1- Props
  private dives:any[]=[];

 // 2- constructor
  constructor() {
    //fake service
    this.dives = [
      {
          "id": 1,
          "name": "Trou Aux Biches - L'Epave du Stella Maru",
          "location": "Ile Maurice - Trou aux Biches - Nord/Ouest",
          "level": 2,
          "description": "Plongée de niveau 2 FFESSM ou PADI au arge de la barrière de Corail, départ à 8h30. Profondeur -30 mètres. Rascasses Volantes, murènes ...",
          "latitude": -20.0363,
          "longitude": 57.544700000000034,
          "evaluation": [
              7,
              9,
              8
          ],
          "photo": "https://dev.webjs.fr/images/fond1.jpg"
      },
      {
          "id": 2,
          "name": "Réserve COUSTEAU - KARUKERA",
          "location": "DOM GUADELOUPE - Basse Terre",
          "level": 1,
          "description": "Plongée de niveau 1 FFESSM ou PADI dans la baie de Bouillante, départ à 10h.Profondeur -10 à -25 mètres.",
          "latitude": 16.1549167,
          "longitude": -61.7877314,
          "evaluation": [
              10,
              9,
              10
          ],
          "photo": "https://dev.webjs.fr/images/fond2.jpg"
      },
      {
          "id": 3,
          "name": "Site de Saint Jean",
          "location": "Saint Jean Cap Ferrat - 06",
          "level": 2,
          "description": "Plongée de niveau 2 FFESSM ou PADI dans la baie de Saint Jean Cap Ferrat, 45 minutes environ, départ à 8h30. Profondeur -10 à -30 mètres.",
          "latitude": 43.68953,
          "longitude": 7.33298400000001,
          "evaluation": [
              7,
              9,
              8
          ],
          "photo": "https://dev.webjs.fr/images/fond3.jpg"
      },
      {
          "id": 4,
          "name": "Site Agay",
          "location": "Agay - 83",
          "level": 3,
          "description": "Plongée de niveau 3 FFESSM ou PADI dans la baie de Agay dans le Var, 60 minutes environ, départ à 10h.Profondeur -10 à -25 mètres.",
          "latitude": 43.43501200000001,
          "longitude": 6.86294399999997,
          "evaluation": [
              10,
              9,
              10
          ],
          "photo": "https://dev.webjs.fr/images/fond4.jpg"
      },
      {
          "id": 5,
          "name": "Ile de Cozumel",
          "location": "Cozumel - Mexique - Départ de Playa del VCarmen",
          "level": 2,
          "description": "Plongée de niveau 2 FFESSM ou PADI sur l'île de Cozumel, 45 minutes environ, départ à 8h30. Profondeur -10 à -30 mètres.",
          "latitude": 20.4317585,
          "longitude": -86.9202746,
          "evaluation": [
              7,
              9,
              8
          ],
          "photo": "https://dev.webjs.fr/images/fond5.jpg"
      }
  ];
   }

  // 3- méthodes
  public getDives(){
    return this.dives;
  }
}
