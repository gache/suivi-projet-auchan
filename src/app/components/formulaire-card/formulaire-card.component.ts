import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';



@Component({
  selector: 'app-formulaire-card',
  templateUrl: './formulaire-card.component.html',
  styleUrls: ['./formulaire-card.component.css']
})
export class FormulaireCardComponent implements OnInit {

  formulaire1  : FormGroup;
  description  : string;
  Ajouter      : any;
  nomProjet    : string;
  messageAlert : string = "Le Nom du projet est nécessaire";

constructor() {
  
  this.formulaire1 = new FormGroup({

      'nomProjet'   : new FormControl(null, [
                                             Validators.required,
                                             Validators.minLength(5)],
                                             this.existeProjet
                                             ),
      'date'        : new FormControl(null, Validators.required ),
      'equipe'      : new FormControl(null, Validators.required ),
      'description' : new FormControl(null,
                                      Validators.compose

                                      ([

                                        Validators.required,
                                        Validators.minLength(5),
                                        Validators.maxLength(200)

                                      ]))
    });

// observable pour la detection de changement sur le sur l'input nomProjet
        this.formulaire1.controls['nomProjet'].valueChanges
            .subscribe(data=>{
                console.log(data);
               })

        this.formulaire1.controls['nomProjet'].statusChanges
            .subscribe(data=>{
                console.log(data);
               })
}

  ngOnInit() {
  }

  ajouter(Ajouter) {

    console.log(this.formulaire1.value);
    console.log(this.formulaire1);
      this.description = Ajouter.description;
      this.nomProjet   = Ajouter.nomProjet;

  }
// Validation async 
 existeProjet( control: FormControl ): Promise<any> | Observable<any> {

  let promise = new Promise(
    (resolve, reject)=> {
      setTimeout( () => {
        if (control.value === "projet") {
          resolve( { projetExiste: true } )
        }else{
          resolve(null)
        }
      }, 3000)
    }
  );
    return promise;
 }


}

