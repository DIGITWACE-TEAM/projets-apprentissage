import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cardadd.component.html',
  styleUrls: ['./cardadd.component.css']
})
export class CardAddComponent {
cancel() {
throw new Error('Method not implemented.');
}
  @Input() cardToEdit?: Card;
  @Output() submitComplete = new EventEmitter<void>();

  formData: Partial<Card> = {};
  isEditMode = false;

  constructor(private cardService: CardService) {}

  ngOnChanges(): void {
    if (this.cardToEdit) {
      this.formData = { ...this.cardToEdit };
      this.isEditMode = true;
    }
  }

  handleSubmit(): void {
    if (this.isEditMode) {
      this.cardService.updateCard(this.formData.id!, this.formData);
    } else {
      this.cardService.addCard(this.formData as Omit<Card, 'id' | 'creationDate'>);
    }
    this.submitComplete.emit();
  }
}