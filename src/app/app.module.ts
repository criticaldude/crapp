import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http'; 

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CampaignListPage } from '../pages/campaigns/list/campaign.list';
import { CampaignDetailPage } from '../pages/campaigns/detail/campaign.detail';

//Providers
import { CampaignProvider } from '../providers/campaignProvider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CampaignListPage,
    CampaignDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CampaignListPage,
    CampaignDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CampaignProvider
  ]
})
export class AppModule {}
