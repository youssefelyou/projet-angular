import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiants/etudiant.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { EtudiantCreateComponent } from './etudiants/etudiant-create/etudiant-create.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EtudiantListComponent } from './etudiants/etudiant-list/etudiant-list.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {SimpleNotificationsModule} from "angular2-notifications";
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EtudiantCreateComponent,
    EtudiantListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
