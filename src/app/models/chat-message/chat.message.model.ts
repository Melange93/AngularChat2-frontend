import {User} from '../user/user.model';
import {ChatRoom} from '../chatroom.model';

export class ChatMessage {
  user: User;
  message: string;
  timeStamp: Date;
  chatRoom: ChatRoom;


  constructor(user: User, message: string, timeStamp: Date, chatRoom: ChatRoom) {
    this.user = user;
    this.message = message;
    this.timeStamp = timeStamp;
    this.chatRoom = chatRoom;
  }
}
