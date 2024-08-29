class Car {
  constructor({ price, maxSpeed }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(car) {
    return console.log(
      car.speed,
      car.price,
      car.maxSpeed,
      car.isOn,
      car.distance
    );
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price = newPrice);
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    this.speed = 0;
    this.isOn = false;
  }

  accelerate(value) {
    if (value <= this.maxSpeed) {
      return (this.speed += value);
    }
  }

  decelerate(value) {
    if (value > 0) {
      return (this.speed -= value);
    }
  }

  drive(hours) {
    if (this.isOn) {
      return (this.distance += hours * this.speed);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
