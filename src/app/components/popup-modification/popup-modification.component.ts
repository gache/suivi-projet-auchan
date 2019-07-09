import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Projet } from '../../entities/projets';
import * as moment from 'moment'; // Importation de la librerie pour la date
import * as $ from 'jquery';

@Component({
  selector: 'app-popup-modification',
  templateUrl: './popup-modification.component.html',
  styleUrls: ['./popup-modification.component.css']
})
export class PopupModificationComponent implements OnInit {

  @Input () projet: Projet;
  @Output() change = new EventEmitter();

// Modal 
  modalRef : BsModalRef | null;
  modalRef2: BsModalRef;

  // parametre de la validation du formulaire 

  modification1 : FormGroup;
  commentaire   : string;
  Enregistrer   : string;

constructor(config: NgbModalConfig, private modalService: NgbModal) { 
  config.backdrop = 'static';
  config.keyboard = false;

  this.modification1 = new FormGroup({

    'status'      : new FormControl(null, Validators.required),
    'date'        : new FormControl(null, Validators.required ),
    'commentaire' : new FormControl(null, Validators.compose
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

 
  // funtion pour enregistre les modification du modal
  enregistrer() {

  console.log(this.modification1.value);
  console.log('ici on emet');

    this.commentaire = this.modification1.value.commentaire;

    this.change.emit({

      status      : this.modification1.value.status,
      commentaire : this.modification1.value.commentaire,
      date        : moment(this.modification1.value.date).format("YYYYMMDD")

    });
    this.modalService.dismissAll();

  }

  close(){
    $('.modal').modal('hiden');
  }

}
