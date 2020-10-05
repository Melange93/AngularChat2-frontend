import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Route, Router} from '@angular/router';

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

  ngOnInit() {
  }

  singUp() {
    const user = {
      email: this.email,
      userName: this.userName,
      password: this.password
    };

    this.authService.signUp(user).then(value => this.router.navigate(['/login']));
  }
}
