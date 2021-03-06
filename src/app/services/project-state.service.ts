import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectStateService {
  private projectsSource = new BehaviorSubject([]);
  currentProjects = this.projectsSource.asObservable();
  store = 'projects';

  constructor() {
    this.projectsSource.next(JSON.parse(localStorage.getItem(this.store)) || []);
  }

  getProjectById(id) {
    return this.projectsSource.value.filter(project => project.id === id)[0];
  }

  getLastId() {
    return +localStorage.getItem('project_last_id') || 0;
  }

  addProject(name) {
    const newId = this.getLastId() + 1;
    this.projectsSource.next([...this.projectsSource.value, {name, id: newId}]);
    this.updateStorage();

    localStorage.setItem('project_last_id', newId.toString());
  }

  deleteProject(id) {
    // Delete Project
    this.projectsSource.next(this.projectsSource.value.filter(p => p.id !== id));
    this.updateStorage();

    // Delete All Todos for that Project
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo.project !== id);
    localStorage.setItem('todos', JSON.stringify(todos));

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
    localStorage.setItem(this.store, JSON.stringify(this.projectsSource.value));
    console.log('%c Updated ',
      'color: white; background-color: #95B46A',
      'Projects Local Storage Updated');
  }

}
