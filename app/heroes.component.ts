import {Component, OnInit} from 'angular2/core';
import {Hero} from '../interfaces/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'templates/app/app.html',
		styleUrls: ['templates/app/app.css'],
		directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private _heroService: HeroService) { }
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
