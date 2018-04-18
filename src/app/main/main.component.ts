import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { GitHubModel } from '../models/GitHubModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  gitHubDataList: Array<GitHubModel> = new Array<GitHubModel>();
  constructor(private _gitHubService: GitHubService) { }

  ngOnInit() {
  }

  onSearchUser(userName: string){
    this._gitHubService
      .getUser(userName)
      .subscribe(
        value =>{
          this.gitHubDataList.push(value);
        },
        error => {},
        () => {}
      );
  }

  deleteUser(gitHubUser: GitHubModel){
    this.gitHubDataList =this.gitHubDataList.filter(x => {
      return x.login !== gitHubUser.login;
    })
  }
}
