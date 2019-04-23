import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private projects = [];

  constructor() {
    this.projects = JSON.parse(localStorage.getItem('projects')) || [];
  }

  getProjects() {
    return this.projects;
  }

  addProject(name) {
    this.projects.push({ name, id: 30 });
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

}
