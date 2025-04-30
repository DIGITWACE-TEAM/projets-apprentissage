// card-detail.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-detail">
      <button class="btn-back" (click)="goBack.emit()">← Retour</button>
      <h1>{{ card.title }}</h1>
      <div class="meta">
        <time>{{ card.creationDate | date:'fullDate' }}</time>
      </div>
      <div class="content" [innerHTML]="card.content"></div>
    </div>
  `,
  styles: [`
    .card-detail {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      max-width: 800px;
      margin: 2rem auto;
      position: relative;
    }
    
    .btn-back {
      background: none;
      border: none;
      color: #3498db;
      cursor: pointer;
      padding: 0.5rem 1rem;
      margin-bottom: 2rem;
    }
    
    .meta {
      color: #95a5a6;
      margin: 1rem 0;
    }
    
    .content {
      line-height: 1.8;
      font-size: 1.1rem;
    }
  `]
})
export class CarddetailComponent {
  @Input() card!: Card;
  @Output() goBack = new EventEmitter<void>();
}

