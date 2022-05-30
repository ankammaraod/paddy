/* eslint-disable no-mixed-operators */
/* eslint-disable id-length */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
class Vehicle {
  constructor(owner, vehicleNumber, regDate) {
    this.owner = owner;
    this.vehicleNumber = vehicleNumber;
    this.regDate = regDate;
  }
  getDetails() {
    return this.vehicleNumber + '|' + this.owner;
  }
}

// const myVehicle = new Vehicle('ankammarao', 'AP07AQ3619', new Date());
// console.log(myVehicle.getDetails());

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getAddress() {
    return this.address;
  }

  isEligibleForLicense() {
    return this.age > 18;
  }
}
const person1 = new Person('ankamma', 20, 'guntur');
const person2 = new Person('abin', 21, 'ponnur');
const person3 = new Person('jhon', 26, 'bza');
const person4 = new Person('ahon', 16, 'hyd');


// [person1, person2, person3].filter(
//   person => person.isEligibleForLicense()).map(
//     (person) => person.name);

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
  diameter() {
    return this.radius * 2;
  }
  circumference() {
    return 2 * Math.PI * this.radius;
  }
}


class Iterator {
  constructor(list) {
    this.index = 0;
    this.list = list;
  }

  currentElement() {
    return this.list[this.index];
  }

  nextElement() {
    this.index++;
    return this.list[this.index];
  }

  prevElement() {
    this.index--;
    return this.list[this.index];
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  area() {
    return 1 / 2 *
      (this.a.x * this.b.y + this.b.x * this.c.y + this.c.x * this.a.y) -
      (this.b.x * this.a.y + this.c.x * this.b.y + this.a.x * this.c.y);
  }
}

// const x = new Triangle({ x: 0, y: 0 }, { x: 3, y: 3 }, { x: 0, y: 5 });
// console.log(x.area());

class flag {
  constructor(flag, count) {
    this.flag = flag;
    this.count = count;
  }

  isValidFlag() {
    return ['-n', '-c'].includes(this.flag);
  }
  isValidCount() {
    return this.count > 1;
  }
}

// const option = new flag('-n', 10);

// console.log(option.isValidFlag());


//create class that will take tag name attributes value