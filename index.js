// HOMEWORK 4 --------------------------------------

// Task 1

let calcReactangleArea = (width, height) => {
    if (isNaN(width) && isNaN(height)) {
        throw new Error("Wrong values");
    }
    return width * height;
}

try {
    console.log(calcReactangleArea(4,4));
    console.log(calcReactangleArea(4,"text"));
} catch (error) {
    console.log(error.message);
}


// Task 2

let checkAge = (title = "How old are you?") => {
    let age = +prompt(title);
    if (age === 0) {
        throw new Error("The field is empty! Please enter your age");
    } else if (isNaN(age)) {
        throw new Error("The value is not a number");
    } else if (age <= 14) {
        throw new Error("You are so young for this movies :)");
    } 
    return "The movie name";
}

try {
    console.log(checkAge());
} catch (error) {
    console.log(error.message);
}

// Task 3

class MonthException {
  constructor(message) {
    this.message = message;
  }

  showMonthName() {
    if (this.message >= 14 || isNaN(this.message) ) {
      throw new Error("MonthException Incorrect month number")
    }
    let date = new Date();
    date.setMonth(this.message - 1);
    return date.toLocaleString('en-US', { month: 'long' });
  }
}
  
try {
  const julyMonth = new MonthException("7");
  console.log(julyMonth.showMonthName());
  
  const wrongMonth = new MonthException("16");
  console.log(wrongMonth.showMonthName());

  // const wrongNameMonth = new MonthException("text");
  // console.log(wrongNameMonth.showMonthName());
} catch (error) {
  console.log(error.message);
}

  
// Task 4  

let showUser = (id) => {
  if (isNaN(id) || id < 0) {
    throw new Error(`Error: ID must not be negative: ${id}`);
  }
  return {id};
}

let showUsers = (ids) => {
  let newArray = [];
  ids.map((id) => { 
    showUser(id);
    newArray.push({id});
  })
  return newArray;
}

try {
  console.log(showUsers([7, 12, 44, 22]));
  console.log(showUsers([7, -12, 44, 22]));
} catch (error) {
  console.log(error.message);
} 






// // HOMEWORK 3 --------------------------------------

// // Task 1
// let numberArray = [2, 3, 4, 5];

// let resFor = 0;
// for (let index = 0; index < numberArray.length; index++) {
//     resFor += numberArray[index];
// }
// console.log(resFor);

// let resWhile = 0;
// let indexForWhile = 0;
// while (indexForWhile < numberArray.length) {
//     resWhile += numberArray[indexForWhile]
//     indexForWhile++;
// }
// console.log(resWhile);


// // Task 2
// for (let index = 0; index < 16; index++) {
//     if (index % 2 === 0) {
//         console.log(index + " is even");
//     }

//     if (index % 2 !== 0) {
//         console.log(index + " is odd");
//     }
// }

// // Task 3
// let randArray = (numberOfElements) => {
//     let arrayOfElements = [];
//     for (let index = 0; index < numberOfElements; index++) {
//         arrayOfElements.push(Math.floor(Math.random() * 501));
//     }
//     console.log(arrayOfElements);
// }
// randArray(5);

// // Task 4
// let firstNumber = +prompt("Write a number and we will count power. We count only integers numbers. The first number:");
// let secondNumber = +prompt("The second number:");

// let raiseToDegree = (a, b) => {
//     let resultPow;
//     if (isNaN(a) || isNaN(b)) {
//         alert('It is not a number values');
//     } else {
//         resultPow = Math.pow(parseInt(a), parseInt(b))
//     }
//     console.log(resultPow);
// }

// raiseToDegree(firstNumber, secondNumber);

// // Task 5
// function findMin() {
//     let minValue = arguments[0];
//     for (let index = 0; index < arguments.length; index++) {
//         if (arguments[index] < minValue) {
//             minValue = arguments[index];
//         }
//     }
//     console.log(minValue);
// }

// findMin(12, 14, 4, -4, 0.2);


// // Task 6

// let findUnique = (arr) => {
//     let compareArr = [];
//     for (let index = 0; index < arr.length; index++) {
//         if(compareArr.includes(arr[index])) {
//             console.log(false);
//             return;
//         }
//         compareArr.push(arr[index]);
//     }
//     console.log(true);
// }

// findUnique([1, 2, 3, 5, 3]);
// findUnique([1, 2, 3, 5, 11]);


// // Task 7

// let lastElem = (a, b) => {
//     let newArr = [];
//     if ( !b ) {
//         b = 1;
//     } 
//     newArr = a.slice(-b);
//     return newArr;
// }

// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

// // Task 8

// let convertToCapitalize = (string) => {
//     let dividedStringArray = string.split(" ");
//     let newString = [];
//     for (let index = 0; index < dividedStringArray.length; index++) {
//         newString.push(dividedStringArray[index].charAt(0).toUpperCase() + dividedStringArray[index].slice(1));   
//     }
//     newString = newString.join(" ");
//     console.log(newString);
// }

// convertToCapitalize('i love java script');








// HOMEWORK 2 --------------------------------------

// // Task 1

// let x = 1;
// let y = 2;
// let res1 = String(x) + String(y);
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + String(y);
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"


// let res3 = Boolean(x + y);
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = Number(x * Array(y));
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// // Task 2

// let evenNumber = +prompt("Write a number and we will check on even number");
// if (evenNumber % 2 === 0) {
//     console.log("Number " + evenNumber + " is a even");
// } else {
//     console.log("Number " + evenNumber + " isn't a even");
// }

