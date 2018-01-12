import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-game-modal',
  templateUrl: 'game-modal.html',
})
export class GameModalPage {
  rand = 0;
  beerGames = [{
                  name: 'Thunderstruck',
                  desc: 'In this game, everyone sits in a circle and listens to the song “Thunderstruck” by ACDC. When they first start singing “thunder,” the first person starts drinking. When they stop saying “thunder,” the first person puts down their drink and the next person starts drinking. Good luck and make sure to drink some water after.'
                },
                {
                  name: 'Flip Cup',
                  desc: 'Starting at one end of the table, the first member of each team chugs his beer. As soon as the cup is empty, the player puts it face up on the edge of the table and—using only one hand—tries to flip it over so it lands face down. Make sure a little bit of the cup is hanging off the end of the table.',
                },
                {
                  name: 'Never Have I Ever',
                  desc: 'Then, the first player says a simple statement starting with "Never have I ever". Anyone who at some point in their lives has done the action that the first player says, must drink. Play then continues around the circle, and the next person makes a statement.',
                },
                {
                  name: 'Quarters',
                  desc: 'To play, players simply take turns trying to bounce the quarter off of the table into the glass. If the attempt is successful, the player gets to give the person of their choice a drink. If you make 3 attempts in a row, you get to make a rule.',
                },
                {
                  name: 'Shot Gun Relay',
                  desc: 'Each shot-gunner will have a beer placed in front of them on a table. On the refs signal, the first player will key the beer. When the first player finishes, they will hand the key to the next player in order for them to key their beer.',
                },
                {
                  name: 'If You Know What I Mean',
                  desc: 'players take turns making vaguely suggestive remarks and ending it with "if you know what I mean". First person who cannot think of a sentence drinks.',
                },
                {
                  name: 'Wizard Staff',
                  desc: 'As players drinks, their current can of beer is taped to the top of their previous cans before being opened.',
                }
              ]

  constructor(private viewCtrl: ViewController, public navParams: NavParams) {
  
  }

  onDismiss(){
    this.viewCtrl.dismiss({data: 'datty'});
  }

  ionViewDidLoad(){
    this.rand = Math.floor(Math.random() * Math.floor(7));
  }
}
