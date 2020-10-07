import {Injectable, Output} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user/user.model';
import {UserCredentials} from '../models/usercredentials/usercredentials.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private basicUrl = environment.backendUrl;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true
  };

  private userName: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  getUserName() {
    return this.userName;
  }

  signUp(user: User) {
    return this.httpClient.post<User>(this.basicUrl + '/newuser', user, this.httpOptions).toPromise()
      .then(value => console.log(value))
      .catch(reason => console.log(reason));
  }

  login(userCredentials: UserCredentials) {
    return this.httpClient.post<User>(this.basicUrl + '/login', userCredentials, this.httpOptions).toPromise()
      .then(value => this.userName = value.userName)
      .catch(reason => console.log(reason));
  }

  logout() {
    return this.httpClient.post(this.basicUrl + '/logout', this.httpOptions).toPromise()
      .then(value => this.router.navigate(['/login']))
      .catch(reason => console.log(reason));
  }

}
