import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../app/components/topbar/topbar.component';
import { CardListComponent } from '../app/components/cardlist/cardlist.component';
import { CardAddComponent } from '../app/components/cardadd/cardadd.component';
import { CarddetailComponent } from '../app/components/carddetail/carddetail.component'; 
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TopbarComponent, CardListComponent, CardAddComponent, CarddetailComponent], 
  template: `
    <app-topbar 
      [activeView]="activeView" 
      (changeView)="activeView = $event"
    />
    
    @if (activeView === 'list') {
      <app-card-list 
        (editCard)="handleEdit($event)"
      />
    } @else if (activeView === 'add') {
      <app-card-add 
        [cardToEdit]="selectedCard"
        (submitComplete)="handleSubmitComplete()"
      />
    } @if (activeView === 'detail' && selectedCard) {
      <app-card-detail 
        [card]="selectedCard"
        (goBack)="activeView = 'list'"
      />
    }
  `
})
export class AppComponent {
  activeView: 'list' | 'add' | 'detail' = 'list';
  selectedCard?: Card;
  cardService: any;

  handleEdit(cardId: string): void {
    this.selectedCard = this.cardService.getCardById(cardId);
    this.activeView = 'add';
  }

  handleSubmitComplete(): void {
    this.activeView = 'list';
    this.selectedCard = undefined;
  }
}