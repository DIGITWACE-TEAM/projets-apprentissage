import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TopBarComponent, TaskFormComponent, TaskListComponent],
  template: `
    <div class="app-container">
      <app-top-bar 
        [activeView]="currentView" 
        (viewChange)="onViewChange($event)"
      ></app-top-bar>
      
      <div class="main-content">
        <app-task-form 
          *ngIf="currentView === 'add'" 
          (taskAdded)="addTask($event)"
        ></app-task-form>
        
        <app-task-list 
          *ngIf="currentView !== 'add'"
          [tasks]="filteredTasks"
          [viewType]="currentView"
          (delete)="deleteTask($event)" 
          (toggle)="toggleTask($event)"
          (update)="updateTask($event)"
        ></app-task-list>
      </div>
    </div>
  `,
  styles: [`
      .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .main-content {
      flex: 1;
      padding: 20px;
      margin-top: 60px; 
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
     
  `]
})
export class AppComponent {
  currentView: 'list' | 'done' | 'add' = 'list';
  tasks: Task[];
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
    this.tasks = this.taskService.getTasks();
  }

  get filteredTasks(): Task[] {
    switch(this.currentView) {
      case 'done': return this.tasks.filter(t => t.completed);
      default: return this.tasks;
    }
  }

  onViewChange(view: 'list' | 'done' | 'add') {
    this.currentView = view;
  }

  addTask(text: string) {
    this.taskService.addTask(text);
    this.tasks = this.taskService.getTasks();
    this.currentView = 'list';
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  toggleTask(id: string) {
    this.taskService.toggleTask(id);
    this.tasks = this.taskService.getTasks();
  }

  updateTask(updatedTask: {id: string, text: string}) {
    this.taskService.updateTask(updatedTask.id, updatedTask.text);
    this.tasks = this.taskService.getTasks();
  }
}