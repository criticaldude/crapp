import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class CampaignProvider{

    private map: Array<Campaign> = [
        {id:1, name:"Rise of Tiamat", party: "Critical Dudes"},
        {id:2, name:"Out of the Abyss", party: "Interax"}
    ];

    constructor(private http: HttpClient){}

    public getAllCampaigns():Promise<Array<Campaign>>{
        return new Promise(resolve => { resolve(this.map); });
    }

    public getCampaign(id: Number): Promise<Campaign>{
        return new Promise(resolve => {
            this.map.forEach(campaign => {
                if(campaign.id === id) resolve(campaign);
            });
            resolve(undefined);
        });
    }
}

export interface Campaign{
    id?:Number,
    name?: String,
    party?: String
}