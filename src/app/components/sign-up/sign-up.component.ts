import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

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
    private authService: AuthService
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


    if (user.userName.trim() === '' || user.email.trim() === '' || user.password.trim() === '') {
      alert('Please fill every field correctly.');
      return;
    }

    this.authService.signUp(user);
  }
}
