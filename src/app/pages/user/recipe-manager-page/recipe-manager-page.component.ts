import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../../services/recette.service';
import { Recette } from '../../../models/Recette';

@Component({
  selector: 'app-recipe-manager-page',
  templateUrl: './recipe-manager-page.component.html',
  styleUrl: './recipe-manager-page.component.css'
})
export class RecipeManagerPageComponent implements OnInit {
    recettes: Recette[] = [];
    isLoading: boolean = true;
    errorMessage: string = '';
  
    constructor(private recetteService: RecetteService) {}
  
    ngOnInit(): void {
      this.fetchRecettes();
    }
  
    /**
     * Récupère la liste des recettes depuis l'API.
     */
    fetchRecettes(): void {
      this.recetteService.getAllRecettes().subscribe({
        next: (data) => {
          this.recettes = data;
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = "Erreur lors du chargement des recettes.";
          console.error('Erreur API:', error);
          this.isLoading = false;
        }
      });
    }
  }