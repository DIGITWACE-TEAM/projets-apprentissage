import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() activeView: 'list' | 'done' | 'add' = 'list'; 
  @Output() viewChange = new EventEmitter<'list' | 'done' | 'add'>();

  changeView(view: 'list' | 'done' | 'add') { 
    this.viewChange.emit(view);
  }
}