import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ingredient } from '../../models/Ingredient';
import { DEFAULT_INGREDIENT } from '../constants/ingredient.constants';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-ingredient-form.component.html',
  styleUrl: './modal-ingredient-form.component.css'
})

export class ModalIngredientFormComponent {
    // Titre du modal :
    @Input()
    titre: string = "Formule de ...";             

    // Message à afficher dans le corps du modal :
    @Input()
    message: string = "Texte du corps du modal par défaut."; 

    // Texte associé au bouton d'action :
    // @Input()
    // btnText: string = "Valider";

    // Couleur du bouton d'action :
    // @Input()
    // btnColor: string = "success";  // Valeurs possibles : primary; secondary; success; danger; warning; info; light; dark 


    // Liaison avec le formulaire :
    // ----------------------------
    @Input()
    selectedIngredient: Ingredient = { ...DEFAULT_INGREDIENT };

    @Input()
    isEditing: boolean = false; // Flag indiquant si on est en mode modification, sinon mode création

    constructor(public activeModal: NgbActiveModal) {}

    //saveIngredient = new EventEmitter<Ingredient>();
    saveIngredient(ingredient: Ingredient) {
        // ingredient = { ...DEFAULT_INGREDIENT };
        // alert(`${ingredient}`);
        // return ingredient;
        this.activeModal.close('refresh');
    }

    resetForm(): void {
        this.selectedIngredient = { ...DEFAULT_INGREDIENT };     
        this.isEditing = false;
    }

    
}
