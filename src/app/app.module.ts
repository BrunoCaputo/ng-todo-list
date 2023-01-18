import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { SharedModule } from './shared/shared.module';
import { TodoTileComponent } from './pages/todo-list/components/todo-tile/todo-tile.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoTileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
