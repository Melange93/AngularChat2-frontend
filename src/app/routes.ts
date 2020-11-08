import {Routes} from '@angular/router';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginComponent} from './components/login/login.component';
import {ChatComponent} from './components/chat/chat.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {ChatroomcreationformComponent} from './components/chatroomcreationform/chatroomcreationform.component';

export const appRoutes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chat/:roomName', component: ChatComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'chatroomform', component: ChatroomcreationformComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];
