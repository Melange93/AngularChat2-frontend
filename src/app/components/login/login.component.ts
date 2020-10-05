import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }

}
