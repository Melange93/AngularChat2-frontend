import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user/user.model';
import {Subscription} from 'rxjs';
import {UserLoginService} from '../../services/user-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private loggedUser: User;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userLoginService: UserLoginService
  ) {
    this.subscription = this.userLoginService.userLoginEvents.subscribe((newValue) => {
      this.loggedUser = newValue;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout().then(value => this.router.navigate(['/login']));
  }
}
