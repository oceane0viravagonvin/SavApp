import { Resultat } from "./Resultat";
import { Mention } from "./Mention";

/**
 * Représente une caractéristique d'une recette de savon.
 * 
 * Une caractéristique peut être, par exemple : douceur, pouvoir lavant, volume de mousse, etc.
 * Chaque caractéristique possède un nom et est associée à un score spécifique (`resultat.score`) pour chaque recette.
 */
export class Caracteristique {
    /**
     * Identifiant unique de la caractéristique (clé primaire).
     */
    id: number | null = null;

    /**
     * Nom de la caractéristique (ex: "Douceur", "Lavant", "Volume de mousse").
     */
    nom: string = "";

    /**
     * Liste des mentions associées à la caractéristique.
     * 
     * Une mention permet d'évaluer qualitativement un score (ex: "faible", "élevé", "modéré").
     */
    mentions: Mention[] = [];
    
    /**
     * Liste des scores associés à cette caractéristique pour différentes recettes.
     */
    resultats: Resultat[] = [];
}
