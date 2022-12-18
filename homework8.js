// Task 1

function upperCase(str) {
  regExp = /^[A-Z]/;
  let result = regExp.test(str);
  if (result) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}

upperCase('regexp');
upperCase('RegExp');


// Task 2

function checkEmail(email) {
  let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let result = regExp.test(email);
  if (result) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
}

checkEmail("Qmail2@gmail.com");
checkEmail("Qmail2@.com");
checkEmail("Qmail2@com");

// Task 3

function findLetters(string) {
  let regExp = /d(b+)(d)/ig;
  let result = regExp.exec(string);
  console.log(result);
}

findLetters("cdbBdbsbz");


// Task 4

function reverseString(str) {
  let regExp = /\s/;
  console.log(str.split(regExp).reverse().join(", "));
}

reverseString("Java Script");

// Task 5
function validationCard(value) {
  let cardRegEx = /^([0-9]{4})\-([0-9]{4})\-([0-9]{4})\-([0-9]{4})$/;
  let result = cardRegEx.test(value);
  console.log(result);
}

validationCard("9999-9999-9999-9999");
validationCard("9999-9999-9999-99999");


// Task 6

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

// Task 7

function checkLogin(str) {
  let loginReg = /^[a-z]{1}[0-9a-z\.]{1,9}$/gi;
  let result = loginReg.test(str);
  console.log(result);

  console.log(str.match(/\d(\.\d)?/gi));
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
