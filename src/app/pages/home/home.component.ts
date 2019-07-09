import { Component, OnInit, Input } from '@angular/core';
import { ProjetStatusService} from '../../services/projet-status.service';
import { ProjetAvecStatus } from '../../entities/projets';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() projets: ProjetAvecStatus [] = [];

  voirslider: ProjetAvecStatus;
  slidingIndex:number = 0;
  setTimeoutId;

  selectedProject: ProjetAvecStatus;

  constructor(private projetStatusService: ProjetStatusService,
              private router: Router ) {
    this.projetStatusService.getProjet().subscribe(
      (data) => {
        this.projets = data;
        console.log(this.projets);
      }
    );
   }



  ngOnInit() {
    let slide = () => {
      let index = this.slidingIndex++;
      if (this.slidingIndex >= this.projets.length) this.slidingIndex = 0;
      this.selectedProject = this.projets[index];
      this.setTimeoutId = setTimeout(slide, 5000);
    }

    slide();
  }

  voirProjet(idx: number){
    this.router.navigate(['projet-individuel', idx]);
  }

  voirDetailProjet(projet: ProjetAvecStatus) {
    console.log(projet.nom);
    this.selectedProject = projet;
  }

  voirList(list: ProjetAvecStatus){
    this.voirslider = list;
  }

//   suiviProjet(index: string) {
//     // console.log(this.index);
//     this.router.navigate(['suiviProjet', index]);

// }
}
