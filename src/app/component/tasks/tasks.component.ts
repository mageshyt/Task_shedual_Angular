import { Component, OnInit } from '@angular/core';
import { MockTask } from 'src/app/mock.task';
import { Task } from 'src/typing';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = MockTask;
  
  constructor() {}

  ngOnInit(): void {}
}
