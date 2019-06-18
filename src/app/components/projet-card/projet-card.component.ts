import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projet-card',
  templateUrl: './projet-card.component.html',
  styleUrls: ['./projet-card.component.css']
})
export class ProjetCardComponent implements OnInit {

  @Input() projet: any = {};
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voirProjet() {
    // console.log(this.index);
    this.router.navigate(['projet-individuel', this.index]);

  }

}
