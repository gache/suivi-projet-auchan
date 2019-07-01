
export enum ProjetStatus {
  ORAGE = 0,
  NUAGE = 1,
  COUVERT = 2,
  SOLEIL = 3
}

export interface ProjetAvecStatus extends Projet {
  status: ProjetStatus;
  commentaire: string;
  date: string;
}
export interface Projet {
  nom: string;
  description: string;
  equipe: string;
  date: string;
  idx?: number;
  _id?: string;
}
