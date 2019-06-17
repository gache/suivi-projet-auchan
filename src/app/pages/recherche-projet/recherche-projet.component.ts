import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetStatusService  } from '../../services/projet-status.service';


@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.component.html',
  styleUrls: ['./recherche-projet.component.css']
})
export class RechercheProjetComponent implements OnInit {

  projet2: any[] = [];
  terme: string;

  constructor(private activatedRoute: ActivatedRoute,
              private projetStatusService: ProjetStatusService,
              ) {

              }
              ngOnInit() {
                    this.activatedRoute.params.subscribe(params => {
                      this.terme = params['terme'];
                      this.projet2 = this.projetStatusService.rechercheProjet(params ['terme']);
                });

  }

}
