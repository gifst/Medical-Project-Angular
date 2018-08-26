import {Component, Input, OnInit} from '@angular/core';
import {PatientEntity} from "../../models/patient";
import {PatientService} from "../../service/patient.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit {

  @Input() patient :PatientEntity;

  constructor(private patienService:PatientService, private route : ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if(id!=null){
      this.patient = this.patienService.getPatienById(+id);
    }
  }


  // return le nom complet avec Madame ou monsieur
  getNomComplet():string{
    return ((this.patient.sexe=='F')? 'Madame ':'Monsieur ')+this.patient.nom+' '+this.patient.prenom
  }
}
