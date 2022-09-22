import { Component, OnInit } from '@angular/core';
import {TodoItemDTO} from "../../../../core/api-openapi";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../core/interfaces/app-state";
import * as TodoActions from '../../store/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoItem: TodoItemDTO = {
    isComplete: false,
    name: '',
    id: 0
  };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onClickAddTodo() {
    console.log(this.todoItem)
    this.store.dispatch(TodoActions.addTodo({todo: this.todoItem}))
  }
}
