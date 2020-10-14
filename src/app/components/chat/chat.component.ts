import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {WebSocketService} from '../../services/web-socket.service';
import {ChatMessage} from '../../models/chat-message/chat.message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  message: string;

  constructor(
    private authService: AuthService,
    private webSocketService: WebSocketService
  ) {
  }

  ngOnInit() {
    console.log('Chat component init');
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    console.log('Chat component destroy');
    this.webSocketService.closeWebSocket();
  }

  sendMessage() {
    const chatMessage = new ChatMessage(
      this.authService.getUser(),
      this.message,
      new Date()
    );

    this.webSocketService.sendMessage(chatMessage);
    this.message = '';
  }
}
