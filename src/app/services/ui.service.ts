import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>(); //! this like useState in react

  constructor() {}

  toggleAddTask() {
    this.showAddTask = !this.showAddTask; //! this.showAddTask;
    this.subject.next(this.showAddTask); //! update the state
    console.log('lol');
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable(); //! return the state
  }
}
