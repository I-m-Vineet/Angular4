 import { Component } from '@angular/core';


@Component(
{
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Tour of Heroes';
  // constructor(ls: LogService) ///object will be injected
  //    {
  //      console.log('App component loaded');         
  //    }
}










//#region 
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   private logserive:LogService; ///inject service at constructor level
//   constructor(ls: LogService) ///object will be injected
//   {
//     console.log('App component loaded');
//     this.logserive = ls;

//   }

//   public DoSomeAction()
//   {
//     this.logserive.log('logging started');
//   }
// }
