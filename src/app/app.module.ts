import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { ProjectsComponent } from './views/projects/projects.component';
import { ProjectListicleComponent } from './components/project-listicle/project-listicle.component';
import { TodosComponent } from './views/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectListicleComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
