import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from "./doctor/doctor.component";

import { ListepatComponent } from "./listepat/listepat.component";
import { from } from 'rxjs';
const MAINMENU_ROUTES: Routes = [

    //full : makes sure the path is absolute path

    { path: '', redirectTo: '/listepat', pathMatch: 'full' },

    { path: 'dlistepat', component: ListepatComponent },
    { path: '', redirectTo: '/doctor', pathMatch: 'full' },

    { path: 'doctor', pathMatch: 'full',component: DoctorComponent },
      
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
export const routingComponent =[ListepatComponent, DoctorComponent]
