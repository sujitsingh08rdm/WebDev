"use strict";
/*
/////////////////////////////////////
////////////////////////////////////
//Constructor Function and the new Operator
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //dont do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// New {} is creeated
// function is called, this ={}
// {} is linked to prototype
// function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person);

//pROTOTYPE

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";

console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

console.dir(Person.prototype.constructor);

console.log(jonas.__proto__);
//Object.prototype
console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6356, 45, 2, 5, 4, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

////////////////////////////////
////////////////////////////////
//Challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} kmph`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} kmph`);
};

const BMW = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

BMW.accelarate();
BMW.accelarate();
BMW.brake();
BMW.accelarate();

console.log(BMW);


//Class expression
// const PersonCL = class {};

//Class decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  //Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log("Hey there !");
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);

console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

//PersonCL.prototype.greet = function (){
// console.log(`hey ${this.firstName}`);
// }

jessica.greet();

//classes are not hoisted
//classes are first-class citizens
//classes are executed in strict mode

const walter = new PersonCl("Walter White", 1965);

PersonCl.hey();

/*
//////////////////////////////////////
//Setters and Getters
const account = {
  owner: "Joans",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

*/
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
*/
/*
////////////////////////////
/////////////////////////
//challenge 2
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelarate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} kmph`);
  };
  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} kmph`);
  };
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const BMW = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);
const ford = new Car("Ford", 120);

// BMW.accelarate();
// BMW.accelarate();
// BMW.brake();
// BMW.accelarate();

console.log(ford.speedUS);
ford.accelarate();

ford.accelarate();
ford.brake();
ford.speedUS = 50;

console.log(ford);
ford.accelarate();

//////////////////////
/////////////////////
//Inheritance
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking  prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My Name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is goign at ${this.speed} km/h`);
};

//////////////////////////////
//////////////////////////////
//challange 3
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} kmph, with charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);

console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

/////////////////////
/////////////////////////////
//Inheritance beteween 'Classes" : ES6 classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  //Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log("Hey there !");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Alawys needs to h appen first
    super(fullName, birthYear);

    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `i'm ${
        2037 - this.birthYear
      } years old, but as a Student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Comms");
martha.introduce();
martha.calcAge();
*/

///////////////////
///////////////////////////////
////////////////////
//Inheritance  between "Classes": Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My Name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();
*/
//Public fields
//Private fields
//Public methods
//Private methods
/*
class Account {
  //public fields(instances)
  locale = navigator.language;

  //private fields(instaces)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //proctected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  //Public Methods
  //Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveloan(val) {
    return true;
  }

  requestloan(val) {
    if (this._approveloan(val)) {
      this.deposit(val);
      console.log(`loan approved`);
      return this;
    }
  }

  //  Private methods
  //  #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
  static helper() {
    console.log("Helper");
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(259)
// acc1._movements.push(-140)

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestloan(1000);
acc1._approveloan(1000);

console.log(acc1);

// console.log(acc1.#pin);

acc1.deposit(300).deposit(500).withdraw(35);
*/
