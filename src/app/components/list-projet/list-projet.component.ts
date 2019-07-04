import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ProjetStatusService} from '../../services/projet-status.service';
import { Router } from '@angular/router';
import { ProjetAvecStatus } from '../../entities/projets';
import { Projet } from 'src/app/entities/projets';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  @Input() projets: ProjetAvecStatus [];
  @Output() listClick = new EventEmitter();

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

voirProjetList(projet: Projet){
  this.listClick.emit(projet);
}

}
