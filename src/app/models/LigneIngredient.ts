import { Ingredient } from "./Ingredient";
import { Recette } from "./Recette";

/**
 * Représente la relation entre un ingrédient et une recette.
 * 
 * Cette classe permet de stocker la quantité et le pourcentage d'un ingrédient utilisé
 * dans une recette de savon.
 */
export class LigneIngredient {
    /**
     * Identifiant unique de l'association ingrédient-recette (clé primaire).
     */
    id: number | null = null;

    /**
     * Quantité en grammes (`g`) de l'ingrédient dans la recette.
     */
    quantite: number = 0;

    /**
     * Pourcentage de l'ingrédient par rapport à la masse totale du savon.
     */
    pourcentage: number = 0;

    /**
     * Ingrédient associé à cette recette.
     */
    ingredient: Ingredient | null = null;
    
    /**
     * Recette à laquelle cet ingrédient est associé.
     */
    recette: Recette | null = null;
}
