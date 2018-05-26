import { Component } from "@angular/core";



@Component({
    selector :"parent-comp",
    template :`
    <div>
    <h1> PARENT COMPONENT</h1>
    <div> ID of Parent : {{Id}} </div>
    <child-comp [ParId]="Id" (notify)="notifyHandler($event)"></child-comp>
    </div>
    `
})
export class ParentComponent
{
    Id:number =100;
    constructor()
    {
        console.log('parent arrived');
    }

    notifyHandler(payload)
    {
        alert('Message recieved by Parent : ' + payload);
    }
}