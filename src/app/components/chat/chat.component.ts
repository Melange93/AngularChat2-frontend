import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() userName: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    console.log(this.message);
  }

}
