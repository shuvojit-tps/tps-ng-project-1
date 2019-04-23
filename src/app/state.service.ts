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

  getLastId() {
    return this.projects.reduce((t, p) => Math.max(t, p.id) , 0);
  }

  addProject(name) {
    this.projects.push({ name, id: this.getLastId() + 1 });
    this.updateStorage();
  }

  deleteProject(id) {
    this.projects = this.projects.filter(p => p.id !== id);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

}
