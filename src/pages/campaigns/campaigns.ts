import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignDetailPage } from './detail/campaign.detail';

@Component({
  selector: 'page-campaigns',
  templateUrl: 'campaigns.html'
})
export class CampaignsPage {

  constructor(public navCtrl: NavController) {

  }

}
