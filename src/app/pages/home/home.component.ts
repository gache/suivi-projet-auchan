import { Component, OnInit, Input } from '@angular/core';
import { ProjetStatusService } from '../../services/projet-status.service'; // Importation du service
import { ProjetAvecStatus } from '../../entities/projets';  // Importation de la interface
import { Router } from '@angular/router'; // Importation de la route


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() projets: ProjetAvecStatus[] = [];

  voirslider: ProjetAvecStatus;
  slidingIndex = 0;
  setTimeoutId;
  sliding = true;

  selectedProject: ProjetAvecStatus;

  constructor(private projetStatusService: ProjetStatusService, private router: Router) {
    this.projetStatusService.getProjet().subscribe(
      (data) => {
        this.projets = data;
        console.log(this.projets);
      }
    );
  }



  ngOnInit() {
    this.startSlider();
  }
startSlider() {
    let index;

    if (this.sliding) {
      index = this.slidingIndex++;

      if (this.slidingIndex >= this.projets.length) {
        this.slidingIndex = 0;
      }
      this.selectedProject = this.projets[index];
    }
    this.setTimeoutId = setTimeout(() => {
      this.startSlider();
    }, 3000);
  }

  booleanChange() {
    this.sliding = !this.sliding;
  }
  voirProjet(idx: number) {
    this.router.navigate(['projet-individuel', idx]);
  }

  voirDetailProjet(projet: ProjetAvecStatus) {
    console.log(projet.nom);
    this.selectedProject = projet;
  }

  voirList(list: ProjetAvecStatus) {
    this.voirslider = list;
  }

  //   suiviProjet(index: string) {
  //     // console.log(this.index);
  //     this.router.navigate(['suiviProjet', index]);

  // }
}