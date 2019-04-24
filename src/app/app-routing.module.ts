import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './views/projects/projects.component';
import {TodosComponent} from './views/todos/todos.component';
import {ItemsComponent} from './views/items/items.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'project/:id',
    component: TodosComponent,
  },
  {
    path: 'todo/:id',
    component: ItemsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
