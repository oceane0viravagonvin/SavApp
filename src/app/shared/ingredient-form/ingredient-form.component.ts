import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { DEFAULT_INGREDIENT, INGREDIENT_MAP_FIELD_LABEL } from '../constants/ingredient.constants';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.css'
})
export class IngredientFormComponent {

    // Récupération des valeurs de la vue et du composant parent :
    // -----------------------------------------------------------
    @Input()
    ingredient: Ingredient = { ...DEFAULT_INGREDIENT };
   
      
    @Input()
    isEditing: boolean = false;


    // Envoi de valeurs vers la vue et au composant parent :
    // -----------------------------------------------------
    @Output()
    save = new EventEmitter<Ingredient>();    
    @Output()
    cancelEdit = new EventEmitter<void>();


    // Récupération sous forme d'array des attributs d'Ingredient accompagné d'un nom convivial + description :
    ingredientArrayFieldLabel = Array.from(INGREDIENT_MAP_FIELD_LABEL.entries());

    // Méthodes de conversion string vers any pour un get :
    getFieldValue(fieldName: string): any {
        return (this.ingredient as any)[fieldName];
      }
      
    // Méthode de conversion string vers any pour un set :
    setFieldValue(fieldName: string, value: any): void {
    (this.ingredient as any)[fieldName] = value;
    }
    


    // Méthodes sur le formulaire :
    // ----------------------------
    saveIngredient(): void {
        this.save.emit(this.ingredient);
    }

    cancel(): void {
        this.cancelEdit.emit();
    }
}

