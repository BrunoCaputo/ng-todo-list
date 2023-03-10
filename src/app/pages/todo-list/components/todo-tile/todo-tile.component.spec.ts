import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTileComponent } from './todo-tile.component';

describe('TodoTileComponent', () => {
  let component: TodoTileComponent;
  let fixture: ComponentFixture<TodoTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
