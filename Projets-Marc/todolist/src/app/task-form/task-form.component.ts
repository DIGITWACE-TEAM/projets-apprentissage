import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskText = '';
  @Output() taskAdded = new EventEmitter<string>();

  onSubmit() {
    if (this.taskText.trim().length >= 6 && this.taskText.trim().length <= 20) {
      this.taskAdded.emit(this.taskText.trim());
      this.taskText = '';
    }
  }
}