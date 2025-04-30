import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() tasks: Task[] = [];
  @Input() viewType: 'list' | 'done' = 'list';
  @Output() delete = new EventEmitter<string>();
  @Output() toggle = new EventEmitter<string>();
  @Output() update = new EventEmitter<{id: string, text: string}>();

}