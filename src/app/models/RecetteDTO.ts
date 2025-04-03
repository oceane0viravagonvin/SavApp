import { LigneIngredientDTO } from "./LigneIngredientDTO";

export class RecetteDTO {
    id: number | null = null;
    titre: string = '';
    description: string = '';
    surgraissage: number = 0;
    avecSoude: boolean = false;
    concentrationAlcalin: number = 0;
    qteAlcalin: number = 0;
    ligneIngredients: LigneIngredientDTO[] = [];
}