import { Component } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { ITodo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todoList: ITodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    const todos: string = localStorage.getItem('todos') ?? '';
    this.todoService.setTodos(JSON.parse(todos));
    this.todoList = this.todoService.getTodos();
  }

  addTodo(todoText: string) {
    this.todoService.setTodo({
      text: todoText,
      done: false,
    });
  }
}
