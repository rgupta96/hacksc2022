import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from './api';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public httpClient: HttpClient) {

  }

  getRecentPosts(): any {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'accept-language':'en-eu',
      'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAOKNYwEAAAAAXP8XLzsVNgTH3s7TlPHAUsJyxFI%3DaMmhRy5xDOvWgYUZEz3Sk1Zj1iiQ0cW6W1nNPQHYP8xEHUvwdR'
    });
    let posts = this.httpClient.get(URL, {headers}).subscribe(p => posts = p);
    return posts;
  }
}
