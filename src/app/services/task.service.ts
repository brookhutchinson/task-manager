// angular
import { Injectable } from '@angular/core';

// interfaces
import { Task } from './../interfaces/task.interface';

// mock data
import { MOCKTASKS } from '@app/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return MOCKTASKS;
  }
}
