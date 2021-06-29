import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';
  todo = [
   {  label: "Buy milk", 
      done: false, 
      priority: 3
   },
   {  label: "Get car washed", 
      done: true, 
      priority: 4
  },
  {  label: "clean house", 
     done: false, 
     priority: 5
}
 ];
 
 deleteTodo (id:number) {
  this.todo = this.todo.filter((v, i) => i !== id);
}

}
  