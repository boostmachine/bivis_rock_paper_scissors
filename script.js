"use strict";

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Choose Rock/Paper/Scissors")
  return (choice.toLowerCase())
}

let humanScore = 0;
let computerScore = 0;

function playRound(computer, human) {
  let computerChoice = computer
  let humanChoice = human
  if(computerChoice === humanChoice) {
    return console.log("Draw")
  } else if(computerChoice === "rock" && humanChoice === "scissors") {
    computerScore ++
    return console.log("Computer wins")
  } else if(computerChoice === "scissors" && humanChoice === "paper") {
    computerScore ++
    return console.log("Computer wins")
  } else if(computerChoice === "paper" && humanChoice === "rock") {
    computerScore ++
    return console.log("Computer wins")
  } else {
    humanScore ++
    return console.log("Human wins")
  }
}
function playGame(a) {
  for(let i = 0; i < a; i++) {
    playRound(getComputerChoice(), getHumanChoice())
  }
  if(humanScore > computerScore) {
    console.log(`Human wins with ${humanScore} vs ${computerScore}`)
  }else if(computerScore > humanScore) {
    console.log(`Computer wins with ${computerScore} vs ${humanScore}`)
  } else {
    console.log(`It's DRAW ${humanScore} vs ${computerScore}`)
  }
}

playGame(5)