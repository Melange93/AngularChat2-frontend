import {Injectable} from '@angular/core';
import {ChatMessage} from '../models/chat-message/chat.message.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocketUrl = environment.backendWebSocketUrl;
  webSocket: WebSocket;
  chatMessages: ChatMessage[] = [];

  constructor() {
    this.webSocket = new WebSocket(this.webSocketUrl + '/chat');
  }

  openWebSocket() {
    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessage = JSON.parse(event.data);
      this.chatMessages.push(chatMessage);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ',  event);
    };
  }

  sendMessage(chatMessage: ChatMessage) {
    this.webSocket.send(JSON.stringify(chatMessage));
  }

  closeWebSocket() {
    this.webSocket.close();
  }
}
