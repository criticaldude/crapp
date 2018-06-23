import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

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
import { CharacterProvider } from '../providers/characterProvider';

const pages = [
  HomePage,
  ListPage,
  CampaignListPage,
  CampaignDetailPage
]

@NgModule({
  declarations: [
    MyApp,
    ...pages
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...pages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CampaignProvider,
    CharacterProvider
  ]
})
export class AppModule {}
