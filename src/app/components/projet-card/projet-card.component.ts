import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetStatusService } from '../../services/projet-status.service';

@Component({
  selector: 'app-projet-card',
  templateUrl: './projet-card.component.html',
  styleUrls: ['./projet-card.component.css']
})
export class ProjetCardComponent implements OnInit {

  @Input() projet: any = {};
  @Input() index: number;

  constructor(private router: Router,
              private projetService: ProjetStatusService) { }

  ngOnInit() {
    this.projetService.getProjet()
        .subscribe(data => {
          console.log(data);
        });
  }

  voirProjet() {
    // console.log(this.index);
    this.router.navigate(['projet-individuel', this.index]);

  }

}
