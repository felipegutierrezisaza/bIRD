import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BibliotecaAvesPage } from '../pages/biblioteca-aves/biblioteca-aves';
import { TREPADORCAMPESTREPage } from '../pages/t-repadorcampestre/t-repadorcampestre';
import { BATARACARCAJADAPage } from '../pages/b-ataracarcajada/b-ataracarcajada';
import { ReconocerAvesPage } from '../pages/reconocer-aves/reconocer-aves';


import { NidalPage } from '../pages/nidal/nidal';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = NidalPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToNidal(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NidalPage);
  }goToBibliotecaAves(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BibliotecaAvesPage);
  }goToTREPADORCAMPESTRE(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TREPADORCAMPESTREPage);
  }goToBATARACARCAJADA(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BATARACARCAJADAPage);
  }goToReconocerAves(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReconocerAvesPage);
  }
}
