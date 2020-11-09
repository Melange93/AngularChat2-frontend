import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  userLoginEvents: EventEmitter<User> = new EventEmitter();

  constructor() { }

  public userLoginChanged(val: User): void {
    this.userLoginEvents.emit(val);
  }
}
