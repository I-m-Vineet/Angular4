import { Component, Input, Output, EventEmitter } from "@angular/core";




@Component({
    selector :"child-comp",
    template :`
    <div>
    <h1> CHILD COMPONENT</h1>
    <div> ID of CHild : {{Id}} 
    <p> Paerson incoming Id : {{ParId}} </p>
    <button (click)="sendNotification()">Send Notification to Parent</button>
    </div>
    </div>
    `
})
export class ChildComponent
{
    //Person: {name:string, age:number};

    Id:number = 420;

    @Input()
    ParId: number;

    //use event(notify)
    @Output()
    notify: EventEmitter<string> = new EventEmitter<string>();
    constructor()
    {
        console.log('Child born');
    }
    sendNotification()
    {
        this.notify.emit("Message for PAPA :  HI PAPPA !!");
    }
}