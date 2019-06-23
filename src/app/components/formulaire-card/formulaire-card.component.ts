import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulaire-card',
  templateUrl: './formulaire-card.component.html',
  styleUrls: ['./formulaire-card.component.css']
})
export class FormulaireCardComponent implements OnInit {

  // @Output() formulaire: EventEmitter<any>

  formulaire1  : FormGroup;
  description  : string;
  Ajouter      : any;
  nomProjet    : string;
  messageAlert : string = "Definir le Porjet";

constructor() {
    // this.formulaire = new EventEmitter();
  this.formulaire1 = new FormGroup({

      'nomProjet'   : new FormControl(null, [Validators.required, Validators.minLength(3)] ),
      'equipe'      : new FormControl(null, Validators.required ),
      'description' : new FormControl(null,
                                      Validators.compose
                                      ([Validators.required,
                                        Validators.minLength(5),
                                        Validators.maxLength(500)]) )
    });
   }

  ngOnInit() {
  }

  ajouter(Ajouter) {

    console.log(this.formulaire1.value);
      this.description = Ajouter.description;
      this.nomProjet   = Ajouter.nomProjet;

  }

}

