import { Model, TodoItem } from './model';
import { Component, destroyPlatform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model()

  getName():string{
    return this.model.username
  }

  getItems():Array<TodoItem>{
    return this.model.items
  }
}
