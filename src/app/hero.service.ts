import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes'


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
}