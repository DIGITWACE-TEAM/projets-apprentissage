import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Input() activeView: 'list' | 'add' | 'detail' = 'list';
  @Output() changeView = new EventEmitter<'list' | 'add'>();

  setView(view: 'list' | 'add'): void {
    this.changeView.emit(view);
  }
}