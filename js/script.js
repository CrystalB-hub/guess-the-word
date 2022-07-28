const guess= document.querySelector(".guessed-letters");
const guessButton= document.querySelector(".guess");
const letterGuess= document.querySelector("input");
const wordInProgress= document.querySelector(".word-in-progress");
const remaining= document.querySelector(".remaining");//remaining Guesses p
const numRemGuesses= document.querySelector("span");//number of remaining guesses
const message= document.querySelector(".message");//empty paragraph when player guesses
const playAgain= document.querySelector(".play-again");//button

let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
  const res = await fetch(
    "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt"
  );
  const words = await res.text();
  const wordArray = words.split("\n");
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  word = wordArray[randomIndex].trim();
  progress(word);
};

getWord();

//function to show dots in place of letters in word to guess
const progress = function (word) {
  const placeholder= [];
  for (const letter of word) {
    //console.log(letter);
    placeholder.push("●");
  }
  wordInProgress.innerText = placeholder.join("");
};

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";
    const inputLetter = letterGuess.value;   
    const validInput = validateInput(inputLetter);
    if (validInput) {
      makeGuess(inputLetter);
    }
    letterGuess.value = "";   
  });

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
    else if (input != input.match(acceptedLetter)) {
      //if they input something other than a letter
    message.innerText = "Please choose a letter A-Z.";
  }
    else {
      //correct input
    return input;
  };
};

//function to capture input
const makeGuess = function (inputLetter) {
  inputLetter = inputLetter.toUpperCase();
  if (guessedLetters.includes(inputLetter)) {
    message.innerText = "You already guessed this letter, please pick a new one!";
  } else {
    guessedLetters.push(inputLetter);
    console.log(guessedLetters);
    showGuessedLetter();
    countRemainingGuesses(inputLetter);
    showWordInProgress(guessedLetters);
  }; 
};

//function to update page with player guesses
const showGuessedLetter = function () {
  guess.innerHTML = "";
  for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guess.append(li);
  }
};

//function to update word in progress
const showWordInProgress = function(guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const showWord = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
    showWord.push(letter.toUpperCase());
  } else {
    showWord.push("●");
  }
}
wordInProgress.innerText = showWord.join("");  
checkWin();
};

//function to count remaining guesses
const countRemainingGuesses = function (guess) {
  const upperWord = word.toUpperCase();
  if (!upperWord.includes(guess)) {
    message.innerText = `Sorry, there is no letter "${guess}" in the word.`;
    remainingGuesses -= 1;
  } else {
    message.innerText = `Congratulations, the letter "${guess}" is in the word!`;
  }

  if (remainingGuesses === 0) {
    message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
    numRemGuesses.innerText = "0 guesses";
  } else if (remainingGuesses === 1) {
    numRemGuesses.innerText = `${remainingGuesses} guess`;
  } else {
    numRemGuesses.innerText = `${remainingGuesses} guesses`;;
  }
};

//function to check winning
const checkWin = function () {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>';
  }
};






 


