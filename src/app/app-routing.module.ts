import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './views/projects/projects.component';
import {TodosComponent} from './views/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'project/:id',
    component: TodosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
