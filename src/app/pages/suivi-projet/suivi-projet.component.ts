import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetStatusService } from '../../services/projet-status.service';


@Component({
  selector: 'app-suivi-projet',
  templateUrl: './suivi-projet.component.html',
  styleUrls: ['./suivi-projet.component.css']
})

export class SuiviProjetComponent implements OnInit {

  suiviProjet: any = {};
  suivi: string;

  constructor( private activatedRoute: ActivatedRoute,
               private projetStatusService: ProjetStatusService) {


                this.activatedRoute.params.subscribe( params => {
                  // console.log( params ['commentaire'] );
                this.suivi = params[' suivi'];
                this.suiviProjet = this.projetStatusService.getProjet_Individuel( params [' suivi '] );
      });
               }

  ngOnInit() {
  }
 
}
