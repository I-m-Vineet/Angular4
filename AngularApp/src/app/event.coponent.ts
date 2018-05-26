import { Component } from '@angular/core'

@Component(
    {
    selector: 'event-comp',
    template: `<div><h3> CT Employee Event <button [disabled] = "flag"  (click) = "message($event)">{{option}} </button>  </h3></div>`
    }
)
export class EventComponent
{
    option: string ="click Here"
    flag=true;
    constructor()
    {
        let that = this;
        console.log('Event component instatiated');
        setTimeout(function(){
            that.flag = false;
        }, 1000);
    }

    message(event)
    {
        alert(event.srcElement.value);
    }
}