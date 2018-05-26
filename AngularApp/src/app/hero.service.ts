import { Injectable } from '@angular/core';
import { HEROES } from './Mock-Hero'
import { Hero } from './Hero'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { MessageService } from './message.service'
 
@Injectable()
export class HeroService {

  constructor(private mService: MessageService) { }

  getHeroes(): Observable<Hero[]>
  {
    this.mService.add('Hero Service : Fetched Heroes!!');
    return of(HEROES);
  }

}
