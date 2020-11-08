import {Injectable} from '@angular/core';
import {ChatRoom} from '../models/chatroom.model';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomLoginService {

  chatRoomLogin: ChatRoom;

  constructor() {
  }

  public setChatRoomLogin(val: ChatRoom): void {
    this.chatRoomLogin = val;
  }

  public getChatRoomLogin(): ChatRoom {
    return this.chatRoomLogin;
  }
}
