import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CharacterProvider, Character } from '../../../providers/characterProvider';
import { Campaign } from '../../../providers/campaignProvider';

@Component({
  selector: 'page-campaignCharacters',
  templateUrl: 'campaign.characters.html'
})
export class CampaignCharactersPage {

  public characters : Array<Character> = [];

  constructor(
    public navCtrl: NavController, 
    private provider: CharacterProvider,
    private storage: Storage
  ) {
    this.loadCharacters();
  }

  public loadCharacters(){
    this.storage.get("campaign")
    .then((campaign:Campaign) => {
      console.log("campaign", campaign);
      return this.provider.getCharactersByCampaign(campaign.id);
    })
    .then(res => {
      console.log("characters", res);
      this.characters = res;
    });
  }

  public characterTapped($event, character){
    console.log("open character", character);
  }

}
