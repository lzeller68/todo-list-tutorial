import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap, switchMap, tap, exhaustMap, mergeMap} from 'rxjs/operators';
import {Observable, EMPTY, of, pipe, concat, forkJoin} from 'rxjs';
import * as TodoActions from './todo.actions';
import {TodoItemsService} from "../../../core/api-openapi";


@Injectable()
export class TodoEffects {

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() => this.todoService.apiTodoItemsGet().pipe(
        map(todos => TodoActions.loadTodosSuccess({todos})),
        catchError(error => of(TodoActions.loadTodosFailure({error})))
      )),
    );
  });

  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.addTodo),
      exhaustMap(todo => this.todoService.apiTodoItemsPost(todo.todo).pipe(
          tap(() => console.log(`Add todo: ${todo}`)),
          map(() => TodoActions.addTodoSuccess({todo: todo.todo})),
          map(() => TodoActions.loadTodos()),
          catchError(error => of(TodoActions.addTodoFailure({error})))
        )
      )
    )
  })

  changeTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.changeTodoStatus),
      mergeMap(todo =>
        this.todoService.apiTodoItemsIdPut(todo.todo.id as number, todo.todo).pipe(
          map(() => TodoActions.changeTodoStatusSuccess()),
          catchError(error => of(TodoActions.addTodoFailure({error})))
        )
      )
    )
  })

  changeTodoSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.changeTodoStatus),
      map(() => TodoActions.loadTodos())
    )
  })


  constructor(private actions$: Actions,
              private todoService: TodoItemsService
  ) {
  }
}
