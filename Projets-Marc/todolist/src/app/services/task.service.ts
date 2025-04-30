import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { v4 as uuidv4 } from 'uuid';


@Injectable({ providedIn: 'root' })
export class TaskService {
  private storageKey = 'angular_todo_tasks';
  private tasks: Task[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage() {
    const savedTasks = localStorage.getItem(this.storageKey);
    this.tasks = (savedTasks ? JSON.parse(savedTasks) : []).map((task: any) => ({
      ...task,
      date: new Date(task.date)
    }));
    this.sortTasks();
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  private sortTasks() {
    this.tasks.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(text: string): void {
    this.tasks.push({
      id: uuidv4(),
      text,
      completed: false,
      date: new Date()
    });
    this.sortTasks();
    this.saveToLocalStorage();
  }

  updateTask(id: string, newText: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.text = newText;
      this.saveToLocalStorage();
    }
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveToLocalStorage();
  }

  toggleTask(id: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveToLocalStorage();
    }
  }

  getCompletedTasks(): Task[] {
    return this.tasks.filter(task => task.completed);
  }
}

//Information persistance UUIDV4 CARACTERE DE VALIDATION POLICE