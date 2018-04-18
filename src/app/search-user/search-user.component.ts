import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  @Output() onSearchUser = new EventEmitter<string>();
  userName: string;

  constructor() { }

  ngOnInit() {
  }

  onSearchClick(){
    this.onSearchUser.emit(this.userName);
  }

}
