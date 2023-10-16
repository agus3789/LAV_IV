import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList = new Array<User>();
  
  constructor() { }

  add(user:User) {
    this.userList.push(user);
  }

  getUsers() {
    return this.userList;
  }

  getByID(userId:number) {
    return this.userList.find((user) => {
      user.userId = userId;
    });
  }
}
