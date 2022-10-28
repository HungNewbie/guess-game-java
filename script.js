let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  //random number between 0 and 9
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (huGuess, comGuess, secretNum) => {
  if (huGuess < 0 || huGuess >= 10) {
    window.alert("Error: input number must be positive and less than 10");
    end;
  }
  //Math.abs function return the positive number output regardless of whether the number is positive or negative
  //The smaller this number is, the better. One with smaller difference win, since it is closer to the secret number
  const huDifference = Math.abs(secretNum - huGuess);
  const comDifference = Math.abs(secretNum - comGuess);
  return huDifference <= comDifference;
};


const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
