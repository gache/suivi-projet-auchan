import { Component, OnInit, Input } from '@angular/core';
import { ProjetStatusService} from '../../services/projet-status.service';
import { Projet, ProjetStatus} from '../../entities/projets';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() projets: Projet [] = [];

  constructor(private projetStatusService: ProjetStatusService,
              private router: Router ) {
    this.projets = this.projetStatusService.getProjet();
    console.log(this.projets);
   }

  ngOnInit() {

  }

  voirProjet(idx: number){
    this.router.navigate(['projet-individuel', idx]);
  }

}
