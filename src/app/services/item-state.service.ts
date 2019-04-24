import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemStateService {

  private itemSource = new BehaviorSubject([]);
  currentItem = this.itemSource.asObservable();
  store = 'items';

  constructor() {
    this.itemSource.next(JSON.parse(localStorage.getItem(this.store)) || []);
  }

  static getLastId() {
    return +localStorage.getItem('todo_last_id') || 0;
  }

  updateStorage() {
    localStorage.setItem(this.store, JSON.stringify(this.itemSource.value));
    console.log('%c Updated ',
      'color: white; background-color: #95B46A',
      'Todo Local Storage Updated');
  }
}
