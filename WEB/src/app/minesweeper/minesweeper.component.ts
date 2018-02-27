import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss']
})
export class MinesweeperComponent implements OnInit {
  private mineSweeperGrid = [
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0]
    ];
  private startTheGame = () => {
    this.generateMines(10)
  }
  private gameOver = () =>{

  }
  private generateMines = (mineCount) =>{
    for (let i = 0; mineCount > i; i++){
      let xCord = Math.floor((Math.random()*10))
      let yCord = Math.floor((Math.random()*10))
      if (this.mineSweeperGrid[yCord][xCord] == 0){
        this.mineSweeperGrid[yCord][xCord] = 1;
      } else {i--}
    }
  }
  private checkForMines = (x,y) =>{
    let mineCounter = 0;

    if (this.mineSweeperGrid[y][x] == 1) {
      this.gameOver()
    } else{
      for (let g = -1; 2 > g; g++){
        for (let i = -1; 2 > i; i++){
          if (this.mineSweeperGrid[y+i] !== undefined && this.mineSweeperGrid[y+i][x+g] !== undefined && this.mineSweeperGrid[y+i][x+g] == 1){ mineCounter++}
        }
      }
      console.log(mineCounter)
      document.getElementById("carrot-"+x+y).innerText=mineCounter.toString(); 
  }
      
}
  constructor() { }

  ngOnInit() {
  }

}
