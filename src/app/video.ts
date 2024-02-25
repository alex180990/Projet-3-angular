import { Auteur } from "./auteur";
import { Avis } from "./avis";

export interface Video {
    id?: number;
    nom?: string;
    description?: string;
    categorie?: string;
    code?: string;
    auteur: Auteur;
    date_publication: string;
    duree: number;
    nombre_vues: number;
    score: number;
    sous_titres?: string;
    avis?:Avis[];
}
