import { LigneIngredient } from "./LigneIngredient";
import { Resultat } from "./Resultat";

/**
 * Représente une recette de savon, définie par une liste d'ingrédients et ses propriétés.
 * 
 * Une recette comprend notamment le taux de surgraissage, l'apport en eau et l'utilisation
 * d'un agent alcalin (soude ou potasse). Elle est aussi caractérisée par les résultats de
 * ses différentes caractéristiques (ex: dureté, mousse, douceur).
 */
export class Recette {
    /**
     * Identifiant unique de la recette (clé primaire).
     */
    id: number | null = null;

    /**
     * Nom de la recette défini par l'utilisateur.
     */
    titre: string = "";
    
    /**
     * Description textuelle de la recette.
     */
    description: string = "";
    
    /**
     * Valeur du surgraissage de la recette (%).
     * 
     * Le surgraissage correspond à l'excédent d'huile non saponifiée dans le savon,
     * permettant d'apporter des propriétés nourrissantes et adoucissantes.
     */
    surgraissage: number = 0;
    
    /**
     * Quantité d'eau (en grammes) ajoutée à la recette.
     */
    apportEnEau: number = 0;
    
    /**
     * Indique si la recette utilise de la soude (`true`) ou de la potasse (`false`).
     */
    avecSoude: boolean = true;
    
    /**
     * Concentration de l'agent alcalin utilisé (%).
     */
    concentrationAlcalin: number = 0;
    
    /**
     * Quantité d'agent alcalin (soude ou potasse) en grammes (`g`).
     */
    qteAlcalin: number = 0;
    
    /**
     * Liste des ingrédients utilisés dans la recette.
     */
    ligneIngredients: LigneIngredient[] = [];
    
    /**
     * Liste des résultats associés à la recette, représentant les valeurs des différentes caractéristiques (ex: dureté, mousse).
     */
    resultats: Resultat[] = [];
}
