// Task 1

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

let propsCount = (obj) => {
  return Object.keys(obj).length;
};

console.log("Properties: " + propsCount(mentor));

console.log("-----------");

// Task 2

let student = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
  level: "intern",
  company: "none",
};

let showProps = (obj) => {
  const arrayOfProps = [];
  for (const key in obj) {
    arrayOfProps.push(key);
  }
  return arrayOfProps;
};
console.log(showProps(student));

let showValueProps = (obj) => {
  const arrayOfProps = [];
  for (const key in obj) {
    arrayOfProps.push(obj[key]);
  }
  return arrayOfProps;
};
console.log(showValueProps(student));

console.log("-----------");

// Task 3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return `${this.name} ${this.surname}`;
  }
}

let Yevhen = new Person("Yevhen", "Reshetar");
console.log(Yevhen.showFullName());

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return `${this.surname} ${this.name} ${midleName}`;
  }

  showCourse(year) {
    if (isNaN(year) || year < 2016 || year >= new Date().getFullYear()) {
      return "You wrote wrong value";
    }
    return new Date().getFullYear() - year;
  }
}

let Vitalij = new Student("Vitalij", "Reshetar");
console.log(Vitalij.showFullName("Vasilovich"));
console.log("Current course: " + Vitalij.showCourse(2019));

console.log("-----------");

// Task 4

class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    return console.log(
      this.fullName + " salary: " + this.dayRate * this.workingDays
    );
  }

  showExp() {
    return this.#experience;
  }

  showSalaryWithExperience() {
    return console.log(
      this.fullName +
        " salary: " +
        this.dayRate * this.workingDays * this.#experience
    );
  }

  setExp(value) {
    this.#experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp());
worker1.showSalaryWithExperience();
worker1.setExp(1.5);
console.log("New experience: " + worker1.showExp());
worker1.showSalaryWithExperience();

console.log("---");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp());
worker2.showSalaryWithExperience();
worker2.setExp(1.5);
console.log("New experience: " + worker2.showExp());
worker2.showSalaryWithExperience();

console.log("---");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp());
worker3.showSalaryWithExperience();
worker3.setExp(1.5);
console.log("New experience: " + worker3.showExp());
worker3.showSalaryWithExperience();

// Task 5
console.log("-----------");

class GeometricFigure {
  constructor() {}
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(side, height) {
    super();
    this.side = side;
    this.height = height;
  }
  getArea() {
    return (1 / 2) * this.side * this.height;
  }
}

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return Math.pow(this.side, 2);
  }
}

class Circle extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return Math.PI * Math.pow(this.side, 2);
  }
}

let handleFigures = (figures) => {
  let initialValue = 0;
  let values = figures.reduce(function (accumulator, curFigure) {
    console.log(`Geometric figure: ${curFigure.toString()} - area: ${curFigure.getArea()}`);
    return accumulator + curFigure.getArea();
  }, initialValue);

  return `Total area: ${values}`;
};

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
