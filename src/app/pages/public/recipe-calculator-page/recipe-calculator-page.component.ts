import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIngredientPickerComponent } from '../../../shared/modal-ingredient-picker/modal-ingredient-picker.component';
import { Ingredient } from '../../../models/Ingredient';
import { IngredientService } from '../../../services/ingredient.service';
import { LigneIngredient } from '../../../models/LigneIngredient';
import { LigneIngredientDTO } from '../../../models/LigneIngredientDTO';
import { RecetteDTO } from '../../../models/RecetteDTO';
import { Recette } from '../../../models/Recette';
import { RecetteService } from '../../../services/recette.service';

@Component({
  selector: 'app-recipe-calculator-page',
  templateUrl: './recipe-calculator-page.component.html',
  styleUrl: './recipe-calculator-page.component.css'
})
export class RecipeCalculatorPageComponent implements OnInit {
    
    // Attributs :
    // -----------
    recetteDto: RecetteDTO = new RecetteDTO();      // Objet RecetteDTO de la nouvelle recette
    availableIngredients: Ingredient[] = [];        // A alimenter via service
    selectedIngredients: LigneIngredient[] = [];    // Liste des ingrédients sélectionnés
    totalMasse = 0;                                 // Masse totale des corp gras
    //totalPourcentage = 0;


    // Méthodes :
    // ----------

    constructor(
        private ingredientService: IngredientService,
        private recetteService: RecetteService,
        private modalService: NgbModal
    ) {}


    /**
     * Appel du service de récupération des ingrédients à l'initialisation
     */
    ngOnInit(): void {
        this.loadIngredients();
    }

    loadIngredients(): void {
        this.ingredientService.getAllIngredients().subscribe({
          next: (ingredients) => {
            this.availableIngredients = ingredients;
          },
          error: (err) => {
            console.error('Erreur lors du chargement des ingrédients', err);
          }
        });
    }

    /**
     * Modal de sélection des ingrédients.
     */
    openIngredientModal(): void {
        const modalRef = this.modalService.open(ModalIngredientPickerComponent);
        modalRef.componentInstance.ingredients = this.availableIngredients;

    modalRef.result.then((selectedIngredient: Ingredient) => {
        if (selectedIngredient) {
        this.ajouterIngredient(selectedIngredient);
        }
    }).catch(() => {});
    }   


    /**
     * Méthode d'ajout d'un ingrédient à la recette
     * @param ingredient Ingrédient à ajouter à la recette
     */
    ajouterIngredient(ingredient: Ingredient): void {
        // Empêcher les doublons
        if (this.selectedIngredients.find(l => l.ingredient?.id === ingredient.id)) {
            return;
        }

        this.selectedIngredients.push({
            id: 0,          // valeur temporaire pour l'instant
            recette: null,  // sera renseigné côté backend à la soumission
            ingredient: ingredient,
            quantite: 0,
            pourcentage: 0
        });        

    }

    /**
     * Supprime un ingrédient préalablement choisi pour la recette en cours
     * @param index 
     */
    supprimerIngredient(index: number): void {
        this.selectedIngredients.splice(index, 1);
      }


    /**
     * Recalcule les pourcentages
     */  
    recalculerPourcentages(): void {
        this.totalMasse = this.selectedIngredients.reduce((acc, ligne) => acc + ligne.quantite, 0); // Somme des masse des ingrédients de la recette
        
        this.selectedIngredients.forEach(ligne => {
            ligne.pourcentage = this.totalMasse > 0 ? + (ligne.quantite / this.totalMasse * 100).toFixed(0) : 0; // Calcul les pourcentages des ingrédients
        });
        
    }    


    /**
     * Méthode de soumission du nouvel ingrédient
     */
    onSubmit(): void {
        // Associer les ingrédients au DTO :
        const ligneIngredientDTOs = this.selectedIngredients.map(ligne => ({
            quantite: ligne.quantite,
            pourcentage: ligne.pourcentage,
            ingredientId: ligne.ingredient?.id ?? 0
          }));
          //console.log(`LigneIngredientDTOs = `, ligneIngredientDTOs);

        // Finalisation de l'objet RecetteDTO :
        const recetteEnvoyee: RecetteDTO = {
            ...this.recetteDto,
            ligneIngredients: ligneIngredientDTOs
          };
    
        //console.log('Objet RecetteDTO prêt à envoyer :', this.recetteDto);
    
        this.recetteService.addRecetteDTO(recetteEnvoyee).subscribe({
            next: (recette: Recette) => {
                //console.log('Recette reçue du backend :', recette);
                // TODO : afficher résultat, rediriger ou notifier l'utilisateur
            },

            error: (err) => {
                console.error('Erreur lors de la création de la recette :', err);
                // TODO : afficher message d’erreur utilisateur
            }
        });
    }
    
}
