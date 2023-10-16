import { Component, OnInit } from '@angular/core';
import { UserGETAPIService } from 'src/app/services/user-getapi.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-btn-get',
  templateUrl: './btn-get.component.html',
  styleUrls: ['./btn-get.component.css'],
})
export class BtnGETComponent{
  userList = new Array<User>();
  constructor (private userService: UserGETAPIService) { }

  pedidoAPI() {
      this.userService.getAll()
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.userList = json;
      })
    .catch (error =>
      console.log(error))
  }
}
