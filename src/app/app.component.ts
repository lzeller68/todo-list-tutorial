import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list-tutorial';

  constructor(private router: Router) {
  }

  onClickNavigateAddTodo() {
    this.router.navigateByUrl('todos/add');
  }

  onClickNavigateAllTodos() {
    this.router.navigateByUrl('todos');
  }
}
