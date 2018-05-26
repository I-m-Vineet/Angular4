import { Component } from '@angular/core';
import { LogService } from './app.logService';

@Component({
  selector: 'app-user',
  template: `<div>
            <button (click) ="DoSomeAction()">User Service Invoked</button>
            </div>`,
})
export class UserComponent {
  title = 'app';
  //instatiated with property
  constructor( private logserive: LogService) ///object will be injected
  {
    console.log('User component loaded');
     }

  public DoSomeAction()
  {
    this.logserive.log('logging started for User');
  }
}
