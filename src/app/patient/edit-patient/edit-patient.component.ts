import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {PatientEntity} from "../../models/patient";
import {Subscription} from "rxjs/index";
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {


  //l'objet formulaire qui correspond au formulaire dans le templète
  patientForm : FormGroup;
  @Input()
  patient :PatientEntity;
  @Input()
  showForm :boolean ;
  EditedPatienSubscription : Subscription;

  constructor(private formbuilder: FormBuilder,private patientService :PatientService ) { }

  ngOnInit() {
    this.EditedPatienSubscription = this.patientService.editedPatientSubject.subscribe(
      (editedpatient:PatientEntity)=>{
        this.patient = editedpatient;
      }
    );
    this.patientService.emiteditedPatientFormSubject();
    this.initForm();

    console.log('ngOnInit');

  }

  initForm(){
    if(this.patient === null)
      this.patient = new PatientEntity(0,'','','',null,'','','','','','');
    this.patientForm = this.formbuilder.group({
      identifiant:[this.patient.identifiant],
      cin:[this.patient.cin,Validators.required],
      nom:[this.patient.nom,Validators.required],
      prenom: [this.patient.prenom,Validators.required],
      dateNaiss :[this.patient.dateNaiss],
      sexe :[this.patient.sexe],
      mutuelle : [this.patient.mutuelle],
      telephone :[this.patient.telephone],
      email:[this.patient.email,[Validators.required,Validators.email]],
      adress : [this.patient.adress],
      image : [this.patient.image]
    })
  }

  OnSave(){


    const values = this.patientForm.value;

    var newpatient = new PatientEntity(
      +values['identifiant'],
      values['cin'],
      values['nom'],
      values['prenom'],
      values['dateNaiss'],
      values['sexe'],
      values['mutuelle'],
      values['telephone'],
      values['email'],
      values['adress'],
      values['adress']
    );
    this.patientService.addPatient(newpatient);
    this.showForm = false;


    this.patientService.hidePatientForm();
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }

}
