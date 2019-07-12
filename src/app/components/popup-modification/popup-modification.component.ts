import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Projet } from '../../entities/projets';
import * as moment from 'moment'; // Importation de la librerie moment pour la date
import * as $ from 'jquery';     // importation du $ avec jqyery

@Component({
  selector: 'app-popup-modification',
  templateUrl: './popup-modification.component.html',
  styleUrls: ['./popup-modification.component.css']
})
export class PopupModificationComponent implements OnInit {

  @Input() projet: Projet;
  @Output() change = new EventEmitter();

  // Modal 
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;


  // formulaire 
  modification1: FormGroup;
  commentaire: string;
  Enregistrer: string;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;

    // Creation des parametres de la validation du formulaire du popup
    this.modification1 = new FormGroup({

      'status'     : new FormControl(null, Validators.required),
      'date'       : new FormControl(null, Validators.required),
      'commentaire': new FormControl(null, Validators.compose
        ([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200)
        ]))
    });
  }

  ngOnInit() {
  }

  // funtion pour ouvrir le modal "Modification Projet"
  open(content) {
    this.modalService.open(content);
  }


  // funtion pour enregistre les modification du modal avec l'output
  enregistrer() {

    console.log(this.modification1.value);
    console.log('ici on emet');

    this.commentaire = this.modification1.value.commentaire;

    this.change.emit({

      status: this.modification1.value.status,
      commentaire: this.modification1.value.commentaire,
      // Utilisation de la librerie moment  pour le changement de la date
      date: moment(this.modification1.value.date).format("YYYYMMDD")

    });
     //  fermeture du popup
    this.modalService.dismissAll();

  }
 
  close() {
    $('.modal').modal('hiden');
  }

}
