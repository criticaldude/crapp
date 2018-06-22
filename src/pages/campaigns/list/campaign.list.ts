import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignProvider, Campaign } from '../../../providers/campaignProvider';

@Component({
  selector: 'page-campaign.list',
  templateUrl: 'campaign.list.html'
})
export class CampaignListPage {

  public campaigns: Array<Campaign> = [];

  constructor(
    public navCtrl: NavController, 
    private provider: CampaignProvider) {
      this.refreshCampaigns();
  }

  private refreshCampaigns(){
    this.provider.getAllCampaigns().then(res => this.campaigns = res);
  }

}
