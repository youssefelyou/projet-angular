import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../../controller/model/etudiant.module";
import {EtudiantService} from "../../controller/service/etudiant.service";

@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrls: ['./etudiant-create.component.css']
})
export class EtudiantCreateComponent implements OnInit {

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
  }

  public save(){
    this.etudiantService.save();
  }

  public delete(index: number) {
    this.etudiants.splice(index, 1);

  }

  public update(index: number, etudiant: Etudiant) {
    this.etudiantService.update(index, etudiant);

  }

  get etudiants(): Array<Etudiant> {
    return this.etudiantService.etudiants;
  }

  get etudiant(): Etudiant {
    return this.etudiantService.etudiant;
  }

}
