import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Campaign } from '../../../providers/campaignProvider';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-campaign-detail',
    templateUrl: 'campaign.detail.html'
})
export class CampaignDetailPage{

    public campaign : Campaign = {};

    constructor(private params: NavParams, private storage: Storage){
        this.storage.get("campaign").then(campaign => {
            this.campaign = params.get("campaign");
        });
    }

}