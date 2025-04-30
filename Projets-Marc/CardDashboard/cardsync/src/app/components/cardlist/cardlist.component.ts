import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';
import { CardItemComponent } from '../carditem/carditem.component';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];
  @Output() editCard = new EventEmitter<string>();

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }

  deleteCard(id: string): void {
    this.cardService.deleteCard(id);
    this.cards = this.cardService.getCards();
  }
}