import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CampaignListPage } from '../pages/campaigns/list/campaign.list';
import { CampaignDetailPage } from '../pages/campaigns/detail/campaign.detail';
import { CampaignCharactersPage } from '../pages/characters/campaigns/campaign.characters';
import { Campaign } from '../providers/campaignProvider';
import { MonsterListPage } from '../pages/monsters/list/monster.list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  public isCampaignOpen: Boolean;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    private storage: Storage,
    private events: Events) {
      this.initializeApp();
      this.initializeEvents();
      this.pages = this.getBasePages();
      this.isCampaignOpen = false;
  }

  private getBasePages(){
    return [
      { title: 'Home', component: HomePage },
      { title: 'My campaigns', component: CampaignListPage },
      { title: 'My Characters', component: ListPage }
    ];
  }

  private getCampaignPages(){
    return [
      { title: 'Home', component: CampaignDetailPage },
      { title: 'Characters', component: CampaignCharactersPage },
      { title: 'Monsters', component: MonsterListPage },
      { title: 'Encounters', component: CampaignDetailPage },
      { title: 'Cities', component: CampaignDetailPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public closeCampaign(){
    this.nav.setRoot(HomePage).then(res => {
      setTimeout(()=>{
        this.events.publish("campaign:close");
      }, 1000);
      
    });
  }

  private initializeEvents(){
    this.subscribeOpenCampaignEvent();
    this.subscribeCloseCampaignEvent();
  }

  private subscribeOpenCampaignEvent(){
    this.events.subscribe('campaign:open', (data) => {
      console.log("set campaign", data);
      this.storage.set("campaign", data.campaign);
      this.pages = this.getCampaignPages();
      this.isCampaignOpen = true;
    });
  }

  private subscribeCloseCampaignEvent(){
    this.events.subscribe('campaign:close', () => {
      this.storage.remove("campaign");
      this.pages = this.getBasePages();
      this.isCampaignOpen = false;
    });
  }

}
