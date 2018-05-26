import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventComponent } from './event.coponent';
import { CustomerComponent } from './Customer.component';
import { FormsModule } from '@angular/forms'
import { AppIfComponent } from './app.if.component';
import {  HighlightDirective } from './app.highlight.directive';
import { ParentComponent } from './app.parent.component';
import { ChildComponent } from './app.child.component';
import { LogService } from './app.logService';
import { UserComponent } from './app.usercomponent';
import {HeroesComponent } from './Heroes/Heroes.Component'
import {HeroDetailComponent} from './Hero-Detail/heroes-detail.Component'
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EventComponent,
    CustomerComponent,
    AppIfComponent,
    HighlightDirective,
    ParentComponent,
    ChildComponent,
    UserComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService, HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
