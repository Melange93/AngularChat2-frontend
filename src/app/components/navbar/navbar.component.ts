import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() userName: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {

  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

}
