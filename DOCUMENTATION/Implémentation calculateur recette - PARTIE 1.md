# IMPLEMENTATION DU CALCULATEUR DE RECETTE <br>PARTIE 1 : Sélection des Ingrédients
<br>

## Objectifs

Dans cette 1ère partie nous allons poser les bases de notre page de calcul de recette : La sélection d'ingrédients à partir d'un **Modal**.

### Description du plan d'action :

Pour ce faire, on devra :
- Création du modal de sélection des ingrédients :
    - Créér un composant pour le modal de sélection des ingrédients avec la **CLI**.
    - Implémenter le code de la logique et de la vue du modal de sélection des ingrédients.
- Dans votre composant page qui propose le calcul des recettes :
    - Créer la logique :
        - Méthodes pour le modal `ng-angular`
        - Inscription au service des ingrédients pour récupérer l'ensemble des ingrédients
        - Ajout des méthodes :
            - Ajout d'un ingrédient dans le formulaire à partir de la sélection dans le modal
            - Suppression d'un ingrédient déjà sélectionné
    - Créer la vue :
        Création d'un formulaire dynamique avec les bonnes pratiques d'Angular

### A venir dans la prochaine partie :
Dans la prochaine partie on implémentera la logique qui permettra de calculer les pourcentages de façon dynamique...

## TRAVAIL A REALISER (Implémentation du code)

### Composant pour le modal d'ajout d'ingrédient `modal-ingredient-picker.component`

Créer le nouveau composant avec la `CLI` : `ng generate component shared/modal-ingredient-picker`

### Code de la logique du modal :

```
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

```

### Code de la vue du modal :

```

<!-- Titre du modal : -->
<div class="modal-header">
    <h4 class="modal-title">Choisir l'ingrédient</h4>
    <button type="button" class="btn-close" aria-label="Fermer" (click)="onCancel()"></button>
</div>
  
<!-- Corps du modal - liste de sélection de l'ingrédient : -->
<div class="modal-body">
    <select class="form-select" [(ngModel)]="selectedIngredient">
        <option *ngFor="let ing of ingredients" [ngValue]="ing">
            {{ ing.nom }}
        </option>
    </select>
</div>
  
<!-- Footer - Boutons de validation/annulation : -->
<div class="modal-footer">
    <button class="btn btn-primary" (click)="onAdd()">Ajouter</button>
    <button class="btn btn-secondary" (click)="onCancel()">Fermer</button>
</div>
  
```

### Implémentation dans la page de calcul des recettes :

### Code de la logique :

<div style="color: red;">ATTENTION : Ne pas réaliser un simple copier/coller du code ci-dessous. Vous devez l'adapter au contexte de votre projet.</div>


```
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIngredientPickerComponent } from '../../../shared/modal-ingredient-picker/modal-ingredient-picker.component';
import { Ingredient } from '../../../models/Ingredient';
import { IngredientService } from '../../../services/ingredient.service';
import { LigneIngredient } from '../../../models/LigneIngredient';
import { RecetteDTO } from '../../../models/RecetteDTO';
import { RecetteService } from '../../../services/recette.service';

@Component({
  selector: 'app-recipe-calculator-page',
  templateUrl: './recipe-calculator-page.component.html',
  styleUrl: './recipe-calculator-page.component.css'
})
export class RecipeCalculatorPageComponent implements OnInit {
    availableIngredients: Ingredient[] = [];        // à alimenter via service
    selectedIngredients: LigneIngredient[] = [];    // Liste des ingrédients sélectionnés

    constructor(
        private ingredientService: IngredientService,
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

}

```

### Code de la vue :

```

  
<button type="button" class="btn btn-success" (click)="openIngredientModal()">
    + Ingrédient
</button>


<table class="table">
    <thead>
      <tr>
        <th>Nom Ingrédient</th>
        <th>Quantité Gramme</th>
        <th>Pourcentage</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let ligne of selectedIngredients; let i = index">
        <td>{{ ligne.ingredient?.nom }}</td>
        <td>
          <input type="number" class="form-control"
                 name="quantite{{i}}" [(ngModel)]="ligne.quantite" min="0">
        </td>
        <td>
          <input type="number" class="form-control"
                 name="pourcentage{{i}}" [(ngModel)]="ligne.pourcentage" min="0" max="100">
        </td>
        <td>
          <button type="button" class="btn btn-danger btn-sm"
                  (click)="supprimerIngredient(i)">X</button>
        </td>
      </tr>
    </tbody>
  </table>
  
```
