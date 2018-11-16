import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { NidalPage } from '../pages/nidal/nidal';
import { BibliotecaAvesPage } from '../pages/biblioteca-aves/biblioteca-aves';
import { ReconocerAvesPage } from '../pages/reconocer-aves/reconocer-aves';
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
import { ThamnophilusMultistriatusPage } from '../pages/thamnophilus-multistriatus/thamnophilus-multistriatus';
import { ThamnophilusAtrinuchaPage } from '../pages/thamnophilus-atrinucha/thamnophilus-atrinucha';
import { TurdusIgnobilisPage } from '../pages/turdus-ignobilis/turdus-ignobilis';
import { VanellusChilensisPage } from '../pages/vanellus-chilensis/vanellus-chilensis';
import { XiphorhynchusSusurransPage } from '../pages/xiphorhynchus-susurrans/xiphorhynchus-susurrans';
import { AcercaDeNidalPage } from '../pages/Acerca_De_Nidal/Acerca_De_Nidal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { NativeAudio } from '@ionic-native/native-audio';


@NgModule({
  declarations: [
    MyApp,
    NidalPage,
    BibliotecaAvesPage,
    ReconocerAvesPage,
    AramidesCajaneusPage,
    AulacorhynchusHaematopygusPage,
    DryocopusLineatusPage,
    GrallariaGuatimalensisPage,
    HafferiaInmmaculataPage,
    HenicorhineLeucostictaPage,
    LepidocolaptesSouleyetiiPage,
    MegascopsCholibaPage,
    MelanerpesFormicivorusPage,
    MomotusAequatorialisPage,
    MyiodynastesMaculatusPage,
    NyctidromusAlbicollisPage,
    PheugopediusSclateriPage,
    PionusMenstruusPage,
    PitangusSulphuratusPage,
    RupornisMagnirostrisPage,
    SynallaxisAzaraePage,
    SynallaxisBrachyuraPage,
    ThamnophilusMultistriatusPage,
    ThamnophilusAtrinuchaPage,
    TurdusIgnobilisPage,
    VanellusChilensisPage,
    XiphorhynchusSusurransPage,
    AcercaDeNidalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
MyApp,
    NidalPage,
    BibliotecaAvesPage,
    ReconocerAvesPage,
    AramidesCajaneusPage,
    AulacorhynchusHaematopygusPage,
    DryocopusLineatusPage,
    GrallariaGuatimalensisPage,
    HafferiaInmmaculataPage,
    HenicorhineLeucostictaPage,
    LepidocolaptesSouleyetiiPage,
    MegascopsCholibaPage,
    MelanerpesFormicivorusPage,
    MomotusAequatorialisPage,
    MyiodynastesMaculatusPage,
    NyctidromusAlbicollisPage,
    PheugopediusSclateriPage,
    PionusMenstruusPage,
    PitangusSulphuratusPage,
    RupornisMagnirostrisPage,
    SynallaxisAzaraePage,
    SynallaxisBrachyuraPage,
    ThamnophilusMultistriatusPage,
    ThamnophilusAtrinuchaPage,
    TurdusIgnobilisPage,
    VanellusChilensisPage,
    XiphorhynchusSusurransPage,
    AcercaDeNidalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Media,
    FileTransfer,
    FileTransferObject,
    NativeAudio,
    File
  ]
})
export class AppModule {}