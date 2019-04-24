import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { ProjectsComponent } from './views/projects/projects.component';
import { ProjectListicleComponent } from './components/project-listicle/project-listicle.component';
import { TodosComponent } from './views/todos/todos.component';
import { TodoListicleComponent } from './components/todo-listicle/todo-listicle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectListicleComponent,
    TodosComponent,
    TodoListicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
