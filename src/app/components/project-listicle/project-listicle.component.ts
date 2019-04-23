import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-listicle',
  templateUrl: './project-listicle.component.html',
  styleUrls: ['./project-listicle.component.css']
})
export class ProjectListicleComponent implements OnInit {
  // Props
  @Input() id;
  @Input() name;


  editMode = false;

  constructor() { }

  ngOnInit() {
  }

  changeProjectName(event, value) {
    if (event.key === 'Enter') {
      this.name = value;
      this.editMode = false;
    }
  }

}
