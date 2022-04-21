import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {EtudiantCreateComponent} from "./etudiants/etudiant-create/etudiant-create.component";
import {EtudiantListComponent} from "./etudiants/etudiant-list/etudiant-list.component";

export const components = [EtudiantCreateComponent /*0*/,
                          EtudiantListComponent /*1*/,]

const routes: Routes = [
  {path: 'etudiant-create', component: components[0]},
  {path: 'etudiant-list', component: components[1]}


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),]
})
export class AppRoutingModule { }
