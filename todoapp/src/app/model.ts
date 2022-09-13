export class Model {
  username: string;
  items:Array<TodoItem>;
  constructor(){
    this.username = "Will";
    this.items = [
      new TodoItem("Task Complate", true ),
      new TodoItem( "Task Complate", false ),
      new TodoItem( "Task Complate", true ),
      new TodoItem( "Task Complate", false )
    ]
  }
}

export class TodoItem{
   constructor(public description:string,public result:boolean){
   }
}
