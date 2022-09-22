import {Action, createReducer, on} from '@ngrx/store';
import * as TodoActions from './todo.actions';
import {TodoItemDTO} from "../../../core/api-openapi";
import {AppState} from "../../../core/interfaces/app-state";
import {state} from "@angular/animations";

export const todoFeatureKey = 'todo';

export interface TodoState extends AppState {
  todos: TodoItemDTO[];
  isLoading: boolean;
  error: string | null;
  currentTodo: TodoItemDTO | null
}

export const initialState: TodoState = {
  error: null,
  isLoading: false,
  todos: [],
  currentTodo: null
};

export const reducer = createReducer(
    initialState,

    on(TodoActions.loadTodos, state => {
      return {
        ...state,
        isLoading: true
      }
    }),
    on(TodoActions.loadTodosSuccess, (state, action) => {
      return {
        ...state,
        todos: action.todos,
        isLoading: false
      }
    }),
    on(TodoActions.loadTodosFailure, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }),

    on(TodoActions.addTodo, (state) => {
      return {
        ...state,
        isLoading: true
      }
    }),

    on(TodoActions.addTodoSuccess, (state) => {
      return {
        ...state,
        isLoading: false
      }
    }),

    on(TodoActions.addTodoFailure, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }),

    on(TodoActions.changeTodoStatus, (state, action) => {
      return {
        ...state,
        currentTodo: state.currentTodo
      }
    }),

  on(TodoActions.changeTodoStatusSuccess, (state, action) => {
    return {
      ...state,
    }
  }),

  on(TodoActions.changeTodoStatusFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  )
;
