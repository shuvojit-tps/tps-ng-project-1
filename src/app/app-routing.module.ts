import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './views/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    data: {
      title: 'projects'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
