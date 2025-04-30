import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Input() viewType: 'list' | 'done' = 'list';
  @Output() delete = new EventEmitter<string>();
  @Output() toggle = new EventEmitter<string>();
  @Output() update = new EventEmitter<{id: string, text: string}>();

  isEditing = false;
  editedText = '';

  startEdit() {
    this.isEditing = true;
    this.editedText = this.task.text;
  }

  saveEdit() {
    if (this.editedText.trim()) {
      this.update.emit({id: this.task.id, text: this.editedText});
      this.isEditing = false;
    }
}
}
