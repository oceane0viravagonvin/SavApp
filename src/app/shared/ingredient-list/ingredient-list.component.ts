import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBoxConfirmationComponent } from '../modal-box-confirmation/modal-box-confirmation.component';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent {

    // Récupération des valeurs de la vue et du composant parent :
    // -----------------------------------------------------------
    @Input()
    ingredients: Ingredient[] = [];


    // Envoi de valeurs vers la vue et au composant parent :
    // -----------------------------------------------------
    @Output()
    edit = new EventEmitter<Ingredient>();

    @Output()
    delete = new EventEmitter<number>();

    @Output()
    deleteAll = new EventEmitter<void>(); // Événement pour supprimer TOUS les ingrédients


    // ---------------------------------------------------------
    // Gestion de la suppression d'un ingrédient avec un modal :
    // ---------------------------------------------------------
    ingredientToDelete: Ingredient | null = null;

    constructor(private modalService: NgbModal) {}
    
    // Méthodes NgbModal pour ouvrir et configurer les modals :
    // --------------------------------------------------------

    /**
     * Modal de suppression de tous les ingrédients :
     */
    openDeleteAllModal() {
        const modalRef = this.modalService.open(ModalBoxConfirmationComponent, {centered: true});
        modalRef.componentInstance.titre = "Suppression de tous les ingrédients";
        modalRef.componentInstance.message = "Êtes-vous sûr de vouloir supprimer TOUS les ingrédients ? Cette action est irréversible.";
        modalRef.componentInstance.btnText = "Supprimer TOUT !";
        modalRef.componentInstance.btnColor = "danger";

        // Gestion des actions :
        modalRef.result.then((result: string) => {
            if (result === 'execute') {              
                this.deleteAll.emit(); // Exécution de la suppression de tous les ingrédients
            }
        })
    }

    /**
     * Modal de suppression d'un ingrédient :
     */
    openDeleteOneModal(ingredient: Ingredient) {
        const modalRef = this.modalService.open(ModalBoxConfirmationComponent, {centered: true});
        modalRef.componentInstance.titre = "Suppression d'un ingrédient";
        modalRef.componentInstance.message = `Êtes-vous sûr de vouloir supprimer l’ingrédient ${ ingredient?.nom } ?`;
        modalRef.componentInstance.btnText = "Supprimer !";
        modalRef.componentInstance.btnColor = "danger";

        // Gestion des actions :
        modalRef.result.then((result: string) => {
            if (result === 'execute') {    
                // Exécution de la suppression de l'ingrédient          
                this.ingredientToDelete = ingredient; 
                this.delete.emit(this.ingredientToDelete.id!);
                this.ingredientToDelete = null;
            }
        })
    }

    /**
     * Émet un événement pour éditer un ingrédient.
     * @param ingredient L'ingrédient sélectionné.
     */
    editIngredient(ingredient: Ingredient): void {
        this.edit.emit(ingredient);
    }
    
}
