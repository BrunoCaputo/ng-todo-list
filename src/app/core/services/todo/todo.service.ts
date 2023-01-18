import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/shared/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: ITodo[] = [];

  constructor() {}

  setTodos(todos: ITodo[]): void {
    this.todos = todos;
  }

  getTodos(): ITodo[] {
    return this.todos;
  }

  setTodo(todo: ITodo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleDone(id: number, done: boolean) {
    this.todos[id].done = done;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
