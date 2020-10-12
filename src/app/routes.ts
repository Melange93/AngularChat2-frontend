import {Routes} from '@angular/router';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginComponent} from './components/login/login.component';
import {ChatComponent} from './components/chat/chat.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';

export const appRoutes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];
