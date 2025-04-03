import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredient-import-export',
  templateUrl: './ingredient-import-export.component.html',
  styleUrl: './ingredient-import-export.component.css'
})
export class IngredientImportExportComponent {

    @Input()
    ingredients: Ingredient[] = []; // Liste des ingrédients reçue du parent

    @Output()
    importComplete = new EventEmitter<void>(); // Emet un événement après l'import
    
    message: string = '';   // Message de confirmation
    error: boolean = false  // Flag pour le message d'erreur


    constructor(private ingredientService: IngredientService) {}

    /**
     * Exporte les ingrédients au format CSV et génère un fichier téléchargeable.
     */
    exportToCSV(): void {
    if (!this.ingredients || this.ingredients.length === 0) {
        this.error = true;
        this.message = "Aucun ingrédient à exporter.";
        return;
    }

    // Génération des lignes du CSV
    const csvData = this.ingredients.map(ing =>
        `${ing.id},${ing.nom},${ing.iode},${ing.ins},${ing.sapo},${ing.volMousse},${ing.tenueMousse},${ing.douceur},${ing.lavant},${ing.durete},${ing.solubilite},${ing.sechage},${ing.estCorpsGras}`
    );

    // Ajout de l'en-tête au CSV
    const csvHeader = "ID,Nom,Indice Iode,Indice INS,Indice de Saponification,Volume de Mousse,Tenue de Mousse,Douceur,Pouvoir Lavant,Dureté,Solubilité,Séchage,Est Corps Gras";
    const csvContent = [csvHeader, ...csvData].join("\n");

    // Création et téléchargement du fichier CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = "ingredients.csv";
    a.click();

    this.message = "Exportation réussie !";
    this.clearMessageAfterDelay();
    }

    /**
     * Importe des ingrédients depuis un fichier CSV.
     * @param event - L'événement déclenché par l'input file.
     */
    importFromCSV(event: any): void {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target?.result as string;
            const rows = text.split("\n").slice(1); // Ignore l'en-tête
            rows.forEach(row => {
                const [id, nom, iode, ins, sapo, volMousse, tenueMousse, douceur, lavant, durete, solubilite, sechage, estCorpsGras] = row.split(",");

                const newIngredient: Ingredient = {
                    id: null, // Laisse null pour générer un ID côté backend
                    nom: nom.trim(),
                    iode: parseFloat(iode),
                    ins: parseFloat(ins),
                    sapo: parseFloat(sapo),
                    volMousse: parseFloat(volMousse),
                    tenueMousse: parseFloat(tenueMousse),
                    douceur: parseFloat(douceur),
                    lavant: parseFloat(lavant),
                    durete: parseFloat(durete),
                    solubilite: parseFloat(solubilite),
                    sechage: parseFloat(sechage),
                    estCorpsGras: estCorpsGras.trim().toLowerCase() === "true",
                    ligneIngredients: []
                };


                this.ingredientService.addIngredient(newIngredient).subscribe({
                    next: () => {
                      this.importComplete.emit(); // Notifie le parent pour rafraîchir la liste
                      this.error = false;
                      this.message = "Importation réussie !";
                    },
                    error: (error) => {
                        this.error = true;
                        this.message = `Erreur lors de l'import d'un ingrédient : ${error}`
                    }
                  });

                
                this.clearMessageAfterDelay();

            });
        };
        reader.readAsText(file);
    }

    /**
     * Efface le message après 3 secondes.
     */
    clearMessageAfterDelay(): void {
    setTimeout(() => {
        this.message = "";
        this.error = false;
    }, 3000);
    }

}
