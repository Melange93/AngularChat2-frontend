import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user/user.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private loggedUser: User;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loggedUser = this.authService.getUser();
  }
}
