import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectStateService} from '../../services/project-state.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  project = null;

  constructor(private activatedRoute: ActivatedRoute, private projectStateService: ProjectStateService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.project = this.projectStateService.getProjectById(+params.id);
      if (!this.project) {
        alert('Project not found!');
      }
    });
  }

}
