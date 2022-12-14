// Task 1

document.getElementById("test").innerHTML = "Second";
document.getElementById("test").innerText = "Third";

// Task 2

var logo = document.getElementById("dog");
logo.src = "cat.jpg";
console.log(document.getElementById("dog"));

// Task 3

const arrayOfPTags = document.querySelectorAll("div#text > p");
console.log(arrayOfPTags);
for (let index = 0; index < arrayOfPTags.length; index++) {
  console.log(` Selector text ${index}: ${arrayOfPTags[index].innerHTML}`);
}

// Task 4

const list = document.getElementById("list");

const newList = [];
newList.push(list.firstElementChild.innerHTML);
newList.push(list.lastElementChild.innerHTML);
newList.push(list.children[1].innerHTML);
newList.push(list.children[3].innerHTML);
newList.push(list.children[2].innerHTML);
console.log(newList);

const newList2 = [];
newList2[0] = document.getElementById("list").children[0].innerText;
newList2[1] = document.getElementById("list").children[4].innerText;
newList2[2] = document.getElementById("list").children[1].innerText;
newList2[3] = document.getElementById("list").children[3].innerText;
newList2[4] = document.getElementById("list").children[2].innerText;
console.log(newList2);

// Task 5

let h1Tag = document.getElementsByTagName("h1");
h1Tag[0].style.backgroundColor = 'green';

let paragraphs = document.getElementById("myDiv");
paragraphs.firstElementChild.style.fontWeight = "700";
paragraphs.children[1].style.color = "red";
paragraphs.children[2].style.fontStyle = "italic";

let horizontalList = document.getElementById("myList").innerText;
document.getElementById("myList").innerHTML = horizontalList.split("\n").join("");
document.getElementsByTagName("span")[0].style.display = "none"

// Task 6

let firstValue = prompt("Fill the first input");
if(firstValue) {
  document.getElementById("input1").value = firstValue;
}
let secondValue = prompt("Fill the second input");
function setSecondValue(value) {
  document.getElementById("input2").value = value;
}
if (secondValue) {
  setSecondValue(secondValue);
}

let temporaryValue = document.getElementById("input1").value;
document.getElementById("input1").value = document.getElementById("input2").value;
document.getElementById("input2").value = temporaryValue;

// Task 7

let content = `<main class="mainClass check item"> 	
<div id="myDiv">
<p>First paragraph</p>           
</div>
</main> 
`;

let body = document.getElementsByTagName("body");
body[0].insertAdjacentHTML('afterend', content)
