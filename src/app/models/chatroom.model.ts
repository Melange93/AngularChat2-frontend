import {User} from './user/user.model';
import {ChatMessage} from './chat-message/chat.message.model';

export class ChatRoom {
  id: number;
  chatRoomName: string;
  creator: User;
  members: User[];
  chatMessages: ChatMessage[];
}
