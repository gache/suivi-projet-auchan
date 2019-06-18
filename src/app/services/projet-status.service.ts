import { Injectable } from '@angular/core';
import { Projet, ProjetStatus } from '../../app/entities/projets';

@Injectable({
  providedIn: 'root'
})
export class ProjetStatusService {

   projetStatu: Projet [] =  ([
    {
      nom: 'Auchan Supermarché Belley',
      status: ProjetStatus.COUVERT,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content.  ',
      equipe: 'Membre Equipe OFM',
      date: '19/02/2010',

    },
    {
      nom: 'Saint Quentin',
      status: ProjetStatus.SOLEIL,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      equipe: 'Membre Equipe Run-export',
      date: '19/02/2010',
    },
    {
      nom: 'Auchan Montluçon Domérat',
      status: ProjetStatus.NUAGE,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. tenetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore ',
      equipe: 'Membre Equipe Equipe ranchise',
      date: '19/02/2010',
    },
    {
      nom: 'Gap',
      status: ProjetStatus.ORAGE,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur',
      equipe:'Membre Equipe Projet',
      date: '19/02/2010',
    },
      {
      nom: 'SUPERMARCHE MARSEILLE MAZARGUES',
      status: ProjetStatus.SOLEIL,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore ',
      equipe: 'Membre Equipe OFM',
      date: '19/02/2010',

    },
    {
      nom: ' Supermarché Bourges ',
      status: ProjetStatus.ORAGE,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      equipe: 'Membre Equipe Run-export',
      date: '19/02/2010',
    },
    {
      nom: 'Auchan V2',
      status: ProjetStatus.COUVERT,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ',
      equipe: 'Membre Equipe Franchise',
      date: '19/02/2010',
    },
    {
      nom: 'Auchan FACHES THUMESNIL',
      status: ProjetStatus.SOLEIL,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur',
      equipe: 'Membre Equipe Projet',
      date: '19/02/2010',
    },
    {
      nom: 'LEERS',
      status: ProjetStatus.COUVERT,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ',
      equipe: 'Membre Equipe Franchise',
      date: '19/02/2010',
    },
    {
      nom: 'Auchan Drive',
      status: ProjetStatus.SOLEIL,
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur',
      equipe: 'Membre Equipe Projet',
      date: '19/02/2010',
    }

  ]);

constructor() {

      console.log('Servicio Listo');

}

getProjet(): Projet[] {
  return this.projetStatu;
}

rechercheProjet(termino: string): Projet[] {

  let projetArr: Projet[] = [];
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



getProjet_Individuel(idx: string) {
  return this.projetStatu[ idx ];
}

}
