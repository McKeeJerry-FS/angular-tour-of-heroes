import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  constructor() {}

  hero: Hero = {
    id: 1,
    name: 'Iron Man',
    power: 'Cybernetic Suit',
    alterEgo: 'Tony Stark'
  };

  ngOnInit(): void{

  }
}
