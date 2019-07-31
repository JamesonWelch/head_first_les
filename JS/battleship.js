
var randomLoc = Math.floor(Math.random() * 5)
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false

var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss")
  }
};

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
  { locations: ["24", "34", "44"], hits: ["", "", ""] },
  { locations: ["10", "11", "12"], hits: ["", "", ""] }],

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var locations = ship.locations;
      var index = locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = 'hit';
        return true;
      }
    }
    return false;
  }
};

view.displayMiss('00');
view.displayHit('34');
view.displayMiss('55');
view.displayHit('26');
view.displayMessage("Tap tap is this thing on?");

// while (isSunk == false) {
//   guess = prompt("Ready, Aim, Fire! (Enter a number between 0-6):")
//   if (guess < 0 || guess > 6) {
//     alert("Please enter a valid cell number, fool!");
//   } else {
//     guesses = guesses + 1;
//     if (guess == location1 || guess == location2 || guess == location3) {
//       alert("Hit!");
//       hits = hits + 1;
//       if (hits == 3) {
//         isSunk = true;
//         alert("You sank my battleship!")
//       }
//     } else {
//       alert("Miss!");
//     }
//   }
// }
// var stats = "You took " + guesses + " guesses to sink the battleship, " +
//   "which means youre shooting accuracy was " + (3 / guesses);
// alert(stats);
