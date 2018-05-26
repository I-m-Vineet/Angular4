import { Component }  from '@angular/core'
import { NgStyle } from '@angular/common'

@Component(
{
    selector: "if-comp",
    template: `
    <h1>If Component</h1>
    <div *ngIf="show"> This is live </div>
    <button (click)="show = !show">{{show ? 'hide' : 'show'}} </button>
     <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
    show = {{show}}
    <br>
    <div *ngIf="show; else elseBlock">Text to show</div>
    <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
    <p>{{show}}</p>`
})
export class AppIfComponent{
    show:boolean = true;
    constructor()
    {
        console.log('if component')
    }
}