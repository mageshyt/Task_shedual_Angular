import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/typing';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() delete = new EventEmitter<Task>();
  @Output() SetReminder = new EventEmitter<Task>();
  faTimes = faTimes;
  reminder = 'border-l-3 border-green-500';
  constructor() {}

  ngOnInit(): void {}

  OnDeleteTask(task: Task | undefined) {
    this.delete.emit(task);
  }

  OnAddReminder(task: Task | undefined) {
    this.SetReminder.emit(task);
  }
}
