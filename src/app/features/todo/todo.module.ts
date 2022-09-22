import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './pages/todos/todo.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './store/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effects';
import {MatButtonModule} from "@angular/material/button";
import {AddTodoComponent} from "./pages/add-todo/add-todo.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    TodoComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule
  ]
})
export class TodoModule { }
