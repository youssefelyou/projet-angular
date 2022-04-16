import { Component, OnInit } from '@angular/core';
import {EtudiantService} from "../../controller/service/etudiant.service";
import {Etudiant} from "../../controller/model/etudiant.module";

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  public delete(index: number) {
    this.etudiants.splice(index, 1);

  }

  public update(index: number, etudiant: Etudiant) {
    this.etudiantService.update(index, etudiant);

  }

  get etudiants(): Array<Etudiant> {
    return this.etudiantService.etudiants;
  }

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
  }

}
