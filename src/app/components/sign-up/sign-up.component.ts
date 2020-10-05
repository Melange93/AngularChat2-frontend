import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private email: string;
  private displayName: string
  private password: string;

  constructor() {
  }

  ngOnInit() {
  }

  singUp() {
    console.log(this.email);
    console.log(this.displayName);
    console.log(this.password);
  }

}
