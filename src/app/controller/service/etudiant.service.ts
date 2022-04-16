import { Injectable } from '@angular/core';
import {Etudiant} from "../model/etudiant.module";
import {HttpClient} from "@angular/common/http";
import {NotificationsService} from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient,
              private service: NotificationsService) { }

  private urlBase = 'http://localhost:8099';
  private _url = '/etudiant/etudiant';

  public save(){
    if(this.etudiant.id==null){
      this.http.post(this.urlBase + this._url + '/', this.etudiant).subscribe(

        data=>{
          this.findAll();
          this.etudiants.push(this.clone(this.etudiant));
          this.onSuccess();
        },error=>{
          this.onError();
      }
      );

    }else{
      this.http.post(this.urlBase + this._url + '/', this.etudiant).subscribe(
        DATA=>{
          this.findAll();
          this.etudiants[this._index]=this.clone(this.etudiant);

          alert(DATA);
        }
      )

    }

    // @ts-ignore
    this.etudiant=null;
  }
  public findAll(){
    this.http.get<Array<Etudiant>>(this.urlBase + this._url + '/').subscribe(
      data=>{
        this.etudiants = data;
      }, error => {
        console.log('error' + error);
      }
    );
  }

  onSuccess() {
    this.service.success('Success', 'save success', {
      position: ['middle', 'center'],
      timeOut: 1000,
      animation: 'fade',
      pauseOnHover: true,
      showProgressBar: true
    });
  }

  onError() {
    this.service.error('Error', 'error to save', {
      position: ['middle', 'center'],
      timeOut: 1000,
      // animation: 'fade',
      pauseOnHover: true,
      showProgressBar: true
    });
  }

  private _etudiant: Etudiant = new Etudiant();
  private _etudiants: Array<Etudiant> = [];


  get etudiant(): Etudiant {
    if (this._etudiant== null){
      this._etudiant = new Etudiant();
    }
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }

  get etudiants(): Array<Etudiant> {
    if (this._etudiants== null){
      this._etudiants = new Array<Etudiant>();
    }
    return this._etudiants;
  }

  set etudiants(value: Array<Etudiant>) {
    this._etudiants = value;
  }

  _index=0;

  public update(index: number, etudiant: Etudiant) {
    this.etudiant = this.clone(etudiant);
    this._index = index;
  }

  private clone(etudiant: Etudiant) {
    let myClone = new Etudiant();
    myClone.id = etudiant.id;
    myClone.ref = etudiant.ref;
    myClone.cin = etudiant.cin;
    myClone.datenaissance = etudiant.datenaissance;
    myClone.nom = etudiant.nom;
    myClone.filiere = etudiant.filiere;

    return myClone;
  }
}
