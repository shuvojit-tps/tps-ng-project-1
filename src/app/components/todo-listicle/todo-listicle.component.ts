import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoStateService} from '../../services/todo-state.service';

@Component({
  selector: 'app-todo-listicle',
  templateUrl: './todo-listicle.component.html',
  styleUrls: ['./todo-listicle.component.css']
})
export class TodoListicleComponent implements OnInit {

  // Props
  @Input() id;
  @Input() name;

  // Events
  @Output() deleted = new EventEmitter<number>();


  editMode = false;

  constructor(private stateService: TodoStateService) {
  }

  ngOnInit() {
  }

  destroyTodo() {
  }

  changeTodoName(event, name) {
    if (event.key === 'Enter' || event instanceof FocusEvent) {
      this.name = name;
      this.editMode = false;
      this.stateService.editTodo(this.id, name);
    }
  }


}
