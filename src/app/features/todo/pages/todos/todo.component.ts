import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TodoItemDTO} from "../../../../core/api-openapi";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../core/interfaces/app-state";
import {getTodos} from "../../store/todo.selectors";
import * as TodoActions from '../../store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos$: Observable<TodoItemDTO[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = store.select(getTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  onClickGetTodos(): void{
    this.store.dispatch(TodoActions.loadTodos())
  }

  onCheckboxChanged(todo: TodoItemDTO) {
    let todoClone = Object.assign({}, todo);
    todoClone.isComplete = !todoClone.isComplete;
    this.store.dispatch(TodoActions.changeTodoStatus({todo: todoClone}));
  }
}
