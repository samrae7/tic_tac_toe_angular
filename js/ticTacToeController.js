angular.module('ticTacToeApp')
  .controller('TicTacToeController', TicTacToeController);

  function TicTacToeController() {

    this.playerMove = 'x';

    this.getNumber = function(num) {
    return new Array(num);  
    }

    this.winningCombinations = [ [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];

    this.xMoves = [];
    this.oMoves = [];

    this.startOver = function() {
      this.xMoves = [];
      this.oMoves = [];
    }

    this.winner = '';

    this.checkWin = function(movesArray){
      // loop over the array of winning combinations
      for (i = 0; i < this.winningCombinations.length; i++) {
        // if winCounter === 3 that means all 3 moves are winning combos and game is over!
        // reset the winCounter each time!
        winCounter = 0;
        // loop over each individual array
        for (var j = 0; j < this.winningCombinations[i].length; j++) {
          // if the number in winning combo array is === a number in moves array, add to winCounter
          if(movesArray.indexOf(this.winningCombinations[i][j]) !== -1){
            winCounter++;
          }
          if(winCounter === 3){

            return(true)
          }
        }
      }
    }

    this.assignMove = function(index){
      if ((this.checkWin(this.xMoves)||this.checkWin(this.oMoves))!==true) {

        console.log('assignmove')
        if (this.playerMove==='x') {
          this.xMoves.push(index)
          this.playerMove='o'
        }
        else if (this.playerMove==='o') {
          this.oMoves.push(index)
          this.playerMove='x'
        }
      }
    }

  }
