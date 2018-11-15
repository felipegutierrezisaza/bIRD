import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BibliotecaAvesPage } from '../biblioteca-aves/biblioteca-aves';
import { TREPADORCAMPESTREPage } from '../t-repadorcampestre/t-repadorcampestre';
import { BATARACARCAJADAPage } from '../b-ataracarcajada/b-ataracarcajada';
import { ReconocerAvesPage } from '../reconocer-aves/reconocer-aves';

@Component({
  selector: 'page-nidal',
  templateUrl: 'nidal.html'
})
export class NidalPage {

  constructor(public navCtrl: NavController) {
  }
  goToBibliotecaAves(params){
    if (!params) params = {};
    this.navCtrl.push(BibliotecaAvesPage);
  }goToTREPADORCAMPESTRE(params){
    if (!params) params = {};
    this.navCtrl.push(TREPADORCAMPESTREPage);
  }goToBATARACARCAJADA(params){
    if (!params) params = {};
    this.navCtrl.push(BATARACARCAJADAPage);
  }goToReconocerAves(params){
    if (!params) params = {};
    this.navCtrl.push(ReconocerAvesPage);
  }
}
