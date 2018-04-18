import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { GitHubModel } from '../models/GitHubModel';

@Injectable()
export class GitHubService {

  private _getUsers: string = 'https://api.github.com/users';
  constructor(private _http: HttpClient) { }

  getUser(userName: string) {
    return this._http
        .get(`${this._getUsers}/${userName}`, {responseType: 'json'})
        .map((x: any) => {
          var gitHubObj = new GitHubModel();
          gitHubObj.login = x.login;
          gitHubObj.avatar_url = x.avatar_url;
          gitHubObj.name = x.name;
          gitHubObj.followers = x.followers;
          gitHubObj.following = x.following;
          return gitHubObj;
        })
        .catch(this.handleError);
  }

  handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json() || 'Server error');
  }

}
