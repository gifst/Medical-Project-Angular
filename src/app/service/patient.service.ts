import { Injectable } from '@angular/core';
import {PatientEntity} from "../models/patient";
import {Subject} from "rxjs/index";
import {max} from "rxjs/internal/operators";
import index from "@angular/cli/lib/cli";

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  private patients : PatientEntity[]=
    [{
      identifiant:109,
      nom:'Samir',
      prenom:'kahtani',
      image :'https://3.bp.blogspot.com/-rekyqiHXNFc/WXJ8K8UkwfI/AAAAAAAAAzY/id8vzJ_s5vYNmYGF2VmbBTSw7O6Xp6WrQCLcBGAs/s1600/qqqq.png',
      adress:'hay salam',
      cin:'EE526255'
      ,dateNaiss:new Date("07/11/1988"),
      sexe:'M',
      mutuelle:'CNOPS',
      email:'test@test.com',
      telephone:'0687887782'},
      {
        identifiant:110,
        nom:'Nourani ',
        prenom:'khalid',
        image :'https://3.bp.blogspot.com/-rekyqiHXNFc/WXJ8K8UkwfI/AAAAAAAAAzY/id8vzJ_s5vYNmYGF2VmbBTSw7O6Xp6WrQCLcBGAs/s1600/qqqq.png',
        adress:'DOuar l haja Ratat',
        cin:'fr56656'
        ,dateNaiss:new Date("07/11/2001"),
        sexe:'M',
        mutuelle:'CNSS',
        email:'tes3@mail.com',
        telephone:'56867767'},
      {
        identifiant:122,
        nom:'Roudani',
        prenom:'mimoun',
        image :'https://3.bp.blogspot.com/-rekyqiHXNFc/WXJ8K8UkwfI/AAAAAAAAAzY/id8vzJ_s5vYNmYGF2VmbBTSw7O6Xp6WrQCLcBGAs/s1600/qqqq.png',
        adress:'Agdal 15 rue Jilali Rabat',
        cin:'EE526255'
        ,dateNaiss:new Date("07/11/1980"),
        sexe:'M',
        mutuelle:'CNOPS',
        email:'test@test.com',
        telephone:'09898987'},
      {
        identifiant:134,
        nom:'Slimani',
        prenom:'Samira',
        image :'https://3.bp.blogspot.com/-rekyqiHXNFc/WXJ8K8UkwfI/AAAAAAAAAzY/id8vzJ_s5vYNmYGF2VmbBTSw7O6Xp6WrQCLcBGAs/s1600/qqqq.png',
        adress:'hay Lala aicha Salé',
        cin:'EE526255'
        ,dateNaiss:new Date("07/11/1988"),
        sexe:'F',
        mutuelle:'CNOPS',
        email:'test@test.com',
        telephone:'0909809887'}];
  private editedpatient : PatientEntity = null;

  patientsSubject = new Subject<any[]>();
  showPatienFormState : boolean = false;// use this variable to show or hide patienForm
  FormPatienSubject = new Subject<boolean>();
  editedPatientSubject = new Subject<PatientEntity>();

  //call this method in every change state in list patients
  emitPatientSubject(){
    this.patientsSubject.next(this.patients.slice());
  }

  emitPatienFormSubject(){
    this.FormPatienSubject.next(this.showPatienFormState);
  }
  emiteditedPatientFormSubject(){
    this.editedPatientSubject.next(this.editedpatient);
  }
  constructor() { }

  getPatienById(id:number){
    const patient = this.patients.find(
      (objectPatient)=>
      {return objectPatient.identifiant == id;}
    )
    return patient;
  }

  deletePatient(id :number){

    const index = this.patients.findIndex(patient=> patient.identifiant==id);

    if(index>=0)
      this.patients.splice(index,1);

    this.emitPatientSubject();
  }

  addPatient(patient :PatientEntity){
    // we suppose that list has elements
    if(patient.identifiant>0){
      const index = this.patients.findIndex(patient1 => patient1.identifiant==patient.identifiant);
      if(index!=-1){
        this.patients[index] = patient;
      }
    }else{
      patient.identifiant = this.patients[this.patients.length - 1].identifiant+1
      this.patients.push(patient);
    }

    this.initialiseEditedPatient(null);
    this.emitPatientSubject();
  }

  // afficher le formulaire de l'utilisateur
  showPatienForm(){
    this.showPatienFormState = true;
    this.emitPatienFormSubject();
  }
  //masquer le formulaire après chaque opération de modification ou d'ajout
  hidePatientForm() {
    this.showPatienFormState = false;
    this.emitPatienFormSubject();
  }

  initialiseEditedPatient(patient :PatientEntity){
    if(patient==null)
      this.editedpatient = new PatientEntity(0,'','','',null,'','','','','','');
    else
      this.editedpatient = patient;

    this.emiteditedPatientFormSubject();
  }


}
