import { Injectable } from '@angular/core';
import { ProjetStatus } from '../../app/entities/projets';
import { ProjetAvecStatus, Projet } from '../entities/projets';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjetStatusService {

   projetStatu: ProjetAvecStatus []; 

constructor( private http: HttpClient,
             private conf: ConfigService) {

  console.log('Service prêt');
}

getProjet(): Observable<ProjetAvecStatus[]> {
  return this.http.get<ProjetAvecStatus[]>(this.conf.getKey("API_URL")+"/projects");
}

getProjet2(): Observable<ProjetAvecStatus[]> {
  return of(this.projetStatu);
}

rechercheProjet(termino: string): ProjetAvecStatus[] {

  let projetArr: ProjetAvecStatus[] = [];
  termino = termino.toLocaleLowerCase();

  for ( let i = 0; i < this.projetStatu.length; i ++ ) {

    let projet = this.projetStatu[i];

    let nom = projet.nom.toLocaleLowerCase();

    if ( nom.indexOf( termino ) >= 0 )  {
      projet.idx = i;
      projetArr.push( projet );
    }
  }
  return projetArr;
}


// Recuperation de l'Id de florent
getProjet_Individuel(idx: string) {
  return this.getProjet().pipe(map((data: ProjetAvecStatus[]) => {
    for(let projet of data) {
      console.log(idx+" - " +projet._id);
      if(projet._id == idx) return projet;
    }
    return null;
  }));
}

setProjectStatus(project     : Projet,
                 status      : string,
                 commentaire : string,
                 date        : string): Observable<ProjetAvecStatus> {

  console.log("Ca marche");
  console.log(project);
  // @ts-ignore
  return this.http.post<ProjetAvecStatus[]>(this.conf.getKey("API_URL")+"/projectStatus",JSON.stringify({
    project     : project._id,
    status      : status,
    commentaire : commentaire,
    date        : date
  }), httpOptions);
}

setAjouterProjet(nomProjet   : string,
                 date        : string,
                 equipe      : string,
                 description : string ): Observable<ProjetAvecStatus> {

                  console.log("Ca marche");
                  // @ts-ignore
  return this.http.post<ProjetAvecStatus[]>(this.conf.getKey("API_URL") + "/project", JSON.stringify
    ({
      nom         : nomProjet,
      description : description,
      equipe      : equipe,
      date        : date
    }), httpOptions);


}




// suiviProjet(index: string) {
//   return this.suiviProjet[index];
// }

}
