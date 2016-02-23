import {Component} from 'angular2/core';
import {Hero} from '../interfaces/hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'templates/hero/hero-detail.html',
  inputs: ['hero']
})

export class HeroDetailComponent {
  hero: Hero;
  constructor(private _heroService: HeroService) { }
}
