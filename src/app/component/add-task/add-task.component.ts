import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/typing';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  task_text!: String;
  day!: String;
  reminder: Boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.task_text) {
      return this.showError('Task Text is required');
    }
    if (!this.day) {
      return this.showError('Day is required');
    }

    const newTask = {
      text: this.task_text,
      day: this.day,
      reminder: this.reminder,
    };
    //! we need to emit the event to the parent component
    // ! now we need to clear the values
    this.task_text = '';
    this.day = '';
    this.reminder = false;
    this.onAddTask.emit(newTask);
    //! after emitting the show success message
    this.showSuccess();
  }
  showSuccess() {
    this.toastr.success('Task Added Successfully');
  }

  showError(msg: string) {
    this.toastr.error(`${msg} please add and try again`);
  }
}
