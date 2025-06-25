"use strict";

// Game variables;
let humanScore = 0;
let computerScore = 0;
let rounds = 1;
const maxRounds = 5;

// DOM elements
const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const divHumanScore = document.querySelector(".humanScore");
const divComputerScore = document.querySelector(".computerScore");
const divRoundResult = document.querySelector(".roundResult");
const divFinalMessage = document.querySelector(".finalMessage");

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

function getHumanChoice(choice) {
  return choice.toLowerCase()
}

function scoreUpdate() {
  divHumanScore.textContent = `Player: ${humanScore}`
  divComputerScore.textContent = `Computer: ${computerScore}`
  }

function roundDraw() {
  divRoundResult.textContent = `round#${rounds}/${maxRounds} It's draw!`
  scoreUpdate()
}

function roundComputer() {
  divRoundResult.textContent = `round#${rounds}/${maxRounds} Computer wins this round.`
  scoreUpdate()
}

function roundHuman() {
  divRoundResult.textContent = `round#${rounds}/${maxRounds} Human wins this round.`
  scoreUpdate()
}


function playRound(computer, human) {
  let computerChoice = computer
  let humanChoice = human
  if(computerChoice === humanChoice) {
    // return console.log("Draw")
    roundDraw()
  } else if(computerChoice === "rock" && humanChoice === "scissors") {
    computerScore ++
    // return console.log("Computer wins")
    roundComputer()
  } else if(computerChoice === "scissors" && humanChoice === "paper") {
    computerScore ++
    // return console.log("Computer wins")
    roundComputer()
  } else if(computerChoice === "paper" && humanChoice === "rock") {
    computerScore ++
    // return console.log("Computer wins")
    roundComputer()
  } else {
    humanScore ++
    // return console.log("Human wins")
    roundHuman()
  }
  if (!checkGameOver()) {
    rounds ++;
  }
}

function checkGameOver() {
  if (rounds >= maxRounds) {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
      if(humanScore > computerScore) {
      divFinalMessage.textContent = `Human wins with ${humanScore} vs ${computerScore}`
      } else if(computerScore > humanScore) {
        divFinalMessage.textContent = `Computer wins with ${computerScore} vs ${humanScore}`
      } else {
        divFinalMessage.textContent = `It's DRAW ${humanScore} vs ${computerScore}`
      }
    return true
  }
  return false;
}

// btnRock.addEventListener("click", () => getHumanChoice("rock"));

btnRock.addEventListener("click", () => {
  playRound(getComputerChoice(), getHumanChoice("Rock"))
})

btnPaper.addEventListener("click", () => {
  playRound(getComputerChoice(), getHumanChoice("Paper"))  
})

btnScissors.addEventListener("click", () => {
  playRound(getComputerChoice(), getHumanChoice("Scissors"))  
})


/* 

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