// let multipleNumber = +prompt("Write a number and we will check on multiple to 7");
// if (multipleNumber % 7 === 0) {
//     console.log("Number " + multipleNumber + " is multiple to 7");
// } else {
//     console.log("Number " + multipleNumber + " isn't multiple to 7");
// }

// // Tesk 3

// let firstArray = [];
// firstArray.push(4);
// firstArray.push("String");
// firstArray.push(true);
// firstArray.push(null);
// console.log(firstArray.length);
// let visitorValue = prompt("Write a value which you want to add to array");
// firstArray.push(visitorValue);
// console.log(firstArray[firstArray.length - 1]);
// firstArray.shift();
// console.log(firstArray);


// // Task 4

// let cities = ["Rome", "Lviv", "Warsaw"]; 
// let newCities = cities.join("*");
// console.log(newCities);

// // Task 5

// let isAdult = +prompt("How old are you?");
// if (isAdult >= 18) {
//     console.log("You have reached the age of majority");
// } else {
//     console.log("You are so young");
// }

// // Task 6

// let firstSide = +prompt("Please write triangle sides. The first side is:");
// let secondSide = +prompt("The second side is:");
// let thirdSide = +prompt("The third side is:");

// let p = (firstSide + secondSide + thirdSide) / 2;
// let areaTriangle = (p * (p - firstSide) * (p - secondSide) * (p - thirdSide)) ** (1/2);
// areaTriangle = areaTriangle.toFixed(3);
// console.log("Area Triagle is: " + areaTriangle);

// if ( 
//     Math.pow(firstSide, 2) + Math.pow(secondSide, 2) == Math.pow(thirdSide, 2).toFixed(3) 
//     || Math.pow(secondSide, 2) + Math.pow(thirdSide, 2) == Math.pow(firstSide, 2).toFixed(3) 
//     || Math.pow(thirdSide, 2) + Math.pow(firstSide, 2) == Math.pow(secondSide, 2).toFixed(3) ) {
//         console.log("True");
// } else {
//     console.log("This triagle isn't a rectangle");
// }

// // Task 7

// let timeNow = new Date().getHours();

// if (timeNow >= 23 && timeNow <=5) {
//     console.log("Good night");
// } else if (timeNow > 5 && timeNow <=11) {
//     console.log("Good morning");
// } else if (timeNow > 11 && timeNow <=17) {
//     console.log("Good day");
// } else if (timeNow > 17 && timeNow < 23) {
//     console.log("Good evening");
// }

// switch (timeNow) {
//     case 23:
//     case 00:
//     case 01:
//     case 02:
//     case 03:
//     case 04:
//     case 05:
//         console.log("Good night");
//         break;
//     case 06:
//     case 07:
//     case 08:
//     case 09:
//     case 10:
//     case 11:
//         console.log("Good morning");
//         break;
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//         console.log("Good day");
//         break;
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//         console.log("Good evening");
//         break;

//     default:
//         console.log("The value is wrong");
//         break;
// }





// HOMEWORK 1 --------------------------------------

// // Task 2
// // console.log("Task 2");
// alert("My last name is Reshetar");

// // Task 3
// console.log("Task 3");
// let a, b;
// a = 5;
// b = 10;
// console.log("A: " + a + " B: " + b);
// a = b;
// console.log("A: " + a + " B: " + b);

// // Task 4
// let objectName = {
//     name: "Yevhen",
//     year: 26,
//     married: false,
//     city: undefined,
//     street: null,
// };

// // Task 5
// console.log("Task 5");
// let isAdult = confirm("Are you adult?");
// console.log("User is adult? Answer: " + isAdult );

// // Task 6
// console.log("Task 6");
// let firstName, lastName, studyGroup, born;
// firstName = "Yevhen";
// lastName = "Reshetar";
// studyGroup = "Lv-730.JS Core";
// born = 1996;
// let married = false;
// console.log("born is type: " + typeof born);
// console.log("married is type: " + typeof married);
// console.log("fistName is type: " + typeof firstName);
// console.log("lastName is type: " + typeof lastName);
// console.log("studyGroup is type: " + typeof studyGroup);
// let city = undefined;
// let street = null;
// console.log("city is type: " + typeof city);
// console.log("street is type: " + typeof street);

// // Task 7
// console.log("Task 7");
// let name = prompt("What is your name?", "User");
// let email = prompt("What is your email?", "usermale@gmail.com");
// let password = prompt("What is your password?", "qwerty");
// console.log("Dear " + name + ", your email is " + email + ", your password is" + password)

// // Task 8
// console.log("Task 8");
// let secondsInHour, secondsInDay, secondsInMonth;
// secondsInHour = 60 * 60;
// secondsInDay = secondsInHour * 24;
// secondsInMonth = secondsInDay * 31;
// console.log("Seconds in Hour: " + secondsInHour);
// console.log("Seconds in Day: " + secondsInDay);
// console.log("Seconds in Month: " + secondsInMonth);


// let secondsInHoursClick = () => {
//     let secondsInHoursFormValue = document.getElementById("secondsInHoursForm").value;
//     if ( secondsInHoursFormValue <= 0 ) {
//         console.log("Please write correct number");
//         return;
//     }
//     let result = 60 * 60 * secondsInHoursFormValue;
//     console.log("In " + secondsInHoursFormValue + " hours are " + result + " seconds");
// }