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
    return +localStorage.getItem('todo_last_id') || 0;
  }

  addTodo(name, project) {
    const newId = this.getLastId() + 1;
    this.todoSource.next([...this.todoSource.value, {name, id: newId, project}]);
    this.updateStorage();

    localStorage.setItem('todo_last_id', newId.toString());
  }

  editTodo(id, name) {
    const todos = this.todoSource.value;
    todos.forEach(todo => {
      if (todo.id === id) {
        todo.name = name;
      }
    });
    this.todoSource.next(todos);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todoSource.value));
    console.log('%c Updated ',
      'color: white; background-color: #95B46A',
      'Todo Local Storage Updated');
  }
}
