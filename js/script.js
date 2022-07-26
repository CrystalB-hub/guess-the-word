const guessedLetters= document.querySelector(".guessed-letters");
const guessButton= document.querySelector(".guess");
const letterGuess= document.querySelector("input");
const wordInProgress= document.querySelector(".word-in-progress");
const remainingGuesses= document.querySelector(".remaining");//remaining Guesses p
const numRemGuesses= document.querySelector("span");//number of remaining guesses
const message= document.querySelector(".message");//empty paragraph when player guesses
const playAgain= document.querySelector(".play-again");//button
const word = "magnolia";

//function to show dots in place of letters in word to guess
const progress = function (word) {
  const placeholder= [];
  for (const letter of word) {
    console.log(letter);
    placeholder.push("●");
  }
  wordInProgress.innerText = placeholder.join("");
};
progress(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";
    const inputLetter = letterGuess.value;
    console.log(inputLetter);    
    const validInput = validateInput(inputLetter);
    console.log(validInput);
    letterGuess.value = "";    
  })

//validate players input function
const validateInput =  function(input){
  const acceptedLetter = /[a-zA-Z]/;
    //if no user input
    if (input.length === 0) {
    message.innerText = "Please enter a letter!";
  }
    else if (input.length > 1) {
      //if user enters multiple letters
    message.innerText = "Please enter only one letter.";
  }
    else if (input.match(acceptedLetter)) {
      //if they input something other than a letter
    message.innerText = "Please choose a letter A-Z.";
  }
    else {
      //correct input
    return input;
  };
};



 


