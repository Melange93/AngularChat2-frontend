import {Injectable} from '@angular/core';
import {ChatMessage} from '../models/chat-message/chat.message.model';
import {environment} from '../../environments/environment';
import {ChatRoomLoginService} from './chatroom-login.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocketUrl = environment.backendWebSocketUrl;
  webSocket: WebSocket;
  chatMessages: ChatMessage[] = [];
  chatRoomName: string;

  constructor(
    private chatRoomLoginService: ChatRoomLoginService
  ) {
    this.chatRoomName = chatRoomLoginService.getChatRoomLogin().chatRoomName;
    this.webSocket = new WebSocket(this.webSocketUrl + '/chat/' + this.chatRoomName);
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
