//console.log("connected")
var player1 = prompt("Player One: Enter Your Name , you will be Blue");
var player2 = prompt("Player Two: Enter Your Name , you will be Red");
var numRows = $.map($('tr'), function(n, i) { return i; }).length;
var numColumn = $.map($('button'), function(n, i) { return i; }).length/numRows;
var chance = true;
var rowtofill = [numRows-1,numRows-1,numRows-1,numRows-1,numRows-1,numRows-1,numRows-1];
//var rowtofill = [5,5,5,5,5,5,5];
var rowsWithBlue = [];
var rowsWithRed = [];
var colWithBlue = [];
var colwithRed = [];
$('h3').text(player1 + ' : it is your turn, please pick a column to drop your blue chip.');
$('td').click(function() {
    var myCol = $(this).index();
    var $tr = $(this).closest('tr');
    var myRow = $tr.index();
    if(chance == true){
      $('h3').text(player2 + ' : it is your turn, please pick a column to drop your red chip.');
      $('button').eq(myCol+rowtofill[myCol]*numColumn).css({backgroundColor: "Blue"});
      rowsWithBlue.push(rowtofill[myCol]);
      colWithBlue.push(myCol);
      rowtofill[myCol]--
      chance = false;
      }
    else {
      $('h3').text(player1 + ' : it is your turn, please pick a column to drop your blue chip.');
      $('button').eq(myCol+rowtofill[myCol]*numColumn).css({backgroundColor: "Red"});
      rowsWithRed.push(rowtofill[myCol]);
      colwithRed.push(myCol);
      rowtofill[myCol]--
      chance = true;
    }
    console.log(rowsWithRed);
    console.log(rowsWithBlue);
  });
