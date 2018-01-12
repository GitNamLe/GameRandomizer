import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameModalPage } from './game-modal';

@NgModule({
  declarations: [
    GameModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GameModalPage),
  ],
})
export class GameModalPageModule {}