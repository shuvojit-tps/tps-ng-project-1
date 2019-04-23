import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectStateService {
  private projectsSource = new BehaviorSubject([]);
  currentProjects = this.projectsSource.asObservable();

  constructor() {
    this.projectsSource.next(JSON.parse(localStorage.getItem('projects')) || []);
  }

  getProjectById(id) {
    return this.projectsSource.value.filter(project => project.id === id)[0];
  }

  getLastId() {
    return this.projectsSource.value.reduce((t, p) => Math.max(t, p.id), 0);
  }

  addProject(name) {
    this.projectsSource.next([...this.projectsSource.value, {name, id: this.getLastId() + 1}]);
    this.updateStorage();
  }

  deleteProject(id) {
    this.projectsSource.next(this.projectsSource.value.filter(p => p.id !== id));
    this.updateStorage();
  }

  editProject(id, name) {
    const projects = this.projectsSource.value;
    projects.forEach(project => {
      if (project.id === id) {
        project.name = name;
      }
    });
    this.projectsSource.next(projects);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projectsSource.value));
    console.log('%c Updated ',
      'color: white; background-color: #95B46A',
      'Projects Local Storage Updated');
  }

}
