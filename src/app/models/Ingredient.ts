import { LigneIngredient } from "./LigneIngredient";

/**
 * Représente un ingrédient utilisé dans une recette de savon.
 * Un ingrédient est en général un corps gras, mais peut aussi être un additif.
 * **Remarque** : Les agents alcalins (soude ou potasse) ne font pas partie des ingrédients.
 */
export class Ingredient {
    /**
     * Identifiant unique de l'ingrédient (clé primaire).
     */
    id: number | null = null;

    /**
     * Nom de l'ingrédient.
     */
    nom: string = "";

    /**
     * Indice d'iode : renseigne l'indice oxydatif global.
     */
    iode: number = 0;

    /**
     * Indice INS (Iodine Number Saponification) :
     * Différence entre l'indice d'iode et l'indice de saponification.
     * Une valeur conseillée se situe entre 125 et 160.
     */
    ins: number = 0;

    /**
     * Indice de saponification :
     * Quantité en mg de KOH (potassium hydroxyde) nécessaire pour saponifier 1 g de cet ingrédient.
     */
    sapo: number = 0;

    /**
     * Volume de mousse générée par l'ingrédient.
     */
    volMousse: number = 0;

    /**
     * Consistance crémeuse de la mousse produite.
     */
    tenueMousse: number = 0;

    /**
     * Capacité de l'ingrédient à adoucir et nourrir la peau.
     */
    douceur: number = 0;

    /**
     * Pouvoir lavant du savon contenant cet ingrédient.
     */
    lavant: number = 0;

    /**
     * Durée de vie du savon enrichi avec cet ingrédient.
     */
    durete: number = 0;

    /**
     * Facilité de dissolution du savon dans l'eau.
     */
    solubilite: number = 0;

    /**
     * Capacité du savon à perdre son humidité pendant la cure et lors de son utilisation.
     */
    sechage: number = 0;

    /**
     * Indique si l'ingrédient est un corps gras (`true`) ou un additif (`false`).
     */
    estCorpsGras: boolean = true;

    /**
     * Liste des lignes d'ingrédients associées à cet ingrédient.
     */
    ligneIngredients: LigneIngredient[] = [];
}
