import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import {WebSocketService} from '../../services/web-socket.service';
import {ChatMessage} from '../../models/chat-message/chat.message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  @Input() userName: string;
  message: string;

  constructor(
    private authService: AuthService,
    private webSocketService: WebSocketService
  ) {
  }

  ngOnInit() {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage() {
    const chatMessage = new ChatMessage(
      this.authService.getUserName(),
      this.message,
      this.getTimeStamp()
    );

    this.webSocketService.sendMessage(chatMessage);
    this.message = '';
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDay();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();

    return (date + ' ' + time);
  }

}
