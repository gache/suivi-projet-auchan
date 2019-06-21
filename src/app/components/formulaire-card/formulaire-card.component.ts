import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulaire-card',
  templateUrl: './formulaire-card.component.html',
  styleUrls: ['./formulaire-card.component.css']
})
export class FormulaireCardComponent implements OnInit {

  // @Output() formulaire: EventEmitter<any>

  formulaire1: FormGroup;
  constructor() {
    // this.formulaire = new EventEmitter();
    this.formulaire1 = new FormGroup({

      'nomProjet'  : new FormControl('', Validators.required ),
      'equipe'     : new FormControl('', Validators.required ),
      'description': new FormControl('', Validators.required )
    });
   }

  ngOnInit() {
  }

  ajouter() {
    console.log(this.formulaire1.value);

  }

}
