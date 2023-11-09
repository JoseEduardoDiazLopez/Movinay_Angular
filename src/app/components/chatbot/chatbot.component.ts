import { Component } from '@angular/core';

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
  }
  else {
    return 'No entiendo. ¿Puedes ser más específico?';
  } 
}

  
  
}
