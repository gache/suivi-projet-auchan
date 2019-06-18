import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importacion http
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';


// Routes
import { APPROUTING } from './app.auchan.routes';

// Services

import { ProjetStatusService  } from './services/projet-status.service';


//Components

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
    ProjetCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APPROUTING,
    HttpClientModule
  ],
  providers: [
    ProjetStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
