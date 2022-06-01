/* eslint-disable no-mixed-operators */
/* eslint-disable id-length */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */

const { html } = require('../../projects/htmlFrameWork/src/generateHtml.js');
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
  // perimeter() {

  // }
}

// const x = new Triangle({ x: 0, y: 0 }, { x: 3, y: 3 }, { x: 0, y: 5 });
// console.log(x.area());
// console.log(x.perimeter());

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

const sum = (total, score) => {
  return total + score;
};

class Score {
  constructor(subject, score) {
    this.subject = subject;
    this.score = score;
  }
}

class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }

  average() {
    return this.marks.average();
  }

  percentage() {
    return this.average() * 100;
  }

  score(subject) {
    return this.marks[subject];
  }
}



const john = new Student('john', 12, { maths: 60 });


//create class that will take tag name attributes value
// when invoke method ,that will give formated html

class Html {
  constructor(tagName, attrib, content) {
    this.tagName = tagName;
    this.attrib = attrib;
    this.content = content;
  }

  tag() {
    return `<${this.tagName} ${this.attrib}>${this.content}</${this.tagName}>`;
  }

}
class Attribute {
  constructor(property, value) {
    this.property = property;
    this.value = value;
  }

  attr() {
    return `${this.property}="${this.value}"`;
  }
}

const classAttr = new Attribute('class', 'page');
const div = new Html('div', classAttr.attr(), 'hai');

div.tag();

//type price kgs
//paddy 1360/75kgs  10000
