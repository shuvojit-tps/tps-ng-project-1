import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  destroyProject() {
    this.deleted.emit(this.id);
  }

  changeProjectName(event, value) {
    if (event.key === 'Enter') {
      this.name = value;
      this.editMode = false;
    }
  }

}
