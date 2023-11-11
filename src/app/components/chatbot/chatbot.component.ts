import { Component } from '@angular/core';
import * as stringSimilarity from 'string-similarity';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isChatbotOpen = false;
  userInput = '';
  chatMessages: string[] = [];
  contador: number=0;

  toggleChatbot() {
    this.isChatbotOpen = !this.isChatbotOpen;
    if(this.isChatbotOpen == true){
      this.chatMessages.push('Asistente: ¡Bienvenido! En este sitio web ayudamos a agilizar todos los tramites realizados de la Secretaria de Movilidad del Estado de Nayarit. ¿En qué puedo ayudarte el día de hoy?')
    }
  }

  sendMessage() {
  if (this.userInput.trim() !== '') {
    const userMessage = `Usuario: ${this.userInput}`;
    this.chatMessages.push(userMessage);

    // Lógica del chatbot para responder
    const botResponse = this.getBotResponse(this.userInput);
    this.chatMessages.push(`Asistente: ${botResponse}`);

    this.userInput = '';
  }
}

getBotResponse(userInput: string): string {
  // Ejemplo de lógica del chatbot
  if (userInput.toLowerCase().includes('hola')) {
    return 'Hola, bienvenido';
  } else {
    return 'No entiendo. ¿Puedes ser más específico?';
  }
}

  
  
}
