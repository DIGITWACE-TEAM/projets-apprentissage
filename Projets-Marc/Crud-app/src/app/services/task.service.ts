// src/app/task.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title: title.trim()
    };
    this.tasks.push(newTask);
    this.tasksSubject.next([...this.tasks]);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next([...this.tasks]);
  }
}