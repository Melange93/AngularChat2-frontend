import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Route, Router} from '@angular/router';
import {ChatRoom} from '../../models/chatroom.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private email: string;
  private userName: string;
  private password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  singUp(): void {
    const user = {
      id: null,
      email: this.email,
      userName: this.userName,
      password: this.password,
      createdRoom: null,
      member: null
    };

    this.authService.signUp(user).then(value => this.router.navigate(['/login']));
  }
}
