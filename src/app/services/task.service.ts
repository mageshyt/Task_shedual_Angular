import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/typing';
import { MockTask } from '../mock.task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(MockTask);
    return tasks;
  }
}
