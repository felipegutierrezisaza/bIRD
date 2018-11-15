import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NidalPage } from '../pages/nidal/nidal';
import {HttpClientModule} from '@angular/common/http';
import { BibliotecaAvesPage } from '../pages/biblioteca-aves/biblioteca-aves';
import { ReconocerAvesPage } from '../pages/reconocer-aves/reconocer-aves';
import { TREPADORCAMPESTREPage } from '../pages/t-repadorcampestre/t-repadorcampestre';
import { BATARACARCAJADAPage } from '../pages/b-ataracarcajada/b-ataracarcajada';


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
    TREPADORCAMPESTREPage,
    BATARACARCAJADAPage
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
    TREPADORCAMPESTREPage,
    BATARACARCAJADAPage
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