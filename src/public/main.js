'use strict';

import { addToDB, getTeams } from "./firebase";

const listOfTeams = [];
const listOfTeamsForResults = [];
const exportTeam = async () => {
  await getTeams(listOfTeams);
  await listOfTeams.map((team, index)=>{
    listOfTeamsForResults.push(team);
    let indexPlusOne = index + 1;
    document.getElementById(`q-t-${indexPlusOne}`).innerHTML = `${team.name}<img src="${team.img}" alt="${team.name}" /></span>`;
  });
  
}
exportTeam();

const listOfButtons = ["f-t-1", "f-t-2", "s-t-1", "s-t-2", "s-t-3", "s-t-4", "q-t-1", "q-t-2", "q-t-3", "q-t-4", "q-t-5", "q-t-6", "q-t-7", "q-t-8"]; 
const confirmedListOfTeams = [];
const resultOfCup = [];
const correctPick = [];

setTimeout(()=>{
  for (var i = 0; i < 8; i++) {
    var idx = Math.floor(Math.random() * listOfTeamsForResults.length);
    resultOfCup.push(listOfTeamsForResults[idx].name);
    listOfTeamsForResults.splice(idx, 1);
  }
}, 2000)


// Added listeners on buttons
const addTeamButtonHandler = () => {
  listOfButtons.map((button)=>{
    document.getElementById(button).addEventListener("click", (e)=>{handleClick(e)});
  })
};
addTeamButtonHandler();


// Handle click on button
const handleClick = (e) => {
  let stage = e.currentTarget.id.split("-")[0];
  let teamPair = e.currentTarget.id.split("-")[2];
  
  changeBackground(stage, teamPair);

  if (stage === "q"){
    if (teamPair >= 1 && teamPair <= 2 ) {
      selectedTeam(stage, teamPair, "s", 1, "f", 1);
    } else if (teamPair >= 3 && teamPair <= 4) {
      selectedTeam(stage, teamPair, "s", 2, "f", 1);
    } else if (teamPair >= 5 && teamPair <= 6) {
      selectedTeam(stage, teamPair, "s", 3, "f", 2);
    } else if (teamPair >= 7 && teamPair <= 8) {
      selectedTeam(stage, teamPair, "s", 4, "f", 2);
    }
  }

  if (stage === "s"){
    if (teamPair >= 1 && teamPair <= 2 ) {
      selectedTeam(stage, teamPair, "f", 1);
    } else if (teamPair >= 3 && teamPair <= 4) {
      selectedTeam(stage, teamPair, "f", 2);
    }
  }

  let numberOfClearTeams = 0;

  listOfButtons.map((button)=>{
    if (document.getElementById(button).innerText === "") {
      numberOfClearTeams++;
    };
  })
  if (numberOfClearTeams === 0 ) {
    confirmBtn.classList.add("confirm-btn-active");
    confirmBtn.removeAttribute("disabled");
  }
}

// Change Background
const changeBackground = (stage, teamPair) => {
  let nextNumberItem = Number(teamPair) + 1;
  let button = document.getElementById(`${stage}-t-${teamPair}`);
  let prevButton = document.getElementById(`${stage}-t-${teamPair - 1}`);
  let nextButton = document.getElementById(`${stage}-t-${nextNumberItem}`);
  if (teamPair % 2 !== 0) {
    button.classList.add("active");
    nextButton.classList.remove("active");
  } else {
    button.classList.add("active");
    prevButton.classList.remove("active");
  }
}

// Select a team
const selectedTeam = (stage, teamPair, nextStage, nextPair, finalStage, finalPair) => {
  let buttonText = document.getElementById(`${stage}-t-${teamPair}`).innerHTML;
  let nextButton = document.getElementById(`${nextStage}-t-${nextPair}`);
  let finalButton;
  if ( finalStage && finalPair ) {
    finalButton = document.getElementById(`${finalStage}-t-${finalPair}`);
    if (finalButton.innerText !== "") {
      finalButton.innerText = "";
      finalButton.classList.remove("active");
      finalButton.setAttribute("disabled", "disabled");
    }
  }

  nextButton.innerHTML = buttonText;
  nextButton.removeAttribute("disabled");
}


// Confirm Changes Button
let confirmBtn = document.getElementById("confirm-changes");
confirmBtn.addEventListener("click", () => handleConfirmBtn());

const handleConfirmBtn = () => {
  // console.log("click");
  // Disable buttons
  listOfButtons.map((button)=>{
    document.getElementById(button).setAttribute("disabled", "disabled");
  });

  // create an array of team places
  listOfButtons.map((button) => {
    let buttonElement = document.getElementById(button);
    
    if (confirmedListOfTeams.includes(document.getElementById(button).innerText)) {
      return
    }

    if (buttonElement.classList.contains("active")) {
      confirmedListOfTeams.unshift(document.getElementById(button).innerText)
    } else {
      confirmedListOfTeams.push(document.getElementById(button).innerText)
    }    
  })

  // compare arrays
  // console.log(resultOfCup);
  // console.log(confirmedListOfTeams);

  for (let index = 0; index < 8; index++) {
    if (resultOfCup[index] === confirmedListOfTeams[index]) {
      correctPick.push(index);
    }
  }
  
}

function handleSubmitForm(e) {
  e.preventDefault();
  let emailInputValue = document.getElementById("email").value;

  let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailValidation = regExp.test(emailInputValue);

  if (emailValidation) {
    document.getElementById("email").classList.remove("wrong-email");
    let bet = {
      email: emailInputValue,
      correctPick: correctPick,
      choiceListOfTeams: confirmedListOfTeams,
      resultOfCup: resultOfCup 
    };
    addToDB(bet);
    document.getElementById("success-send").classList.add("success-send-active");
  } else {
    document.getElementById("email").classList.add("wrong-email");
  }
}

const form = document.getElementById('email-form');
form.addEventListener('submit', handleSubmitForm);