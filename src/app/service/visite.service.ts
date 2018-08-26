import { Injectable } from '@angular/core';
import {VisiteEntity} from "../models/Visite";
import {Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  //example DatatSource
  private listVisiteInitiale : VisiteEntity[] =
    [{
      identifiant : 1,
      MotifDeVisite : 'consultation simple',
      DateVisite : new Date(),
      idPatient : 109
    },
      {
        identifiant : 2,
        MotifDeVisite : 'mal au dos',
        DateVisite : new Date(),
        idPatient : 110
      },
      {
        identifiant : 3,
        MotifDeVisite : 'mal à la gorge',
        DateVisite : new Date(),
        idPatient : 109
      }
      ];

  private listVisite : VisiteEntity[] ;


  listVisiteSubject = new Subject<any[]>();

  emitlistvistSubject(){
    this.listVisiteSubject.next(this.listVisite.slice());
  }

  constructor() { }


  initialiseListVisite(idPatient :number){
    // filter à vérifier
    this.listVisite = this.listVisiteInitiale.filter(visite=>visite.idPatient ==idPatient);
    this.emitlistvistSubject();

  }
}
