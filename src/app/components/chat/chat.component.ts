import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {WebSocketService} from '../../services/web-socket.service';
import {ChatMessage} from '../../models/chat-message/chat.message.model';
import {Subscription} from 'rxjs';
import {ChatRoom} from '../../models/chatroom.model';
import {ChatRoomLoginService} from '../../services/chatroom-login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  message: string;
  private chatRoomLogin: ChatRoom;

  constructor(
    private authService: AuthService,
    private webSocketService: WebSocketService,
    private chatRoomLoginService: ChatRoomLoginService
  ) {
  }

  ngOnInit(): void {
    console.log('Chat component init');
    this.webSocketService.openWebSocket();
    this.chatRoomLogin = this.chatRoomLoginService.getChatRoomLogin();
  }

  ngOnDestroy(): void {
    console.log('Chat component destroy');
    this.webSocketService.closeWebSocket();
  }

  sendMessage(): void {
    const chatMessage = new ChatMessage(
      this.authService.getUser(),
      this.message,
      new Date(),
      this.chatRoomLogin
    );

    this.webSocketService.sendMessage(chatMessage);
    this.message = '';
  }
}
