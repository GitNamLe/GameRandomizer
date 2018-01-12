import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(private viewCtrl: ViewController) {
  }

  onClose(){
    this.viewCtrl.dismiss();
  }

}
