import { createAction, props } from '@ngrx/store';
import {TodoItemDTO} from "../../../core/api-openapi";

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: TodoItemDTO[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: string }>()
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{todo: TodoItemDTO}>()
);

export const addTodoSuccess = createAction(
  '[Todo] Add Todo Success',
  props<{todo: TodoItemDTO}>()
);

export const addTodoFailure = createAction(
  '[Todo] Add Todo Failure',
  props<{error: string}>()
);

export const changeTodoStatus = createAction(
  '[Todo] Change Todo Status',
  props<{todo: TodoItemDTO}>()
);

export const changeTodoStatusSuccess = createAction(
  '[Todo] Change Todo Status Success',
  props<{todo: TodoItemDTO}>()
);

export const changeTodoStatusFailure = createAction(
  '[Todo] Change Todo Status Failure',
  props<{error: string}>()
);
