import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Campaign } from '../../../providers/campaignProvider';

@Component({
    selector: 'page-campaign-detail',
    templateUrl: 'campaign.detail.html'
})
export class CampaignDetailPage{

    public campaign : Campaign;

    constructor(private params: NavParams){
        this.campaign = params.get("campaign");
    }

}