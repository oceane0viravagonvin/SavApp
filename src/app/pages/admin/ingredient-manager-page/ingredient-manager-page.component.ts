import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../models/Ingredient';
import { DEFAULT_INGREDIENT } from '../../../shared/constants/ingredient.constants';
import { IngredientService } from '../../../services/ingredient.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIngredientFormComponent } from '../../../shared/modal-ingredient-form/modal-ingredient-form.component';

@Component({
  selector: 'app-ingredient-manager-page',
  templateUrl: './ingredient-manager-page.component.html',
  styleUrl: './ingredient-manager-page.component.css'
})

export class IngredientManagerPageComponent implements OnInit {


    // Gestion du modal formulaire pour l'ajout/modification d'un ingrédient :
    // -----------------------------------------------------------------------
    openModalFormIngredient(ingredient?: Ingredient) {
        const modalRef = this.modalService.open(ModalIngredientFormComponent, {
            centered: true,
            size: 'lg'            
        });
        modalRef.componentInstance.titre = "Ajout d'un nouvel ingrédient";
        modalRef.componentInstance.message = "Renseignez les valeurs de votre nouvel ingrédient";

        // Gestion des actions :
        modalRef.result.then((result) => {
            if (result === Ingredient) {              
                this.saveIngredient(result);
            }
        })

    }


    // Attributs du composant :
    // ------------------------

    ingredients: Ingredient[] = [];
    // message: string = '';
    isEditing: boolean = false; // Permet de savoir si on est en mode édition
    //ingredientToEditId: number | null = null;
    

    // Objet Ingredient de travail :
    // -----------------------------    
    selectedIngredient: Ingredient = { ...DEFAULT_INGREDIENT };


    // Constructeur avec injection des services :
    // ------------------------------------------
    constructor(
        private ingredientService: IngredientService,
        private modalService: NgbModal
    ) {}


    // Fetch avec le service à l'initialisation :
    // ------------------------------------------
    ngOnInit(): void {
        this.fetchIngredients();
    }


    // _________________________________________________
    //
    // METHODES SUR LES FORMULAIRES 
    // _________________________________________________

    /**
     * Récupère tous les ingrédients via l'API.
     */
    fetchIngredients(): void {
        this.ingredientService.getAllIngredients().subscribe({
        next: (data) => this.ingredients = data,
        error: (error) => console.error('Erreur chargement des ingrédients:', error)
        });
    }


    /**
     * Ajoute ou met à jour un ingrédient.
     * @param ingredient - L'ingrédient à ajouter ou mettre à jour.
     */
    saveIngredient(ingredient: Ingredient): void {
        if (this.isEditing && ingredient.id !== null) {
        // Mode modification
        this.ingredientService.updateIngredient(ingredient.id, ingredient).subscribe({
            next: () => {
                //this.message = 'Ingrédient mis à jour avec succès !';
                this.isEditing = false;
                this.selectedIngredient = { ...DEFAULT_INGREDIENT };
                this.fetchIngredients();    // Recharge la liste
                //this.resetForm();
            },
            error: (error) => {
            console.error('Erreur mise à jour ingrédient:', error);
            //this.message = 'Erreur lors de la mise à jour de l’ingrédient.';
            }
        });
        } else {
        // Mode ajout
        this.ingredientService.addIngredient(ingredient).subscribe({
            next: (newIngredient) => {
            this.ingredients.push(newIngredient);
            this.selectedIngredient = { ...DEFAULT_INGREDIENT };
            this.isEditing = false;
            //this.message = 'Ingrédient ajouté avec succès !';
            //this.resetForm();
            },
            error: (error) => {
            console.error('Erreur ajout ingrédient:', error);
            //this.message = 'Erreur lors de l’ajout de l’ingrédient.';
            }
        });
        }
    }

    /**
     * Prépare la modification d'un ingrédient en remplissant le formulaire avec ses données.
     * @param ingredient L'ingrédient à modifier.
     */
    editIngredient(ingredient: Ingredient): void {
        this.selectedIngredient = { ...ingredient }; // Clone l'objet pour éviter les modifications directes
        //this.ingredientToEditId = ingredient.id;
        this.isEditing = true;
    }

    /**
     * Supprime un ingrédient via l'API.
     * @param id - Identifiant de l'ingrédient à supprimer.
     */
    deleteIngredient(id: number | null): void {
        if (id === null) return;
        //if (!confirm("Voulez-vous vraiment supprimer cet ingrédient ?")) return;

        this.ingredientService.deleteIngredient(id).subscribe({
        next: () => {
            this.ingredients = this.ingredients.filter(ing => ing.id !== id);
            //this.message = 'Ingrédient supprimé avec succès.';
        },
        error: (error) => {
            console.error('Erreur suppression ingrédient:', error);
            //this.message = 'Erreur lors de la suppression de l’ingrédient.';
        }
        });
    }


    /**
     * Supprime TOUS les ingrédients via l'API
     */
    deleteAllIngredients(): void {
        this.ingredientService.deleteAllIngredients().subscribe({
          next: () => {
            this.ingredients = []; // Vider la liste après suppression
          },
          error: (error) => console.error('Erreur suppression de tous les ingrédients:', error)
        });
      }
      

    /**
     * Réinitialise le formulaire après soumission.
     */
    resetForm(): void {
        this.selectedIngredient = { ...DEFAULT_INGREDIENT };     
        this.isEditing = false;
    }

}
