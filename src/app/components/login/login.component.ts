import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userName: string;
  private password: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    const userCredentials = {
      userName: this.userName,
      password: this.password
    };

    this.authService.login(userCredentials);
  }

}
