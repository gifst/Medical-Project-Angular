import { Component, OnInit } from '@angular/core';
import {PatientEntity} from "../models/patient";
import {PatientService} from "../service/patient.service";
import {Subscription} from "rxjs/index";


@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  listPatients : PatientEntity[];
  listPatienSubscription : Subscription
  FormPatienSubscription : Subscription


  editedpatient : PatientEntity = null;
  showFormPatient : boolean = false;

  constructor(private patientService :PatientService) { }

    ngOnInit() {
    this.listPatienSubscription = this.patientService.patientsSubject.subscribe(
      (patients:any[])=>{
            this.listPatients = patients;
      }
    );
    this.patientService.emitPatientSubject();
    this.FormPatienSubscription= this.patientService.FormPatienSubject.subscribe(
      (showForm:boolean)=>{
        this.showFormPatient = showForm;
      });
    this.patientService.emitPatienFormSubject();
    }


  deletePatient(id){
    if(confirm("Are you sure to delete "))
      this.patientService.deletePatient(+id);
  }

  editPatient(id){
    var  patient = this.patientService.getPatienById(+id);
    this.editedpatient = patient;
    console.log(this.editedpatient);
    this.patientService.initialiseEditedPatient(this.editedpatient);
    this.patientService.showPatienForm();
  }


  addPatient(){
    this.editedpatient = null;
    this.patientService.initialiseEditedPatient(this.editedpatient);
    this.patientService.showPatienForm();
    console.log('addPatient() : '+this.showFormPatient )
  }

}
