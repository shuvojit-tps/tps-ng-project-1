import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectStateService} from '../../services/project-state.service';
import {TodoStateService} from '../../services/todo-state.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  project = null;
  todos = [];

  @ViewChild('addTodoBox') addTodoBox: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectStateService: ProjectStateService,
    private todoStateService: TodoStateService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.project = this.projectStateService.getProjectById(+params.id);
      if (!this.project) {
        alert('Project not found!');
      }
    });

    this.todoStateService.currentTodo.subscribe(todos => {
      // Get todos belonging to this project
      this.todos = todos.filter(todo => todo.project === this.project.id);
    });
  }

  addTodo(event, name) {
    if (event.key === 'Enter') {
      console.log('%c add ',
        'color: white; background-color: #95B46A',
        `Todo ${name}`);
      this.todoStateService.addTodo(name, this.project.id);
      this.addTodoBox.nativeElement.value = '';
    }
  }

}
