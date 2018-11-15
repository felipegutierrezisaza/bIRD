import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TREPADORCAMPESTREPage } from '../t-repadorcampestre/t-repadorcampestre';
import { BATARACARCAJADAPage } from '../b-ataracarcajada/b-ataracarcajada';

@Component({
  selector: 'page-biblioteca-aves',
  templateUrl: 'biblioteca-aves.html'
})
export class BibliotecaAvesPage {

  constructor(public navCtrl: NavController) {
  }
  goToTREPADORCAMPESTRE(params){
    if (!params) params = {};
    this.navCtrl.push(TREPADORCAMPESTREPage);
  }goToBATARACARCAJADA(params){
    if (!params) params = {};
    this.navCtrl.push(BATARACARCAJADAPage);
  }
}
