import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoStateService} from '../../services/todo-state.service';
import {ItemStateService} from '../../services/item-state.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  todo = null;
  items = [];

  left = 0;
  filter = 'a';

  @ViewChild('addItemBox') addTodoBox: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoStateService: TodoStateService,
    private itemStateService: ItemStateService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.todo = this.todoStateService.getTodoById(+params.id);
      if (!this.todo) {
        alert('Todo not found!');
      }
    });

    this.itemStateService.currentItem.subscribe(items => {
      // Get items belonging to this todos
      this.items = items.filter(item => item.todo === this.todo.id);

      this.left = this.items.filter(item => !item.selected).length;

    });
  }

  addItem(event, name) {
    if (event.key === 'Enter') {
      console.log('%c add ',
        'color: white; background-color: #95B46A',
        `Item ${name}`);
      this.itemStateService.addItem(name, this.todo.id);
      this.addTodoBox.nativeElement.value = '';
    }
  }

}
