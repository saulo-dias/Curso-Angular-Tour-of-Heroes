import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  // Adiciona uma nova mensagem ao array
 add(message: string): void {
    this.messages.push(message);
  }
  // Limpa todas as mensagens
  clear(): void {
    this.messages = [];
  }

  getMessages(): string[] {
    return this.messages;
  }
}

