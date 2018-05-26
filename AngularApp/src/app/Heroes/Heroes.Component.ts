import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../Mock-Hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes = HEROES;

    heroNew : Hero[];
  constructor(private heroService:HeroService) { }

    selectedHero: Hero;

    onSelect(hero: Hero): void {
    this.selectedHero = hero;
    }

    getHeoroes()
    {
      this.heroService.getHeroes().subscribe(
        heroes => this.heroNew = heroes
      );
    }
    
  ngOnInit() {
    this.getHeoroes();
  }

}