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

    this.insertMark = function() {
      console.log('mark')
      this.mark=true
    }

    this.assignMove = function(index){
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

    this.mark = false

  }
