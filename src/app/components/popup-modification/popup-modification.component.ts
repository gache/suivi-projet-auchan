import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-modification',
  templateUrl: './popup-modification.component.html',
  styleUrls: ['./popup-modification.component.css']
})
export class PopupModificationComponent implements OnInit {

  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }

}
