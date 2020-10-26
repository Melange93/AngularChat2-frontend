import {Injectable} from '@angular/core';
import {ChatRoom} from '../models/chatroom.model';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomLoginService {

  chatRoomLogin: ChatRoom;

  constructor() {
  }

  public setChatRoomLogin(val: ChatRoom) {
    this.chatRoomLogin = val;
  }

  public getChatRoomLogin() {
    return this.chatRoomLogin;
  }
}
