import { Recette } from "./Recette";
import { Caracteristique } from "./Caracteristique";
import { Mention } from "./Mention";

/**
 * Représente le score d'une caractéristique donnée pour une recette de savon.
 * 
 * Un score permet d'évaluer quantitativement une caractéristique (ex: dureté, mousse, douceur) 
 * et peut être accompagné d'une mention qualitative (ex: "faible", "élevé", "modéré").
 */
export class Resultat {
    /**
     * Identifiant unique du résultat (clé primaire).
     */
    id: number | null = null;

    /**
     * Valeur numérique positionnant la caractéristique dans une gamme de valeurs.
     * 
     * Ce score est utilisé pour évaluer la qualité d'une caractéristique d'une recette.
     */
    score: number = 0;

    /**
     * Recette à laquelle ce score est associé.
     */
    recette: Recette | null = null;

    /**
     * Caractéristique concernée pour cette recette.
     */
    caracteristique: Caracteristique | null = null;
    
    /**
     * Mention associée au score, permettant d'ajouter une appréciation qualitative.
     * 
     * Exemples de mentions : "faible", "modéré", "élevé".
     */
    mention: Mention | null = null;
}
