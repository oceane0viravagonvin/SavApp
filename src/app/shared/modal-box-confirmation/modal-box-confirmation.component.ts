import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-box-confirmation',
  templateUrl: './modal-box-confirmation.component.html',
  styleUrl: './modal-box-confirmation.component.css'
})
export class ModalBoxConfirmationComponent {

    // Titre du modal :
    @Input()
    titre: string = "Le titre du modal par défaut";             

    // Message à afficher dans le corps du modal :
    @Input()
    message: string = "Texte du corps du modal par défaut."; 

    // Texte associé au bouton d'action :
    @Input()
    btnText: string = "Appliquer";

    // Couleur du bouton d'action :
    @Input()
    btnColor: string = "info";  // Valeurs possibles : primary; secondary; success; danger; warning; info; light; dark 

    constructor(public activeModal: NgbActiveModal) {}
}
