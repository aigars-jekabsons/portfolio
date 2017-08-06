import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-squash',
  templateUrl: './squash.component.html',
  styleUrls: ['./squash.component.scss'],
  host: {'(document:keydown)': 'handleKeyboardEvents($event)'}
})
export class SquashComponent implements OnInit {

public key;
public playerposition = 460;
public ball_x = 510;
public ball_y = 485;
public ballspeed = 50;
public direction_y = 'up';
public direction_x = 'right';
public sidemovement = 5;
public SpeedLevel = 0;
public Points = 0;
public Seconds = 0;
public GameTriggered = false;
public Playagain = false;
public LevelTimer = 30000;
public playermovement = 20;
public playerspeed = 'normal';

public cherry_x = 0;
public cherry_y = 470;
public cherryamount = 0;

public FirstCherryIcon = 'black-cherry.png';
public SecondCherryIcon = 'black-cherry.png';
TriggerTheGame = () => {
  this.playerposition = 460;
  this.ball_x = 510;
  this.ball_y = 485;
  this.ballspeed = 50;
  this.direction_y = 'up';
  this.direction_x = 'right';
  this.sidemovement = 5;
  this.SpeedLevel = 0;
  this.Points = 0;
  this.Seconds = 0;
  this.GameTriggered = false;
  this.Playagain = false;
  this.playerspeed = 'normal';
  document.getElementById('player').style.left= '460px';
  document.getElementById('squashball').style.top = '485px'
  document.getElementById('squashball').style.left = '510px'
  this.GameTriggered = true;
  this.playermovement = 20;
  this.gameLevel();
  this.TimerforNextLevel();
  this.squashballMovement();
  this.cherryrandomlocation();
  this.cherrytopingmotion();
}



handleKeyboardEvents(event: KeyboardEvent) {
    this.key = event.which || event.keyCode;

    if (this.key == '65'){}

    if (this.key == '17' && this.playermovement == 40){this.playermovement = 20; this.playerspeed = 'normal';}
    else if (this.key == '17' && this.playermovement == 20){this.playermovement = 40; this.playerspeed = 'Fast';}
      if (this.key == '37' && this.playerposition !>= -20 && this.GameTriggered == true) {

            this.playerposition = this.playerposition - this.playermovement; 
            document.getElementById('player').style.left= ''+this.playerposition+'px';
      }
      else if (this.key == '39' && this.playerposition !<= 900 && this.GameTriggered == true) {
        this.playerposition = this.playerposition + this.playermovement;
        document.getElementById('player').style.left= ''+this.playerposition+'px';
      }
}

cherryrandomlocation = () => {
    this.cherry_x = Math.random() * (975 - 0) + 0;
    this.cherry_y = 470;
    document.getElementById('cherry').style.left = ''+this.cherry_x+'px'
    document.getElementById('cherry').style.bottom = ''+this.cherry_y+'px'
    document.getElementById('cherry').style.display = 'block'
}

cherrytopingmotion = () =>{
    this.cherry_y = this.cherry_y - 10;
    if (this.cherry_y == 0){
      if(this.cherry_x >= this.playerposition && this.cherry_x <= this.playerposition+90 ){
        this.Points = this.Points + 1000;
        this.cherryamount = this.cherryamount + 1;
        if (this.cherryamount == 1){ this.FirstCherryIcon = 'cherry.png'; }
        if (this.cherryamount == 2){ this.SecondCherryIcon = 'cherry.png';}
        if (this.cherryamount == 3){ 
          this.FirstCherryIcon = 'black-cherry.png';
          this.SecondCherryIcon = 'black-cherry.png';
          
          this.cherryamount = 0;
          this.ballspeed = this.ballspeed + 5
         }
        this.cherryrandomlocation();
      } else {
        this.cherryrandomlocation();
      }
    }
  if(this.ball_y == 520){
    return false;
  }
    document.getElementById('cherry').style.bottom = ''+this.cherry_y+'px';
    setTimeout(() => {this.cherrytopingmotion();}, 200);

}


squashballMovement = () => {
  this.Points = this.Points + this.SpeedLevel;
  if(this.ball_y == 0){this.direction_y = 'down'}
  if(this.ball_y == 485 && this.ball_x-50 <= this.playerposition+60 && this.ball_x-50 >= this.playerposition-50){
    if(this.ball_x-50 <= this.playerposition+25 && this.ball_x-50 >= this.playerposition-25){
      this.sidemovement = 3;
      }else{
        this.sidemovement = 5;
    }
    this.direction_y = 'up'
  }
  if(this.ball_y == 520){
    this.Playagain = true;
    return false;
  }

  if(this.direction_y == 'up'){this.ball_y = this.ball_y - 5;}
  if(this.direction_y == 'down'){this.ball_y = this.ball_y + 5;}

  if(this.ball_x >= 985){this.direction_x = 'left'}
  if(this.ball_x <= 0){this.direction_x = 'right'}

  if(this.direction_x == 'right'){this.ball_x = this.ball_x + this.sidemovement;}
  if(this.direction_x == 'left'){this.ball_x = this.ball_x - this.sidemovement;}

    document.getElementById('squashball').style.top = ''+this.ball_y+'px'
    document.getElementById('squashball').style.left = ''+this.ball_x+'px'
    setTimeout(() => {this.squashballMovement();}, this.ballspeed);
}
gameLevel = () => {
  this.Seconds = this.LevelTimer / 1000;
  if (this.ballspeed !== 10){
    this.ballspeed = this.ballspeed-5
    this.SpeedLevel = this.SpeedLevel + 1;

  }
  if(this.ball_y == 520){
    return false;
  }
  setTimeout(() => {this.gameLevel()}, this.LevelTimer);
}

TimerforNextLevel = () =>{
  this.Seconds = this.Seconds - 1;
  if(this.ball_y == 520){
    return false;
  }
  setTimeout(() => {this.TimerforNextLevel()}, 1000);
}

  constructor() {}

  ngOnInit() {
    if(window.innerWidth <= 1120){
      alert('This game requires Keyboards')
window.location.href="/"
    }
  }

}
