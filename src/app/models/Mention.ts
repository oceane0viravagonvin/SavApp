import { Caracteristique } from "./Caracteristique";
import { Resultat } from "./Resultat";

/**
 * Représente une mention qualitative permettant d'apprécier un score
 * attribué à une caractéristique d'un ingrédient.
 * 
 * Exemples de mentions : "faible", "modéré", "élevé".
 */
export class Mention {
    /**
     * Identifiant unique de la mention (clé primaire).
     */
    id: number | null = null;

    /**
     * Texte de la mention (exemple : "faible", "élevé", "modéré").
     */
    label: string = "";

    /**
     * Score minimal associé à cette mention.
     */
    noteMin: number = 0;

    /**
     * Score maximal associé à cette mention.
     */
    noteMax: number = 0;

    /**
     * Caractéristique associée à cette mention.
     */
    caracteristique: Caracteristique | null = null;

    /**
     * Liste des scores associés à cette mention.
     */
    resultats: Resultat[] = [];
}
