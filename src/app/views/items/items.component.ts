import { Component, OnInit } from '@angular/core';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoStateService: TodoStateService,
    private itemStateService: ItemStateService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.todo = this.todoStateService.getTodoById(+params.id);
      if (!this.todo) {
        alert('Todo not found!');
      }
    });
  }

}
