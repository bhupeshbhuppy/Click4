//console.log("connected")
var player1 = prompt("Player One: Enter Your Name , you will be Blue");
var player2 = prompt("Player Two: Enter Your Name , you will be Red");
var numRows = $.map($('tr'), function(n, i) { return i; }).length;
var numColumn = $.map($('button'), function(n, i) { return i; }).length/numRows;
var chance = true;
var rowtofill = [numRows-1,numRows-1,numRows-1,numRows-1,numRows-1,numRows-1,numRows-1];
//var rowtofill = [5,5,5,5,5,5,5];
$('h3').text(player1 + ' : it is your turn, please pick a column to drop your blue chip.');
$('td').click(function() {
    var myCol = parseInt($(this).index());
    var $tr = $(this).closest('tr');
    var myRow = $tr.index();
    console.log(myCol +" + " +myRow);
    console.log(myCol+myRow*numColumn)
    if(chance == true){
      $('h3').text(player2 + ' : it is your turn, please pick a column to drop your red chip.');
      $('button').eq(myCol+rowtofill[myCol]*numColumn).css({backgroundColor: "Blue"});
      checkHorizontalWin();
      rowtofill[myCol]--
      chance = false;
      }
    else {
      $('h3').text(player1 + ' : it is your turn, please pick a column to drop your blue chip.');
      $('button').eq(myCol+rowtofill[myCol]*numColumn).css({backgroundColor: "Red"});
      checkHorizontalWin();
      rowtofill[myCol]--
      chance = true;
    }
  });

  function checkHorizontalWin(){
    for(i = 0 ; i<numRows;i++){
      for(j=0;j<numColumn-3; j++){
        var one = getBGColor(i,j)
        var two = getBGColor(i,j+1)
        var three = getBGColor(i,j+2)
        var four = getBGColor(i,j+3)
        if(one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined){
          if(chance == true){
            $('h3').fadeOut('fast');
            $('h2').fadeOut('fast');
            $('h1').text(player1+" has won! Refresh your browser to play again!").css("fontSize", "50px")
          }
          else {
            $('h3').fadeOut('fast');
            $('h2').fadeOut('fast');
            $('h1').text(player2+" has won! Refresh your browser to play again!").css("fontSize", "50px")
          }
        }
      }
    }
  }
function checkVerticalWin(){
  // TO do
}

function checkDiagonalWin(){
  // To do
}

function getBGColor(rowIndex,colIndex){
    return $('button').eq(colIndex+rowIndex*numColumn).css('background-color');
  }
