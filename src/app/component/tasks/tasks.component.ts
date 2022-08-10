import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MockTask } from 'src/app/mock.task';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/typing';
import { UiService } from './../../services/ui.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  subscription!: Subscription;
  showAddTask!: boolean;

  constructor(private taskService: TaskService, private uiService: UiService) {
    (this.subscription = this.uiService.onToggle().subscribe((showAddTask) => {
      this.showAddTask = showAddTask;
    })),
      (error: Error) => {
        console.log(error);
      };
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  deleteTask(task: any) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }
  AddReminder(task: any) {
    this.taskService.updateReminder(task).subscribe(() => {});
  }
  AddTask(task: any) {
    console.log(task);
    this.taskService.addTask(task).subscribe((newTask) => {
      this.tasks.push(newTask);
    });
  }
}
