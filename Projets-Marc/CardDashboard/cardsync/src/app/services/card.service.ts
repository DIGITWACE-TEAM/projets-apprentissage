import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class CardService {
  private storageKey = 'cards';

  getCards(): Card[] {
    const storedCards = localStorage.getItem(this.storageKey);
    return storedCards ? JSON.parse(storedCards) : [];
  }

  getCardById(id: string): Card | undefined {
    return this.getCards().find(card => card.id === id);
  }

  addCard(card: Omit<Card, 'id' | 'creationDate'>): void {
    const cards = this.getCards();
    const newCard: Card = {
      id: uuidv4(),
      creationDate: new Date(),
      ...card
    };
    localStorage.setItem(this.storageKey, JSON.stringify([...cards, newCard]));
  }

  updateCard(id: string, updatedCard: Partial<Card>): void {
    let cards = this.getCards();
    cards = cards.map(card => 
      card.id === id ? { ...card, ...updatedCard } : card
    );
    localStorage.setItem(this.storageKey, JSON.stringify(cards));
  }

  deleteCard(id: string): void {
    const cards = this.getCards().filter(card => card.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(cards));
  }
}