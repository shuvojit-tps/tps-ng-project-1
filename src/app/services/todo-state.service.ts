import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {
  private todoSource = new BehaviorSubject([]);
  currentTodo = this.todoSource.asObservable();

  constructor() {
    this.todoSource.next(JSON.parse(localStorage.getItem('todos')) || []);
  }

  getLastId() {
    return this.todoSource.value.reduce((t, p) => Math.max(t, p.id), 0);
  }

  addTodo(name, project) {
    this.todoSource.next([...this.todoSource.value, {name, id: this.getLastId() + 1, project}]);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todoSource.value));
    console.log('%c Updated ',
      'color: white; background-color: #95B46A',
      'Todo Local Storage Updated');
  }
}
