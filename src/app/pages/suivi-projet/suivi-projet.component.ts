import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetStatusService } from '../../services/projet-status.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-suivi-projet',
  templateUrl: './suivi-projet.component.html',
  styleUrls: ['./suivi-projet.component.css']
})

export class SuiviProjetComponent implements OnInit {

  suiviProjet: any = {};
  // suivi: string;


  constructor( private activatedRoute: ActivatedRoute,
               private projetStatusService: ProjetStatusService,
               private router: Router) {

                // suiviProjet() {
                // console.log(  this.index );
                //   this.router.navigate( ['/heroe', this.index] );
                // this.heroeSeleccionado.emit( this.index );
                // }
               }

  ngOnInit() {
    this.suiviProjet = this.projetStatusService.getProjet();
    console.log(this.suiviProjet);
  }
 
}
