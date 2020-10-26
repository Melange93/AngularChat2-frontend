import {ChatRoom} from '../chatroom.model';

export class User {
  id: number;
  userName: string;
  email: string;
  password: string;
  createdRoom: ChatRoom[];
  member: ChatRoom[];
}
