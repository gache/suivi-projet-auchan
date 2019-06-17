import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OfmComponent } from './pages/ofm/ofm.component';
import { ProjetComponent } from './pages/projets/projet.component';
import { RunExportComponent } from './pages/run-export/run-export.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { ProjetIndividuelComponent } from './pages/projet-individuel/projet-individuel.component';
import { RechercheProjetComponent } from './pages/recherche-projet/recherche-projet.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ofebam', component: OfmComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'run-export', component: RunExportComponent },
  { path: 'franchise', component: FranchiseComponent },
  { path: 'projet-individuel/:id', component: ProjetIndividuelComponent },
  { path: 'recherche-projet/:terme', component: RechercheProjetComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(routes);
