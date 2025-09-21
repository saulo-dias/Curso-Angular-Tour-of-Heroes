import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero.model';
import { MessageService } from '../services/message.service';
import { HEROES } from '../services/mock-heroes'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES); // o of é utilizado para transformar um array em um Observable
    this.messageService.add(' HeroService: fetched heroes'); // Adiciona uma mensagem ao serviço de mensagens
    return heroes;
    
}

getHero(id: number): Observable<Hero> {
  // Usamos o .find para encontrar o herói pelo id -- Esse find retorna o primeiro elemento que satisfaz a condição
  const hero = HEROES.find(hero => hero.id === id)!; // O operador ! é utilizado para informar ao TypeScript que o valor não será nulo ou indefinido
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(hero);
}
}