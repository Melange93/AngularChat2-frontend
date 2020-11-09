import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userName: string;
  private password: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    const userCredentials = {
      userName: this.userName,
      password: this.password
    };

    if (userCredentials.userName.trim() === '' || userCredentials.password.trim() === '') {
      alert('Please fill every field correctly.');
      return;
    }

    this.authService.login(userCredentials);
  }

}
