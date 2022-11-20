// Task 2
// console.log("Task 2");
alert("My last name is Reshetar");

// Task 3
console.log("Task 3");
let a, b;
a = 5;
b = 10;
console.log("A: " + a + " B: " + b);
a = b;
console.log("A: " + a + " B: " + b);

// Task 4
let objectName = {
    name: "Yevhen",
    year: 26,
    married: false,
    city: undefined,
    street: null,
};

// Task 5
console.log("Task 5");
let isAdult = confirm("Are you adult?");
console.log("User is adult? Answer: " + isAdult );

// Task 6
console.log("Task 6");
let firstName, lastName, studyGroup, born;
firstName = "Yevhen";
lastName = "Reshetar";
studyGroup = "Lv-730.JS Core";
born = 1996;
let married = false;
console.log("born is type: " + typeof born);
console.log("married is type: " + typeof married);
console.log("fistName is type: " + typeof firstName);
console.log("lastName is type: " + typeof lastName);
console.log("studyGroup is type: " + typeof studyGroup);
let city = undefined;
let street = null;
console.log("city is type: " + typeof city);
console.log("street is type: " + typeof street);

// Task 7
console.log("Task 7");
let name = prompt("What is your name?", "User");
let email = prompt("What is your email?", "usermale@gmail.com");
let password = prompt("What is your password?", "qwerty");
console.log("Dear " + name + ", your email is " + email + ", your password is" + password)

// Task 8
console.log("Task 8");
let secondsInHour, secondsInDay, secondsInMonth;
secondsInHour = 60 * 60;
secondsInDay = secondsInHour * 24;
secondsInMonth = secondsInDay * 31;
console.log("Seconds in Hour: " + secondsInHour);
console.log("Seconds in Day: " + secondsInDay);
console.log("Seconds in Month: " + secondsInMonth);


let secondsInHoursClick = () => {
    let secondsInHoursFormValue = document.getElementById("secondsInHoursForm").value;
    if ( secondsInHoursFormValue <= 0 ) {
        console.log("Please write correct number");
        return;
    }
    let result = 60 * 60 * secondsInHoursFormValue;
    console.log("In " + secondsInHoursFormValue + " hours are " + result + " seconds");
}