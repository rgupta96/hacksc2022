import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  public userETH: number = 2;
  public totalUsers: number = 10590; // total users surfboard company advertises to
  public totalDataRequests: number = 10;
  public showAd: boolean = false;

  constructor() {

  }

  addToUserETH(eth: number) {
    this.userETH+=eth;
  }

  removeDataRequests(num: number) {
    this.totalDataRequests-=num;
  }

  placeAd() {
    this.showAd = true;
  }

  clearUsers() {
    this.totalUsers = 0;
  }


}
