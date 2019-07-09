import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjetStatusService } from '../../services/projet-status.service';
import { Projet, ProjetAvecStatus } from '../../entities/projets';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() projets: ProjetAvecStatus [];
  @Output() listSlider = new EventEmitter();

  constructor(private projetService: ProjetStatusService) { }

  ngOnInit() {

  }

  voirSlider(slider: Projet) {
    this.listSlider.emit(slider);
  }

 
}
