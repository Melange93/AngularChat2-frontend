import {Injectable} from '@angular/core';
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

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  signUp(user: User) {
    return this.httpClient.post<User>(this.basicUrl + '/newuser', user, this.httpOptions).toPromise()
      .then(value => console.log(value))
      .catch(reason => console.log(reason));
  }

  login(userCredentials: UserCredentials) {
    return this.httpClient.post(this.basicUrl + '/login', userCredentials, this.httpOptions).toPromise()
      .then(value => console.log(value))
      .catch(reason => console.log(reason));
  }

  logout() {
    const user = {
      userName: 'Logout',
      password: 'logout'
    };
    return this.httpClient.post(this.basicUrl + '/logout-user', user, this.httpOptions).toPromise()
      .then(value => this.router.navigate(['/login']))
      .catch(reason => console.log(reason));
  }

}
