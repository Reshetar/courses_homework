// Task 1

let openTab = window.open("","New Tab","width=300,height=300");
setTimeout(()=>{
  openTab.resizeTo(500,500);
}, 2000);
setTimeout(()=>{
  openTab.moveTo(200,200);
}, 4000);
setTimeout(()=>{
  openTab.close();
}, 6000);


// Task 2

function changeCSS() {
  let element = document.getElementById("text");
  element.style.color = "orange";
  element.style.fontSize = "16px";
  element.style.fontFamily = "Comic Sans MS";
}


// Task 3

function changeBgOnBlue() {
  document.querySelector("body").style.backgroundColor = "blue";
}

const secondButton = document.getElementById('pink');
secondButton.addEventListener('dblclick', (e) => {
  document.querySelector("body").style.backgroundColor = "pink";
});

function changeBgOnBrownDown(){
  document.querySelector("body").style.backgroundColor = "brown";
}
function changeBgOnBrownUp(){
  document.querySelector("body").style.backgroundColor = "white";
}

function changeBgOnYellowOn(){
  document.querySelector("body").style.backgroundColor = "yellow";
}

function changeBgOnYellowOff(){
  document.querySelector("body").style.backgroundColor = "white";
}


// Task 4

function chooseAndDelete() {
  let currentValue = document.getElementById("names");
  currentValue.remove(currentValue.selectedIndex);
}


// Task 5

function onClickLive() {
  document.getElementById("messages").insertAdjacentHTML("afterend","<p>I was pressed!</p>");
}
function onMoveLive() {
  document.getElementById("messages").insertAdjacentHTML("afterend","<p>Mouse on me!</p>");
}
function onOutLive() {
  document.getElementById("messages").insertAdjacentHTML("afterend","<p>Mouse is not on me!</p>");
}


// Task 6

document.getElementById("height").innerHTML = window.innerHeight;
document.getElementById("width").innerHTML = window.innerWidth;

function updateSizeValues() {
  document.getElementById("height").innerHTML = window.innerHeight;
  document.getElementById("width").innerHTML = window.innerWidth;
}

window.onresize = updateSizeValues;


// Task 7

const cityGer = [
  {id: "ber", value: "Berlin"},
  {id: "fra", value: "Frankfurt"},
  {id: "bay", value: "Bayer"}
];

const cityUsa = [
  {id: "ny", value: "New York"},
  {id: "sf", value: "San Francisco"},
  {id: "la", value: "Los Angeles"}
];

const cityUa = [
  {id: "uzh", value: "Uzhhorod"},
  {id: "lviv", value: "Lviv"},
  {id: "kyiv", value: "Kyiv"}
];

function onChangeCounry() {
  let countryValue = document.getElementById("country");
  
  if (countryValue.value === "ger") {
    document.getElementById("cities").innerHTML = "";
    cityGer.map((city) => {
      document.getElementById("cities").insertAdjacentHTML("beforeend",`<option value="${city.id}">${city.value}</option>`);
    })
  }
  
  if (countryValue.value === "usa") {
    document.getElementById("cities").innerHTML = "";
    cityUsa.map((city) => {
      document.getElementById("cities").insertAdjacentHTML("beforeend",`<option value="${city.id}">${city.value}</option>`);
    })
  }
  
  if (countryValue.value === "ukr") {
    document.getElementById("cities").innerHTML = "";
    cityUa.map((city) => {
      document.getElementById("cities").insertAdjacentHTML("beforeend",`<option value="${city.id}">${city.value}</option>`);
    })
  }

  document.getElementById("country-text").innerText = countryValue.options[countryValue.selectedIndex].text;
  onChangeCity();
}
onChangeCounry();


function onChangeCity() {
  let cityValue = document.getElementById("cities");
  document.getElementById("city-text").innerText = cityValue.options[cityValue.selectedIndex].text;
}
onChangeCity();