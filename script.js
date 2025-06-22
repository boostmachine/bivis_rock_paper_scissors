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
/* 
function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

function sumOfTripledEvens2(array) {
  return array 
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}


camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


function camelize(string) {
  return string.toLowerCase()
    .split("-")
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join("");
}


function filterRange(array, a, b) {
  return array
    .filter(item => (a <= item && item <= b));
}
 */
