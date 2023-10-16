import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserGETAPIService {
  userList = new Array<User>();
  constructor() { }

  getAll(): Promise<any> {
    return fetch('https://jsonplaceholder.typicode.com/posts');
  }
}
