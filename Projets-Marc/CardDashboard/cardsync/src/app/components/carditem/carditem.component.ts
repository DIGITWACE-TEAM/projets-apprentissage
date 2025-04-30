import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CardItemComponent {
  @Input() card!: Card;
  @Output() onEdit = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();
  @Output() onView = new EventEmitter<string>();

  truncateDescription(description: string, limit: number = 100): string {
    if (!description) return '';
    return description.length > limit ? description.substring(0, limit) + '...' : description;
  }
}