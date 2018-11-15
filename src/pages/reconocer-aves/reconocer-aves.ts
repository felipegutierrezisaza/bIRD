import { Component } from '@angular/core';
import { NavController, Platform, LoadingController, ToastController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Media, MediaObject } from '@ionic-native/media';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-reconocer-aves',
  templateUrl: 'reconocer-aves.html'
})
export class ReconocerAvesPage {

  result:any = [];
  data: Observable<any>;
  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];
  /*private fileTransfer: FileTransferObject;  */


  constructor(public navCtrl: NavController, 
    public http: HttpClient, 
    private media: Media,
    private file: File,  
    private transfer: FileTransfer,  
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,  
    public platform: Platform) {  }

  uploadsound() {
    /* let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();*/
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "sound/mp3",
      headers: {}
    }
   
   fileTransfer.upload(this.filePath, 'https://www.nidal.online/recognotion/', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.presentToast("Sound uploaded successfully");
      this.result = JSON.parse(data.response);
     
      },

      (err) => {
      console.log(err);
      /* loader.dismiss();*/
      this.presentToast(err); 
      
     });


  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'


    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
 
    ionViewWillEnter() {
      this.getAudioList();
    }  
    
    getAudioList() {
      if(localStorage.getItem("audiolist")) {
        this.audioList = JSON.parse(localStorage.getItem("audiolist"));
        //console.log(this.audioList);
      }
    }
  
    startRecord() {
      if (this.platform.is('ios')) {
        this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.m4a';
        this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
        this.audio = this.media.create(this.filePath);
      } else if (this.platform.is('android')) {
        this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
        this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
        this.audio = this.media.create(this.filePath);
      }
      this.audio.startRecord();
      this.recording = true;
    }
  
    stopRecord() {
      this.audio.stopRecord();
      let data = { filename: this.fileName };
      this.audioList.push(data);
      localStorage.setItem("audiolist", JSON.stringify(this.audioList));
      this.recording = false;
      this.getAudioList();
    }
  
    playAudio(file,idx) {
      if (this.platform.is('ios')) {
        this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
        this.audio = this.media.create(this.filePath);
      } else if (this.platform.is('android')) {
        this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
        this.audio = this.media.create(this.filePath);
      }
      this.audio.play();
      this.audio.setVolume(0.8);
    }
  
    stopAudio() {
      this.audio.stop();
    }
  
}
