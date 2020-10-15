import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user/user.model';
import {ChatMessage} from '../models/chat-message/chat.message.model';
import {ChatRoom} from '../models/chatroom.model';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {

  private basicUrl = environment.backendUrl;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true
  };

  constructor(private httpClient: HttpClient
  ) {
  }


  saveNewChatRoom(roomName: string, user: User) {
    const newChatRoom = {
      id: null,
      chatRoomName: roomName,
      creator: user,
      members: null,
      chatMessages: null
    };

    this.httpClient.post<ChatRoom>(this.basicUrl + '/addchatroom', newChatRoom, this.httpOptions).toPromise()
      .then(value => console.log(value))
      .catch(reason => console.log(reason));
  }

  addNewMember(chatRoomId: number, userName: string) {
    console.log(chatRoomId)
    this.httpClient.post(this.basicUrl + '/addnewmember', {chatRoomId, userName}, this.httpOptions).toPromise()
      .then(value => console.log(value))
      .catch(reason => console.log(reason));
  }
}
