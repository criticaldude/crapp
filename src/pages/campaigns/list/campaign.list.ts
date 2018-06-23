import { Component, } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { CampaignProvider, Campaign } from '../../../providers/campaignProvider';
import { CampaignDetailPage } from '../detail/campaign.detail';

@Component({
  selector: 'page-campaign.list',
  templateUrl: 'campaign.list.html'
})
export class CampaignListPage {

  public campaigns: Array<Campaign> = [];

  constructor(
    public navCtrl: NavController, 
    private provider: CampaignProvider,
    private events: Events) {
      this.refreshCampaigns();
  }

  private refreshCampaigns(){
    this.provider.getAllCampaigns().then(res => this.campaigns = res);
  }

  public openCampaign(campaign:Campaign){
    this.navCtrl.setRoot(CampaignDetailPage, {"campaign": campaign})
      .then(res => {
        this.events.publish("campaign:open");
      });
  }

}
