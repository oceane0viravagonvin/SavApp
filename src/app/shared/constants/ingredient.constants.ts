import { Ingredient } from "../../models/Ingredient";

// Objet ingrédient pour l'initialisation par défaut :
export const DEFAULT_INGREDIENT: Ingredient = {
    id: null,
    nom: '',
    iode: 0,
    ins: 0,
    sapo: 0,
    volMousse: 0,
    tenueMousse: 0,
    douceur: 0,
    lavant: 0,
    durete: 0,
    solubilite: 0,
    sechage: 0,
    estCorpsGras: true,
    ligneIngredients: []
};


// Map attribut -> [nom convivial, description] :
export const INGREDIENT_MAP_FIELD_LABEL = new Map<string, [string, string]>([
    ["sapo", ["Ind. Sapo.", "Ratio quantité de potasse (mg) pour produire 1gr de savon."]],
    ["ins", ["INS", "Note globale d'un savon/corps gras par soustraction entre l'indice d'iode et de saponification. Usuellement valeur de 125 à 160"]],
    ["iode", ["Ind. d'iode", "Valeur du potentiel oxydatif global."]],
    ["lavant", ["Lavant", "Pouvoir lavant du savon."]],
    ["douceur", ["Douceur", "Capacité à adoucir et nourrir la peau."]],
    ["durete", ["Dureté", "Consistance du savon."]],
    ["solubilite", ["Solubilité", "Capacité d'un savon à se diluer dans l'eau."]],
    ["sechage", ["Séchage", "Capacité d'un savon à perdre son humidité."]],
    ["volMousse", ["Vol. Mousse", "Volume de mousse que produire le savon."]],
    ["tenueMousse", ["Tenue Mousse", "Tenue de la mousse dans le temps."]]
]);