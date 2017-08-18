import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss'],
   host: {'(document:keydown)': 'handleKeyboardEvents($event)'}
})
export class SnakeComponent implements OnInit {
  public selectmode = true;
  public GameOver = false;
  public enableWalls;

  public snakeSpeed;
  public score;
  public scoremultiplier;
  public foodXcord;
  public foodYcord;
  public pickedFood;
  public Direction;
  public SnakeHead_x;
  public SnakeHead_y;
  public LockMovement;
  public snakeBody = [
    [7,6,'left'],
    [8,6,'left'],
    [9,6,'left'],
    [10,6,'left']
  ]
  public snakeBodyLength = 4;
  public bodyXloaction:any;
  public bodyYloaction:any;

  public TempBodyXlocation:any;
  public TempBodyYlocation:any;
  public TempBodyDirection;

  public breakPointCounter;
  public snakeBreakPoints;
  public SnakeGrid;
  public key;

classic = (wallstatus) =>{
  this.enableWalls = wallstatus;
  this.GameOver = false;
  this.snakeSpeed = 200;
  this.score = 0;
  this.scoremultiplier = 1;
  this.pickedFood = false;
  this.Direction = 'left';
  this.SnakeHead_x = 16;
  this.SnakeHead_y = 6;
  this.LockMovement = false;
  this.snakeBody = [
    [17,6,'left'],
    [18,6,'left'],
    [19,6,'left'],
    [20,6,'left']
  ]
  this.snakeBodyLength = 4;
  this.breakPointCounter = 0;
  this.snakeBreakPoints = [];
  this.SnakeGrid = [
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
  [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]
];
  this.snakeMovement();
  this.generateFood();
  this.selectmode = false;

  for (let i = 0; i < this.snakeBodyLength; i++) { 
  let bodyXloaction = this.snakeBody[i][0]
  let bodyYloaction = this.snakeBody[i][1]
  this.SnakeGrid[bodyYloaction][bodyXloaction] = 1;


}

    this.SnakeGrid[this.SnakeHead_y][this.SnakeHead_x] = 2;
}
handleKeyboardEvents(event: KeyboardEvent) {
    this.key = event.which || event.keyCode;
    if (this.key == '38' && this.Direction !== 'down' && this.LockMovement == false){
      //up
      this.LockMovement = true;
      this.Direction = 'up';
      this.registerBreakPoint();
      setTimeout(() => {this.LockMovement = false;}, this.snakeSpeed);
    }
    if (this.key == '40' && this.Direction !== 'up' && this.LockMovement == false){
      //down
       this.LockMovement = true;
      this.Direction = 'down';
      this.registerBreakPoint();
      setTimeout(() => {this.LockMovement = false;}, this.snakeSpeed);
    }
    if (this.key == '37' && this.Direction !== 'right' && this.LockMovement == false){
      //left
      this.LockMovement = true;
      this.Direction = 'left';
      this.registerBreakPoint();
      setTimeout(() => {this.LockMovement = false;}, this.snakeSpeed);
    }
    if (this.key == '39' && this.Direction !== 'left' && this.LockMovement == false ){
      //right
      this.LockMovement = true;
      this.Direction = 'right';
      this.registerBreakPoint();
      setTimeout(() => {this.LockMovement = false;}, this.snakeSpeed);
    }
}

snakeMovement = () => {
  this.SnakeGrid[this.SnakeHead_y][this.SnakeHead_x] = 0;
  if (this.Direction == 'up'){this.SnakeHead_y = this.SnakeHead_y - 1;}
  if (this.Direction == 'down'){this.SnakeHead_y = this.SnakeHead_y + 1;}
  if (this.Direction == 'left'){this.SnakeHead_x = this.SnakeHead_x - 1;}
  if (this.Direction == 'right'){this.SnakeHead_x = this.SnakeHead_x + 1;}
if(this.enableWalls == true){
  if(this.SnakeHead_x == -1 || this.SnakeHead_x == 22 || this.SnakeHead_y == -1 || this.SnakeHead_y == 12){
    this.gameOver();
    return false;
  }
} else if(this.enableWalls == false){
  if(this.SnakeHead_x == -1){this.SnakeHead_x = 21}
  if(this.SnakeHead_x == 22){this.SnakeHead_x = 0}
  if(this.SnakeHead_y == -1){this.SnakeHead_y = 11}
  if(this.SnakeHead_y == 12){this.SnakeHead_y = 0}
}

for (let i = 0; i < this.snakeBodyLength; i++) {
  this.bodyXloaction = this.snakeBody[i][0]
  this.bodyYloaction = this.snakeBody[i][1]
  if(this.SnakeHead_x == this.bodyXloaction && this.SnakeHead_y == this.bodyYloaction){
    this.gameOver();
    return false;
  }
}


  this.SnakeGrid[this.SnakeHead_y][this.SnakeHead_x] = 2;
  if (this.SnakeHead_x == this.foodXcord && this.SnakeHead_y == this.foodYcord){
    this.snakeBody.push([this.TempBodyXlocation, this.TempBodyYlocation, this.snakeBody[this.snakeBodyLength-1][2]])
    this.snakeBodyLength = this.snakeBodyLength + 1;
    this.generateFood();
    if (this.snakeSpeed !== 100){
      this.snakeSpeed = this.snakeSpeed - 5;
      this.scoremultiplier = this.scoremultiplier + 1;
    }
    this.score = this.score + this.scoremultiplier;
  }
  this.snakeBodyMovement();
  setTimeout(() => {this.snakeMovement();}, this.snakeSpeed);
}

registerBreakPoint = () =>{
  this.snakeBreakPoints.push([this.SnakeHead_x, this.SnakeHead_y, this.Direction])
  this.breakPointCounter = this.breakPointCounter + 1;
}

snakeBodyMovement = () => {
  this.TempBodyXlocation = this.snakeBody[this.snakeBodyLength-1][0]
  this.TempBodyYlocation = this.snakeBody[this.snakeBodyLength-1][1]
  this.TempBodyDirection = this.snakeBody[this.snakeBodyLength-1][2]

for (let i = 0; i < this.snakeBodyLength; i++) {
  this.bodyXloaction = this.snakeBody[i][0]
  this.bodyYloaction = this.snakeBody[i][1]
 
  this.SnakeGrid[this.bodyYloaction][this.bodyXloaction] = 0;
}

for (let i = 0; i < this.snakeBodyLength; i++) {
  this.bodyXloaction = this.snakeBody[i][0]
  this.bodyYloaction = this.snakeBody[i][1]

  for (let inter = 0; inter < this.breakPointCounter; inter++) {
    let breakPointX = this.snakeBreakPoints[inter][0]
    let breakPointY = this.snakeBreakPoints[inter][1]
      if (breakPointX == this.bodyXloaction && breakPointY == this.bodyYloaction){

        this.snakeBody[i][2] = this.snakeBreakPoints[inter][2]
      }
  }

  if (this.snakeBody[i][2] == 'left'){this.bodyXloaction = this.bodyXloaction-1;}
  if (this.snakeBody[i][2] == 'right'){this.bodyXloaction = this.bodyXloaction+1;}
  if (this.snakeBody[i][2] == 'up'){this.bodyYloaction = this.bodyYloaction-1;}  
  if (this.snakeBody[i][2] == 'down'){this.bodyYloaction = this.bodyYloaction+1;}

  if (this.snakeBreakPoints.length !== 0 ){
        if (this.snakeBody[this.snakeBodyLength-1][0] == this.snakeBreakPoints[0][0]  && this.snakeBody[this.snakeBodyLength-1][1] == this.snakeBreakPoints[0][1]){
          this.snakeBody[this.snakeBodyLength-1][2] = this.snakeBreakPoints[0][2]
          this.snakeBreakPoints.splice(0, 1);
          this.breakPointCounter = this.breakPointCounter - 1;
        }
  }


if(this.enableWalls == false){
  if(this.bodyXloaction == -1){this.bodyXloaction = 21}
  if(this.bodyXloaction == 22){this.bodyXloaction = 0}
  if(this.bodyYloaction == -1){this.bodyYloaction = 11}
  if(this.bodyYloaction == 12){this.bodyYloaction = 0}
}


  this.snakeBody[i][0] = this.bodyXloaction;
  this.snakeBody[i][1] = this.bodyYloaction; 
 
  this.SnakeGrid[this.bodyYloaction][this.bodyXloaction] = 1;


}
}


generateFood = () => {
   this.foodXcord = Math.floor(Math.random() * (21 - 0 + 1)) + 0;
   this.foodYcord = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
   this.SnakeGrid[this.foodYcord][this.foodXcord] = 3;
   for (let i = 0; i < this.snakeBodyLength; i++) {
     if (this.snakeBody[i][0] == this.foodXcord && this.snakeBody[i][1] == this.foodYcord){
        this.generateFood();
        console.log('food on snake but fixed');
     }
   }
   
}

gameOver = () => {
  this.selectmode = true;
  this.GameOver = true;
  return false;
}

  constructor() {   }

  ngOnInit() {
    if(window.innerWidth <= 1120){
      alert('This game requires Keyboards')
      window.location.href="/"
    }
  }

}
