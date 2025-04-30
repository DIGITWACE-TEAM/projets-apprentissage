import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, AsyncPipe, NgFor],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks$!: any; 

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$; 
  }
}
