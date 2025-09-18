import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import {HEROES} from './mock-heroes'
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES); // o of é utilizado para transformar um array em um Observable
    return heroes;
    
}
}