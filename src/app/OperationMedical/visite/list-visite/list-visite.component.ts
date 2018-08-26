import {Component, Input, OnInit} from '@angular/core';
import {VisiteEntity} from "../../../models/Visite";
import {Subscription} from "rxjs/index";
import {VisiteService} from "../../../service/visite.service";

@Component({
  selector: 'app-list-visite',
  templateUrl: './list-visite.component.html',
  styleUrls: ['./list-visite.component.css']
})
export class ListVisiteComponent implements OnInit {

  listVisite : VisiteEntity[];
  @Input()
    idPatient : number;
  listVisiteSubscruption : Subscription;

  constructor(private visteService : VisiteService ) { }

  ngOnInit() {
    this.listVisiteSubscruption = this.visteService.listVisiteSubject.subscribe(
      (visites:any[])=>
      {
        this.listVisite = visites;
      }
    );
    this.visteService.initialiseListVisite(this.idPatient);
  }


  editVisite(identifiant : number){

  }

  deleteVisite(identifiant : number){

  }

}
