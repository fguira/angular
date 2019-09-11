import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AcceuilMedComponent } from './acceuil-med/acceuil-med.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CONST_ROUTING } from './app-routing.module';
import { ListepatComponent } from './listepat/listepat.component';
import { RdvComponent } from './rdv/rdv.component';
//import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import {  routingComponent} from "./app-routing.module";
import { DossierComponent } from './dossier/dossier.component';
import { LetrComponent } from './letr/letr.component';
import { CertificatComponent } from './certificat/certificat.component';
//import { AppareilViewComponent } from './appareil-view/appareil-view.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    DossierComponent,
    LetrComponent,
    CertificatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
