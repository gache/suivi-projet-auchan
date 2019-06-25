import { Injectable } from '@angular/core';
import { ProjetStatus } from '../../app/entities/projets';
import { ProjetAvecStatus } from '../entities/projets';

@Injectable({
  providedIn: 'root'
})
export class ProjetStatusService {

   projetStatu: ProjetAvecStatus [] =  ([
    {
      nom: 'Auchan Supermarché Belley',
      status: ProjetStatus.COUVERT,
      commentaire: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content.  ',
      equipe: 'Membre Equipe OFM',
      date: '19/02/2010',

    },
    {
      nom: 'Saint Quentin',
      status: ProjetStatus.SOLEIL,
      commentaire: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ommodo consequat.',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      equipe: 'Membre Equipe Run-export',
      date: '19/02/2010',
    },
    {
      nom: 'Auchan Montluçon Domérat',
      status: ProjetStatus.NUAGE,
      commentaire: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. tenetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore ',
      equipe: 'Membre Equipe Equipe ranchise',
      date: '19/02/2010',
    },
    {
      nom: 'Gap',
      status: ProjetStatus.ORAGE,
      commentaire: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur',
      equipe:'Membre Equipe Projet',
      date: '19/02/2010',
    },
      {
      nom: 'SUPERMARCHE MARSEILLE MAZARGUES',
      status: ProjetStatus.SOLEIL,
      commentaire: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore ',
      equipe: 'Membre Equipe OFM',
      date: '19/02/2010',

    },
    {
      nom: ' Supermarché Bourges ',
      status: ProjetStatus.ORAGE,
      commentaire: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      equipe: 'Membre Equipe Run-export',
      date: '19/02/2010',
    },
    {
      nom: 'Auchan V2',
      status: ProjetStatus.COUVERT,
      commentaire: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ',
      equipe: 'Membre Equipe Franchise',
      date: '19/02/2010',
    },
    {
      nom: 'Auchan FACHES THUMESNIL',
      status: ProjetStatus.SOLEIL,
      commentaire: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur',
      equipe: 'Membre Equipe Projet',
      date: '19/02/2010',
    },
    {
      nom: 'LEERS',
      status: ProjetStatus.COUVERT,
      commentaire: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ',
      equipe: 'Membre Equipe Franchise',
      date: '19/02/2010',
    },
    {
      nom: 'Auchan Drive',
      status: ProjetStatus.SOLEIL,
      commentaire: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum perferendis vel deserunt minima neque culpa blanditiis dolore inventore tenetur',
      equipe: 'Membre Equipe Projet',
      date: '19/02/2010',
    }

  ]);

constructor() {
  console.log('Service prêt');
}

getProjet(): ProjetAvecStatus[] {
  return this.projetStatu;
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



getProjet_Individuel(idx: string) {
  return this.projetStatu[ idx ];
}

// suiviProjet(index: string) {
//   return this.suiviProjet[index];
// }

}
