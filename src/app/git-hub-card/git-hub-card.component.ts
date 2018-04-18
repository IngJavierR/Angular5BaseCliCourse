import { Component, OnInit, Input } from '@angular/core';
import { GitHubModel } from '../models/GitHubModel';

@Component({
  selector: 'app-git-hub-card',
  templateUrl: './git-hub-card.component.html',
  styleUrls: ['./git-hub-card.component.css']
})
export class GitHubCardComponent implements OnInit {

  @Input('github-data') gitHubData: GitHubModel
  //gitHubData: GitHubModel = new GitHubModel();
  constructor() {
    /*this.gitHubData.avatar_url = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png";
    this.gitHubData.followers = 0;
    this.gitHubData.following = 0;
    this.gitHubData.login = "IngJavierR";
    this.gitHubData.name = "Javier Rodríguez";*/
  }

  ngOnInit() {
  }

}
