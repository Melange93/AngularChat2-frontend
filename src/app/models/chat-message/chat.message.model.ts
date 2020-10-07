import {User} from '../user/user.model';

export class ChatMessage {
  user: User;
  message: string;
  timeStamp: Date;


  constructor(user: User, message: string, timeStamp: Date) {
    this.user = user;
    this.message = message;
    this.timeStamp = timeStamp;
  }
}
