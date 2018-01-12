import { Component } from '@angular/core';
import { ModalController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modalCtrl: ModalController, private popoverCtrl: PopoverController) {

  }

  onOpenSettings(event){
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.present({
      ev: event
    });
  }

  onOpenGames(){
    const modal = this.modalCtrl.create('GameModalPage');
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data);
    })
  }
}
