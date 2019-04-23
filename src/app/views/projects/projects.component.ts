import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: 'Project1'
    },
    {
      id: 2,
      name: 'Project2'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
