import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GlobalDataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-advertiser-profile',
  templateUrl: 'advertiser-profile.page.html',
  styleUrls: ['advertiser-profile.page.scss']
})
export class AdvertiserProfilePage {

  totalUsers: number;

  constructor(
    public alertController: AlertController,
    public globalDataService: GlobalDataService
  ) {
    this.totalUsers = this.globalDataService.totalUsers;
  }

  ionViewDidLoad() {
    this.totalUsers = this.globalDataService.totalUsers;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: `Send out ads to ${this.totalUsers} users?`,
      message: `Are you sure you want to send out ${this.totalUsers} ads to users? This action will cost 5 ETH`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Advertise',
          handler: () => {
            this.globalDataService.placeAd();
            this.globalDataService.removeDataRequests(1);
            this.globalDataService.clearUsers();
            this.ionViewDidLoad();
          }
        }
      ]
    });

    await alert.present();
  }

}
