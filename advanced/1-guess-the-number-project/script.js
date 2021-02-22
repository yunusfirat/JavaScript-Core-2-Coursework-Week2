function randomNumber() {
  let num = Math.floor(Math.random() * 100);
  return num
}
console.log(randomNumber);
console.log(randomNumber);
function guessNumber() {
  //Collect input from the user
  const guess = document.querySelector(".inputs-Values").value;
  console.log(guess);
  const printAlert = document.querySelector(".final-output");
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess < 1 || guess > 100 || guess == null) {
    alert("Please enter a number between 1 and 100");
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    printAlert.innerHTML = "Number is too high, try again"
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    printAlert.innerHTML = "Number is too low, try again"
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else {
    printAlert.innerHTML = `random is ${randomNumber} Guess is correct. You win!`
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber();
  //Reset users input field
  //   const inputValues = document.querySelector("btnNewGame");
  //   inputValues.addEventListener('click', function (){
  //     inputValues.value = "";
  // })

  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
