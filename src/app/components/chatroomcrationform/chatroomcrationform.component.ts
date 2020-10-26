import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user/user.model';
import {ChatroomService} from '../../services/chatroom.service';

@Component({
  selector: 'app-chatroomcrationform',
  templateUrl: './chatroomcrationform.component.html',
  styleUrls: ['./chatroomcrationform.component.css']
})
export class ChatroomcrationformComponent implements OnInit {

  private chatRoomName: string;
  private loggedUser: User;

  constructor(
    private authService: AuthService,
    private chatroomService: ChatroomService
  ) { }

  ngOnInit() {
    this.loggedUser = this.authService.getUser();
  }

  createNewChatRoom() {
    if (this.chatRoomName !== '') {
      this.chatroomService.saveNewChatRoom(this.chatRoomName, this.loggedUser);
    }

    this.chatRoomName = '';
  }
}
