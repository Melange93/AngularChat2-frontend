import {Injectable, Output} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user/user.model';
import {UserCredentials} from '../models/usercredentials/usercredentials.model';
import {Router} from '@angular/router';
import {UserLoginService} from './user-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private basicUrl = environment.backendUrl;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true
  };

  private loggedUser: User;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private userLoginService: UserLoginService
  ) {
  }

  getUser() {
    return this.loggedUser;
  }

  signUp(user: User) {
    return this.httpClient.post<User>(this.basicUrl + '/newuser', user, this.httpOptions).toPromise()
      .then(value => value)
      .catch(reason => console.log(reason));
  }

  login(userCredentials: UserCredentials) {
    return this.httpClient.post<User>(this.basicUrl + '/login', userCredentials, this.httpOptions).toPromise()
      .then(value => {
        this.loggedUser = value;
        this.userLoginService.userLoginChanged(this.loggedUser);
      })
      .catch(reason => console.log(reason));
  }

  logout() {
    return this.httpClient.post(this.basicUrl + '/logout-user', {}, this.httpOptions).toPromise()
      .then(value => {
        this.loggedUser = undefined;
        this.userLoginService.userLoginChanged(this.loggedUser);
      })
      .catch(reason => console.log(reason));
  }
}
