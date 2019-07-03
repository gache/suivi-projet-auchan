import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetStatusService} from '../../services/projet-status.service';

@Component({
  selector: 'app-projet-individuel',
  templateUrl: './projet-individuel.component.html',
  styleUrls: ['./projet-individuel.component.css']
})
export class ProjetIndividuelComponent implements OnInit {

  projetI: any = [];

  constructor( private activatedRoute: ActivatedRoute,
               private projetStatusService: ProjetStatusService) {

      this.activatedRoute.params.subscribe( param => {
            // console.log( param ['id'] );
            this.projetI = this.projetStatusService.getProjet_Individuel( param ['id'] ).subscribe(
              (data) => { this.projetI = data } // subcription pour avoir le descriptif des projets
            );
});

}

  ngOnInit() {
  }

}
