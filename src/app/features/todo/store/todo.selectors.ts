import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from './todo.reducer';

export const selectTodoState = createFeatureSelector<fromTodo.TodoState>(
  fromTodo.todoFeatureKey
);

export const getTodos = createSelector(
  selectTodoState,
  todos => todos.todos
);
