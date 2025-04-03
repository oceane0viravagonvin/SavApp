import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ingredient } from '../../models/Ingredient';


@Component({
  selector: 'app-modal-ingredient-picker',
  templateUrl: './modal-ingredient-picker.component.html',
  styleUrl: './modal-ingredient-picker.component.css'
})
export class ModalIngredientPickerComponent {
    
    @Input()
    ingredients: Ingredient[] = [];     // Liste ingrédients disponibles via le service 
    selectedIngredient?: Ingredient; // Ingrédient choisi par l'utilisateur

    constructor(public activeModal: NgbActiveModal) {}

    // Méthodes du Modal :
    // -------------------

    /**
     * Ajout de l'ingrédient
     */
    onAdd(): void {
        if (this.selectedIngredient) {
          this.activeModal.close(this.selectedIngredient);
        }
      }

    
    /**
     * Fermeture du modal 
     */
    onCancel(): void {
        this.activeModal.dismiss();
      }
    
    

}
