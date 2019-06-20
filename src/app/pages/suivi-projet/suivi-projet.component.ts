import { Component, TemplateRef, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetStatusService } from '../../services/projet-status.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-suivi-projet',
  templateUrl: './suivi-projet.component.html',
  styleUrls: ['./suivi-projet.component.css']
})

export class SuiviProjetComponent implements OnInit {

  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;

  suiviProjet: any = {};
  // suivi: string;


  constructor(private projetStatusService: ProjetStatusService,
              config: NgbModalConfig, private modalService: NgbModal
              ) {
                config.backdrop = 'static';
                config.keyboard = false;

                // suiviProjet() {
                  // console.log(  this.index );
                  //   this.router.navigate( ['/heroe', this.index] );
                  // this.heroeSeleccionado.emit( this.index );
                  // }
                }

                open(content) {
                  this.modalService.open(content);
                }
  ngOnInit() {
    this.suiviProjet = this.projetStatusService.getProjet();
    console.log(this.suiviProjet);
  }

  
 
}
