import { Component,Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-lista-get',
  templateUrl: './lista-get.component.html',
  styleUrls: ['./lista-get.component.css']
})
export class ListaGETComponent {
  @Input() userList: Array<User> = [];
}
