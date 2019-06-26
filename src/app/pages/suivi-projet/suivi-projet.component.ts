import { Component, OnInit } from '@angular/core';
import { ProjetStatusService } from '../../services/projet-status.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Projet } from 'src/app/entities/projets';




@Component({
  selector: 'app-suivi-projet',
  templateUrl: './suivi-projet.component.html',
  styleUrls: ['./suivi-projet.component.css']
})

export class SuiviProjetComponent implements OnInit {


  suiviProjet: any = {};
  // suivi: string;

  model: NgbDateStruct;
  date: {day: number,  month: number, year: number };

  constructor(private projetStatusService: ProjetStatusService,
              private calendar: NgbCalendar )  {

                }

       ngOnInit() {
              this.suiviProjet = this.projetStatusService.getProjet();
              console.log(this.suiviProjet);
              }

              // selectToday() {
              //   this.model = this.calendar.getToday();
              // }

              setStatus(project: Projet, newStatus:{status: string,commentaire: string,date: string}) {
                // Appel au service de modification de status
                console.log('ici on recoit l emission');
                this.projetStatusService.setProjectStatus(project,newStatus.status,newStatus.commentaire,newStatus.date);
              }

              setAjouter(ajouter: Projet, newAjout:{ nomProjet: string, date: string, equipe: string, description: string }) {
                // Appel au service de modification de status
                console.log('ici on recoit l emission');
                this.projetStatusService.setAjouterProjet(ajouter,newAjout.nomProjet, newAjout.date,newAjout.equipe, newAjout.description)

              }




}
