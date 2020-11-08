import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user/user.model';
import {AuthService} from '../../services/auth.service';
import {ChatRoom} from '../../models/chatroom.model';
import {ChatroomService} from '../../services/chatroom.service';
import {Router} from '@angular/router';
import {ChatRoomLoginService} from '../../services/chatroom-login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private loggedUser: User;
  private addNewUserName: string;
  private chatRoomId: number;

  constructor(
    private authService: AuthService,
    private chatRoomService: ChatroomService,
    private chatRoomLoginService: ChatRoomLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.refreshUserMemberRooms();
    this.authService.refreshUserCreatedRooms();
    this.loggedUser = this.authService.getUser();
  }

  addNewRoomMember(): void {
    this.chatRoomService.addNewMember(this.chatRoomId, this.addNewUserName);
  }

  loginChatRoom(loginChatRoomFromHtml: ChatRoom): void {
    this.chatRoomLoginService.setChatRoomLogin(loginChatRoomFromHtml);
    this.router.navigate(['/chat', loginChatRoomFromHtml.chatRoomName]);
  }
}
