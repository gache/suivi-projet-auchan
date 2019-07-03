import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ProjetStatusService} from '../../services/projet-status.service';
import { Router } from '@angular/router';
import { ProjetAvecStatus } from '../../entities/projets';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  @Input() projets: ProjetAvecStatus [];
  @Output() list = new EventEmitter();

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

voirProjetList(){
  this.router.navigate(['projet-card']);
}

}
