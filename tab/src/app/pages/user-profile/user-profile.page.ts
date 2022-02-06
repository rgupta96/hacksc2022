import { Component } from '@angular/core';
import { GlobalDataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.page.html',
  styleUrls: ['user-profile.page.scss']
})
export class UserProfilePage {

  userETH: number;
  totalDataRequests: number;

  constructor(public globalDataService: GlobalDataService) {
    this.updateETH();
    this.updateTotalDataRequests();
  }

  updateETH() {
    this.userETH = this.globalDataService.userETH;
  }

  updateTotalDataRequests() {
    this.totalDataRequests = this.globalDataService.totalDataRequests;
  }
}
