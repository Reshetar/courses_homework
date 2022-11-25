// HOMEWORK 2 --------------------------------------

// Task 1

let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"


let res3 = Boolean(x + y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = Number(x * Array(y));
console.log(res4); // NaN
console.log(typeof res4); // "number"

// Task 2

let evenNumber = +prompt("Write a number and we will check on even number");
if (evenNumber % 2 === 0) {
    console.log("Number " + evenNumber + " is a even");
} else {
    console.log("Number " + evenNumber + " isn't a even");
}

let multipleNumber = +prompt("Write a number and we will check on multiple to 7");
if (multipleNumber % 7 === 0) {
    console.log("Number " + multipleNumber + " is multiple to 7");
} else {
    console.log("Number " + multipleNumber + " isn't multiple to 7");
}

// Tesk 3

let firstArray = [];
firstArray.push(4);
firstArray.push("String");
firstArray.push(true);
firstArray.push(null);
console.log(firstArray.length);
let visitorValue = prompt("Write a value which you want to add to array");
firstArray.push(visitorValue);
console.log(firstArray[firstArray.length - 1]);
firstArray.shift();
console.log(firstArray);


// Task 4

let cities = ["Rome", "Lviv", "Warsaw"]; 
let newCities = cities.join("*");
console.log(newCities);

// Task 5

let isAdult = +prompt("How old are you?");
if (isAdult >= 18) {
    console.log("You have reached the age of majority");
} else {
    console.log("You are so young");
}

// Task 6

let firstSide = +prompt("Please write triangle sides. The first side is:");
let secondSide = +prompt("The second side is:");
let thirdSide = +prompt("The third side is:");

let p = (firstSide + secondSide + thirdSide) / 2;
let areaTriangle = (p * (p - firstSide) * (p - secondSide) * (p - thirdSide)) ** (1/2);
areaTriangle = areaTriangle.toFixed(3);
console.log("Area Triagle is: " + areaTriangle);

if ( 
    Math.pow(firstSide, 2) + Math.pow(secondSide, 2) == Math.pow(thirdSide, 2).toFixed(3) 
    || Math.pow(secondSide, 2) + Math.pow(thirdSide, 2) == Math.pow(firstSide, 2).toFixed(3) 
    || Math.pow(thirdSide, 2) + Math.pow(firstSide, 2) == Math.pow(secondSide, 2).toFixed(3) ) {
        console.log("True");
} else {
    console.log("This triagle isn't a rectangle");
}

// Task 7

let timeNow = new Date().getHours();

if (timeNow >= 23 && timeNow <=5) {
    console.log("Good night");
} else if (timeNow > 5 && timeNow <=11) {
    console.log("Good morning");
} else if (timeNow > 11 && timeNow <=17) {
    console.log("Good day");
} else if (timeNow > 17 && timeNow < 23) {
    console.log("Good evening");
}

switch (timeNow) {
    case 23:
    case 00:
    case 01:
    case 02:
    case 03:
    case 04:
    case 05:
        console.log("Good night");
        break;
    case 06:
    case 07:
    case 08:
    case 09:
    case 10:
    case 11:
        console.log("Good morning");
        break;
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("Good day");
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        console.log("Good evening");
        break;

    default:
        console.log("The value is wrong");
        break;
}








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