import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectsComponent} from './views/projects/projects.component';
import {ProjectListicleComponent} from './components/project-listicle/project-listicle.component';
import {TodosComponent} from './views/todos/todos.component';
import {TodoListicleComponent} from './components/todo-listicle/todo-listicle.component';
import {ItemsComponent} from './views/items/items.component';
import {ProjectStateService} from './services/project-state.service';
import {TodoStateService} from './services/todo-state.service';
import { ItemListicleComponent } from './components/item-listicle/item-listicle.component';
import { ItemFilterPipe } from './pipes/item-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectListicleComponent,
    TodosComponent,
    TodoListicleComponent,
    ItemsComponent,
    ItemListicleComponent,
    ItemFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectStateService, TodoStateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
