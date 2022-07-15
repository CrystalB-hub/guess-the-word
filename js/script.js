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
    const inputLetter = letterGuess.value;
    console.log(inputLetter);
    letterGuess.value = "";
})