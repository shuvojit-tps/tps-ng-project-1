import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectStateService} from '../../services/project-state.service';

@Component({
  selector: 'app-project-listicle',
  templateUrl: './project-listicle.component.html',
  styleUrls: ['./project-listicle.component.css']
})
export class ProjectListicleComponent implements OnInit {
  // Props
  @Input() id;
  @Input() name;

  // Events
  @Output() deleted = new EventEmitter<number>();


  editMode = false;

  constructor(private stateService: ProjectStateService) {
  }

  ngOnInit() {
  }

  switchMode($event) {
    event.stopPropagation();
    this.editMode = !this.editMode;
    return false;
  }

  destroyProject() {
    this.deleted.emit(this.id);
    // replacement for event.stopPropagation()
    return false;
  }

  changeProjectName(event, value) {
    if (event.key === 'Enter' || event instanceof FocusEvent) {
      this.name = value;
      this.editMode = false;
      this.stateService.editProject(this.id, value);
    }
  }

}
