
function makeCar() {

  var makes = ["Chevy", "GM", "WebVille Motors", "Fiat", "Tucker"];
  var models = ["Cadilac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = ["1955", "1957", "1948", "1954", "1961"];
  var colors = ["red", "blue", "tan", "yellow", "white"];
  var convertible = [true, false]

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    drive: function () {
      alert("Zoom Zoom!");
    }
  };
  return car;
}

function displayCar(car) {
  console.log("Your new car is a " + car.color + " " + car.year + " " + car.make + " " + car.model);
  console.log("which can hold " + car.passengers + " passengers.");
  car.drive();
}
var carToSell = makeCar();
displayCar(carToSell);

var fiat = {
  make: "fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  isConvertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function () {
    if (this.fuel > 0) {
      this.started = true;
    } else {
      alert("Out of fuel, idiot!");
    }
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " is driving.");
        this.fuel = this.fuel - 1;
      } else {
        alert("Out of fuel, idiot!");
        this.stop();
      }
    } else {
      alert("You need to start the engine first, stupid.")
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  }
};
// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.addFuel(2);
// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.drive();
// fiat.drive();
// fiat.stop();

for (var prop in fiat) {
  console.log(prop + ": " + fiat[prop]);
}


var eightBall = {
  index: 0,
  advice: ["yes", "no", "maybe", "not a chance"],
  shake: function () {
    this.index = this.index + Math.floor(Math.random() * 4);
  },
  look: function () {
    return this.advice[this.index];
  }
};
eightBall.shake();
console.log(eightBall.look());

var demands = document.getElementById("demands");
demands.innerHTML = "Do it now! Like right now!";