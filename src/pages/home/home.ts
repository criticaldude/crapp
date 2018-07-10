import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderColor } from '@ionic-native/header-color';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private headerColor: HeaderColor,private statusBar: StatusBar ) {
    this.headerColor.tint('#002d3f');
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#ffffff');
  }



}
