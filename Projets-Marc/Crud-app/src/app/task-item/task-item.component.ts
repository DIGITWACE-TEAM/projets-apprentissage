import { Component, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  onDelete() {
    this.taskService.deleteTask(this.task.id);
  }

}
