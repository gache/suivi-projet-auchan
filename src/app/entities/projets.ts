
export enum ProjetStatus {
  ORAGE = 0,
  NUAGE = 1,
  COUVERT = 2,
  SOLEIL = 3
}

export interface Projet {
  nom: string;
  status: ProjetStatus;
  description: string;
  equipe: string;
  date: string;
  idx?: number;
}
