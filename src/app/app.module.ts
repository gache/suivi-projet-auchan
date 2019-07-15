import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importation de ngx-bootstrap
import { AlertModule, ModalModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Importation Spinner
import { NgxSpinnerModule } from 'ngx-spinner';


//Importation de ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// importacion http
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';


// Routes
import { APPROUTING } from './app.auchan.routes';

// Services
import { ProjetStatusService  } from './services/projet-status.service';


// Components

import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { HomeComponent } from './pages/home/home.component';
import { OfmComponent } from './pages/ofm/ofm.component';
import { ProjetComponent } from './pages/projets/projet.component';
import { RunExportComponent } from './pages/run-export/run-export.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjetIndividuelComponent } from './pages/projet-individuel/projet-individuel.component';
import { RechercheProjetComponent } from './pages/recherche-projet/recherche-projet.component';
import { ProjetCardComponent } from './components/projet-card/projet-card.component';
import { SuiviProjetComponent } from './pages/suivi-projet/suivi-projet.component';
import { FormulaireCardComponent } from './components/formulaire-card/formulaire-card.component';
import { PopupModificationComponent } from './components/popup-modification/popup-modification.component';
import { ListProjetComponent } from './components/list-projet/list-projet.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FranchiseComponent,
    HomeComponent,
    OfmComponent,
    ProjetComponent,
    RunExportComponent,
    NavbarComponent,
    ProjetIndividuelComponent,
    RechercheProjetComponent,
    ProjetCardComponent,
    SuiviProjetComponent,
    FormulaireCardComponent,
    PopupModificationComponent,
    ListProjetComponent,
    SliderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APPROUTING,
    HttpClientModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    NgxSpinnerModule


  ],
  providers: [
    ProjetStatusService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
