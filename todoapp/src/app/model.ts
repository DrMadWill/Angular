export class Model {
  username: string;
  items:Array<TodoItem>;
  constructor(){
    this.username = "Will";
    this.items = [
      new TodoItem("Task Complate", "text-success fa-solid fa-circle-check" ),
      new TodoItem( "Task Complate", "text-warning fa-solid fa-circle-pause" ),
      new TodoItem( "Task Complate", "text-danger fa-solid fa-circle-xmark" ),
      new TodoItem( "Task Complate", "text-danger fa-solid fa-circle-xmark" )
    ]
  }
}

export class TodoItem{
   constructor(public description:string,public result:string){
   }
}
