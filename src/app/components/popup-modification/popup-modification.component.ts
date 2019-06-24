import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-modification',
  templateUrl: './popup-modification.component.html',
  styleUrls: ['./popup-modification.component.css']
})
export class PopupModificationComponent implements OnInit {


// Modal 

  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;

  // parametre de la validation

  modification1 : FormGroup;
  commentaire   : string;
  Enregistrer   : any;

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;

    this.modification1 = new FormGroup({
      'status'      : new FormControl(null, Validators.required),
      'commentaire' : new FormControl(null, Validators.compose([
                                            Validators.required,
                                            Validators.minLength(10),
                                            Validators.maxLength(200)]))

    })
  }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }

  enregistrer(Enregistrer) {
    // console.log(this.modification1.value);
    this.commentaire =  Enregistrer.commentaire;

  }

}
