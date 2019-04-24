import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {

  constructor() {
    this.todoSource.next(JSON.parse(localStorage.getItem(this.store)) || []);
  }
  private todoSource = new BehaviorSubject([]);
  currentTodo = this.todoSource.asObservable();
  store = 'todos';

  static getLastId() {
    return +localStorage.getItem('todo_last_id') || 0;
  }

  getTodoById(id) {
    return this.todoSource.value.filter(todo => todo.id === id)[0];
  }

  addTodo(name, project) {
    const newId = TodoStateService.getLastId() + 1;
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

  deleteTodo(id) {
    // Delete Project
    this.todoSource.next(this.todoSource.value.filter(t => t.id !== id));
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem(this.store, JSON.stringify(this.todoSource.value));
    console.log('%c Updated ',
      'color: white; background-color: #95B46A',
      'Todo Local Storage Updated');
  }
}
