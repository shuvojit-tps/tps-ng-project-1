import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ProjectStateService} from '../../services/project-state.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [];
  @ViewChild('addProjectBox') addProjectBox: ElementRef;

  constructor(private stateService: ProjectStateService) { }

  ngOnInit() {
    this.stateService.currentProjects.subscribe(projects => this.projects = projects);
  }

  addProject(event, title) {
    if (event.key === 'Enter') {
      console.log('%c add ',
        'color: white; background-color: #95B46A',
        `Project ${title}`);
      this.stateService.addProject(title);
      this.addProjectBox.nativeElement.value = '';
    }
  }

  deleteProject(id) {
    this.stateService.deleteProject(id);
  }

}
