import { TodoButtonDeleteAllComponent } from './modules/home/components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './modules/home/components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './modules/home/components/todo-list/todo-list.component';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TodoListComponent,
    TodoInputAddItensComponent,
    TodoButtonDeleteAllComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RouterModule],
})
export class AppModule {}
