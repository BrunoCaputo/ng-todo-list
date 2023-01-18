import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'todo-tile',
  templateUrl: './todo-tile.component.html',
  styleUrls: ['./todo-tile.component.scss'],
})
export class TodoTileComponent {
  @Input('id') position: number = 0;
  @Input() text: string = '';
  @Input() done: boolean = false;

  constructor(private todoService: TodoService) {}

  removeTodo() {
    this.todoService.deleteTodo(this.position);
  }

  toggleDone(checked: boolean) {
    this.todoService.toggleDone(this.position, checked);
  }
}
