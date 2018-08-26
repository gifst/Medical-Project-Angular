import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoPatientComponent } from './patient/info-patient/info-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { DossierPatientComponent } from './dossiersMedicals/dossier-patient/dossier-patient.component';
import {PatientService} from "./service/patient.service";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthentificationService} from "./service/authentification.service";
import {AuthGuard} from "./service/auth.guard";
import { ListDossierComponent } from './dossiersMedicals/list-dossier/list-dossier.component';
import { AjouterPatientComponent } from './patient/ajouter-patient/ajouter-patient.component';
import { EditPatientComponent } from './patient/edit-patient/edit-patient.component';
import { DetailVisiteComponent } from './OperationMedical/Visite/detail-visite/detail-visite.component';
import { ListVisiteComponent } from './OperationMedical/Visite/list-visite/list-visite.component';
import { AddVisiteComponent } from './OperationMedical/Visite/add-visite/add-visite.component';
import {VisiteService} from "./service/visite.service";


const appRoutes :Routes =[
  {path:'list-Patient',canActivate:[AuthGuard],component:ListPatientComponent},
  {path:'patient/:id',canActivate:[AuthGuard],component:InfoPatientComponent},
  {path:'',canActivate:[AuthGuard],component:HomeComponent},
  {path:'dossiers-medicals',canActivate:[AuthGuard],component:ListDossierComponent},
  {path:'auth',component:AuthentificationComponent},
  {path:'not-found',component:Page404Component},
  {path:'**',redirectTo:'/not-found'}

]


@NgModule({
  declarations: [
    AppComponent,
    InfoPatientComponent,
    ListPatientComponent,
    DossierPatientComponent,
    HomeComponent,
    Page404Component,
    AuthentificationComponent,
    ListDossierComponent,
    AjouterPatientComponent,
    EditPatientComponent,
    DetailVisiteComponent,
    ListVisiteComponent,
    AddVisiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PatientService, AuthentificationService,AuthGuard, VisiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
