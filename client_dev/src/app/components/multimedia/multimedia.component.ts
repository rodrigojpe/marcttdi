import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {
   public title;
   player: YT.Player;
   public id: String = 'jMCoC8V35rA';
   public id2: String = 'RPDg6u-A474';
   public id3: String = 'A4XWhkk777Y';
   public id4: String = 'JXofi-H_YGA';

  constructor() { }

  ngOnInit() {
    // this.player.destroy();
  }
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
    // console.log(this.id);

  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
