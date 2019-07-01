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

  }

  voirProjet(idx: number){
    this.router.navigate(['projet-individuel', idx]);
  }

//   suiviProjet(index: string) {
//     // console.log(this.index);
//     this.router.navigate(['suiviProjet', index]);

// }
}
