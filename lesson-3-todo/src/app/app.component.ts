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


  isDisblay:boolean = false;

  getItems():Array<TodoItem>{

    if(this.isDisblay){
      return this.getNotCheckItems();
    }
    return this.model.items
  }

  getNotCheckItems():Array<TodoItem>{
    return this.model.items.filter(item=>!item.result)
  }

  addItem(value:string){
    if(value != ""){
      let toDo : TodoItem =new TodoItem(value,false)
      this.model.items.push(toDo);
    }
  }

}
