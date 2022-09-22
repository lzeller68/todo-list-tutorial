import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './pages/todos/todo.component';
import {AddTodoComponent} from "./pages/add-todo/add-todo.component";

const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'add', component: AddTodoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
