import { Component, OnInit } from '@angular/core';
import { ProjetStatusService } from '../../services/projet-status.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
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
}
