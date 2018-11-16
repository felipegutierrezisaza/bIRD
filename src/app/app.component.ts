import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BibliotecaAvesPage } from '../pages/biblioteca-aves/biblioteca-aves';
import { AramidesCajaneusPage } from '../pages/aramides-cajaneus/aramides-cajaneus';
import { AulacorhynchusHaematopygusPage } from '../pages/aulacorhynchus-haematopygus/aulacorhynchus-haematopygus';
import { DryocopusLineatusPage } from '../pages/dryocopus-lineatus/dryocopus-lineatus';
import { GrallariaGuatimalensisPage } from '../pages/grallaria-guatimalensis/grallaria-guatimalensis';
import { HafferiaInmmaculataPage } from '../pages/hafferia-inmmaculata/hafferia-inmmaculata';
import { HenicorhineLeucostictaPage } from '../pages/henicorhine-leucosticta/henicorhine-leucosticta';
import { LepidocolaptesSouleyetiiPage } from '../pages/lepidocolaptes-souleyetii/lepidocolaptes-souleyetii';
import { MegascopsCholibaPage } from '../pages/megascops-choliba/megascops-choliba';
import { MelanerpesFormicivorusPage } from '../pages/melanerpes-formicivorus/melanerpes-formicivorus';
import { MomotusAequatorialisPage } from '../pages/momotus-aequatorialis/momotus-aequatorialis';
import { MyiodynastesMaculatusPage } from '../pages/myiodynastes-maculatus/myiodynastes-maculatus';
import { NyctidromusAlbicollisPage } from '../pages/nyctidromus-albicollis/nyctidromus-albicollis';
import { PheugopediusSclateriPage } from '../pages/pheugopedius-sclateri/pheugopedius-sclateri';
import { PionusMenstruusPage } from '../pages/pionus-menstruus/pionus-menstruus';
import { PitangusSulphuratusPage } from '../pages/pitangus-sulphuratus/pitangus-sulphuratus';
import { RupornisMagnirostrisPage } from '../pages/rupornis-magnirostris/rupornis-magnirostris';
import { SynallaxisAzaraePage } from '../pages/synallaxis-azarae/synallaxis-azarae';
import { SynallaxisBrachyuraPage } from '../pages/synallaxis-brachyura/synallaxis-brachyura';
import { ThamnophilusAtrinuchaPage } from '../pages/thamnophilus-atrinucha/thamnophilus-atrinucha';
import { ThamnophilusMultistriatusPage } from '../pages/thamnophilus-multistriatus/thamnophilus-multistriatus';
import { TurdusIgnobilisPage } from '../pages/turdus-ignobilis/turdus-ignobilis';
import { VanellusChilensisPage } from '../pages/vanellus-chilensis/vanellus-chilensis';
import { XiphorhynchusSusurransPage } from '../pages/xiphorhynchus-susurrans/xiphorhynchus-susurrans';
import { AcercaDeNidalPage } from '../pages/Acerca_De_Nidal/Acerca_De_Nidal';
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
  }goToAramidesCajaneus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AramidesCajaneusPage);
  }goToAulacorhynchusHaematopygus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AulacorhynchusHaematopygusPage);
  }goToDryocopusLineatus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DryocopusLineatusPage);
  }goToGrallariaGuatimalensis(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GrallariaGuatimalensisPage);
  }goToHafferiaInmmaculata(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HafferiaInmmaculataPage);
  }goToHenicorhineLeucosticta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HenicorhineLeucostictaPage);
  }goToLepidocolaptesSouleyetii(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LepidocolaptesSouleyetiiPage);
  }goToMegascopsCholiba(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MegascopsCholibaPage);
  }goToMelanerpesFormicivorus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MelanerpesFormicivorusPage);
  }goToMomotusAequatorialis(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MomotusAequatorialisPage);
  }goToMyiodynastesMaculatus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MyiodynastesMaculatusPage);
  }goToNyctidromusAlbicollis(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NyctidromusAlbicollisPage);
  }goToPheugopediusSclateri(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PheugopediusSclateriPage);
  }goToPionusMenstruus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PionusMenstruusPage);
  }goToPitangusSulphuratus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PitangusSulphuratusPage);
  }goToRupornisMagnirostris(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RupornisMagnirostrisPage);
  }goToSynallaxisAzarae(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SynallaxisAzaraePage);
  }goToSynallaxisBrachyura(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SynallaxisBrachyuraPage);
  }goToThamnophilusAtrinucha(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ThamnophilusAtrinuchaPage);
  }goToThamnophilusMultistriatus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ThamnophilusMultistriatusPage);
  }goToTurdusIgnobilis(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TurdusIgnobilisPage);
  }goToVanellusChilensis(params){
    if (!params) params = {};
    this.navCtrl.setRoot(VanellusChilensisPage);
  }goToXiphorhynchusSusurrans(params){
    if (!params) params = {};
    this.navCtrl.setRoot(XiphorhynchusSusurransPage);
  }goToAcercaDeNidal(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AcercaDeNidalPage);
  }goToReconocerAves(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReconocerAvesPage);
  }
}
