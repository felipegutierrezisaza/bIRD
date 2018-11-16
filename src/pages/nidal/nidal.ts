import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BibliotecaAvesPage } from '../biblioteca-aves/biblioteca-aves';
import { AramidesCajaneusPage } from '../aramides-cajaneus/aramides-cajaneus';
import { AulacorhynchusHaematopygusPage } from '../aulacorhynchus-haematopygus/aulacorhynchus-haematopygus';
import { DryocopusLineatusPage } from '../dryocopus-lineatus/dryocopus-lineatus';
import { GrallariaGuatimalensisPage } from '../grallaria-guatimalensis/grallaria-guatimalensis';
import { HafferiaInmmaculataPage } from '../hafferia-inmmaculata/hafferia-inmmaculata';
import { HenicorhineLeucostictaPage } from '../henicorhine-leucosticta/henicorhine-leucosticta';
import { LepidocolaptesSouleyetiiPage } from '../lepidocolaptes-souleyetii/lepidocolaptes-souleyetii';
import { MegascopsCholibaPage } from '../megascops-choliba/megascops-choliba';
import { MelanerpesFormicivorusPage } from '../melanerpes-formicivorus/melanerpes-formicivorus';
import { MomotusAequatorialisPage } from '../momotus-aequatorialis/momotus-aequatorialis';
import { MyiodynastesMaculatusPage } from '../myiodynastes-maculatus/myiodynastes-maculatus';
import { NyctidromusAlbicollisPage } from '../nyctidromus-albicollis/nyctidromus-albicollis';
import { PheugopediusSclateriPage } from '../pheugopedius-sclateri/pheugopedius-sclateri';
import { PionusMenstruusPage } from '../pionus-menstruus/pionus-menstruus';
import { PitangusSulphuratusPage } from '../pitangus-sulphuratus/pitangus-sulphuratus';
import { RupornisMagnirostrisPage } from '../rupornis-magnirostris/rupornis-magnirostris';
import { SynallaxisAzaraePage } from '../synallaxis-azarae/synallaxis-azarae';
import { SynallaxisBrachyuraPage } from '../synallaxis-brachyura/synallaxis-brachyura';
import { ThamnophilusAtrinuchaPage } from '../thamnophilus-atrinucha/thamnophilus-atrinucha';
import { ThamnophilusMultistriatusPage } from '../thamnophilus-multistriatus/thamnophilus-multistriatus';
import { TurdusIgnobilisPage } from '../turdus-ignobilis/turdus-ignobilis';
import { VanellusChilensisPage } from '../vanellus-chilensis/vanellus-chilensis';
import { XiphorhynchusSusurransPage } from '../xiphorhynchus-susurrans/xiphorhynchus-susurrans';
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
  }goToAramidesCajaneus(params){
    if (!params) params = {};
    this.navCtrl.push(AramidesCajaneusPage);
  }goToAulacorhynchusHaematopygus(params){
    if (!params) params = {};
    this.navCtrl.push(AulacorhynchusHaematopygusPage);
  }goToDryocopusLineatus(params){
    if (!params) params = {};
    this.navCtrl.push(DryocopusLineatusPage);
  }goToGrallariaGuatimalensis(params){
    if (!params) params = {};
    this.navCtrl.push(GrallariaGuatimalensisPage);
  }goToHafferiaInmmaculata(params){
    if (!params) params = {};
    this.navCtrl.push(HafferiaInmmaculataPage);
  }goToHenicorhineLeucosticta(params){
    if (!params) params = {};
    this.navCtrl.push(HenicorhineLeucostictaPage);
  }goToLepidocolaptesSouleyetii(params){
    if (!params) params = {};
    this.navCtrl.push(LepidocolaptesSouleyetiiPage);
  }goToMegascopsCholiba(params){
    if (!params) params = {};
    this.navCtrl.push(MegascopsCholibaPage);
  }goToMelanerpesFormicivorus(params){
    if (!params) params = {};
    this.navCtrl.push(MelanerpesFormicivorusPage);
  }goToMomotusAequatorialis(params){
    if (!params) params = {};
    this.navCtrl.push(MomotusAequatorialisPage);
  }goToMyiodynastesMaculatus(params){
    if (!params) params = {};
    this.navCtrl.push(MyiodynastesMaculatusPage);
  }goToNyctidromusAlbicollis(params){
    if (!params) params = {};
    this.navCtrl.push(NyctidromusAlbicollisPage);
  }goToPheugopediusSclateri(params){
    if (!params) params = {};
    this.navCtrl.push(PheugopediusSclateriPage);
  }goToPionusMenstruus(params){
    if (!params) params = {};
    this.navCtrl.push(PionusMenstruusPage);
  }goToPitangusSulphuratus(params){
    if (!params) params = {};
    this.navCtrl.push(PitangusSulphuratusPage);
  }goToRupornisMagnirostris(params){
    if (!params) params = {};
    this.navCtrl.push(RupornisMagnirostrisPage);
  }goToSynallaxisAzarae(params){
    if (!params) params = {};
    this.navCtrl.push(SynallaxisAzaraePage);
  }goToSynallaxisBrachyura(params){
    if (!params) params = {};
    this.navCtrl.push(SynallaxisBrachyuraPage);
  }goToThamnophilusAtrinucha(params){
    if (!params) params = {};
    this.navCtrl.push(ThamnophilusAtrinuchaPage);
  }goToThamnophilusMultistriatus(params){
    if (!params) params = {};
    this.navCtrl.push(ThamnophilusMultistriatusPage);
  }goToTurdusIgnobilis(params){
    if (!params) params = {};
    this.navCtrl.push(TurdusIgnobilisPage);
  }goToVanellusChilensis(params){
    if (!params) params = {};
    this.navCtrl.push(VanellusChilensisPage);
  }goToXiphorhynchusSusurrans(params){
    if (!params) params = {};
    this.navCtrl.push(XiphorhynchusSusurransPage);
  }goToReconocerAves(params){
    if (!params) params = {};
    this.navCtrl.push(ReconocerAvesPage);
  }
}
