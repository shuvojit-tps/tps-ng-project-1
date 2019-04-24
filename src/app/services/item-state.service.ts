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
    return +localStorage.getItem('item_last_id') || 0;
  }

  addItem(name, todo) {
    const newId = ItemStateService.getLastId() + 1;
    this.itemSource.next([...this.itemSource.value, {name, id: newId, todo, selected: false, priority: 'l'}]);
    this.updateStorage();

    localStorage.setItem('item_last_id', newId.toString());
  }

  changeSelected(id, selected) {
    const items = this.itemSource.value;
    items.forEach(item => {
      if (item.id === id) {
        item.selected = selected;
      }
    });
    this.itemSource.next(items);
    this.updateStorage();
  }

  changePriority(id, priority) {
    const items = this.itemSource.value;
    items.forEach(item => {
      if (item.id === id) {
        item.priority = priority;
      }
    });
    this.itemSource.next(items);
    this.updateStorage();
  }

  editItem(id, name) {
    const items = this.itemSource.value;
    items.forEach(item => {
      if (item.id === id) {
        item.name = name;
      }
    });
    this.itemSource.next(items);
    this.updateStorage();
  }

  deleteItem(id) {
    this.itemSource.next(this.itemSource.value.filter(t => t.id !== id));
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem(this.store, JSON.stringify(this.itemSource.value));
    console.log('%c Updated ',
      'color: white; background-color: #95B46A',
      'Todo Local Storage Updated');
  }
}
