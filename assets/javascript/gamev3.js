var movieChoices= [ //creating the word choice array
    {word:"step brothers", 
     image: "./assets/images/stepbrothers.jpg"},//0
     
     {word: "elf",
     image: "./assets/images/elf.jpg"},//1

     {word: "old school",
     image:"./assets/images/old school.jpg" },//2

     {word:"get hard",
     image:  "./assets/images/gethard.jpg"},

     {word: "the campaign",
     image:  "./assets/images/The Campaign Movie.jpg"},

     {word: "anchorman", 
     image:"./assets/images/anchorman.jpg" },

     {word: "stranger than fiction",
      image: "./assets/images/strangerthanfiction.jpg"},

    {word: "superstar",
    image: "./assets/images/superstar.jpg"},

    {word: "talladega nights",
    image: "./assets/images/talladeganights.jpg"}]
//start game
var gameStatus = false;


//Generate randomMovie
var randomMovie = Math.floor(Math.random() * movieChoices.length);

var movieChosen = movieChoices[randomMovie].word;
var movieImage = movieChoices[randomMovie].image;

//set lettersRemaining to the length of the movie title chosen 
var lettersRemaining = movieChosen.length;

//stores the answer
var answerArray = []; 

//create onkey event
document.onkeyup = function (event){
    //game starts, carry out the event function
    if(gameStatus) {
        letterCheck(event);
    } else {
    //start process over via init
        init();
    }
};

function startGame(){
      //reset
      lettersRemaining = movieChosen.length;

      //reset
      guessesLeft = 9;
      displayGuessesLeft()
  
      //reset
      incorrectGuessesMade = [];
      displayGuessesMade()
      
      //reset
      displayCurrentWord();
  
      //reset
      displayImage();
  

      startGame();
}

//users guessing choices to eliminate possiblity of pressing non letter keys
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function letterCheck(event) {
    if (alphabetArray.indexOf(event.key) > -1) { //what is <-1 again?
        correctGuessCheck(event);
    }
}

//Check whether the guess is correct
var winScore = 0;
function correctGuessCheck(event) {
    if (movieChosen.indexOf(event.key) > -1) {
        //if guess is correct, run correctGuess function.
        correctGuess(event);
    } else {
        //If guess is incorrect, run incorrectGuess function.
        incorrectGuess(event);
    }
}
//if the key the player guesses is correct then run function addCorrectLetter
function correctGuess(event) {
    if (answerArray.indexOf(event.key.toUpperCase()) < 0) {
        addCorrectLetter(event);
    }
}

function addCorrectLetter(event) {
    for (var j = 0; j < movieChosen.length; j++) { //while j is set to zero and is less than the length of the array do the stuff inside until it is the length of the array
        //If guess matches an existing letter in the answer.
        if (event.key === movieChosen[j]) {
            answerArray[j] = event.key.toUpperCase();
            displayCurrentWord();
            //subtract letter to guess remaining if user guesses one right
            lettersRemaining--;
            //If letters left has reached 0, user wins. 
            if (lettersRemaining === 0) {
                //Add 1 to win score.
                winScore++;
                //Display new win score.
                displayWins();
                         
            }
        }
    }
}

var incorrectGuessesMade = [];
var guessesLeft = 9;

function incorrectGuess(event) {
    if (incorrectGuessesMade.indexOf(event.key.toUpperCase()) < 0) {
        addIncorrectLetter(event);
    }
}

function addIncorrectLetter(event) {
    //Push incorrect guess into the incorrectGuessesMade array
    incorrectGuessesMade.push(event.key.toUpperCase());
    //show user incorrectGuessesMade
    displayGuessesMade();
    //subtract from guessesLeft
    guessesLeft--;
    //show guessesLeft
    displayGuessesLeft();
    if (guessesLeft === 0) {
        displayAnswer();
    }
}

//define functions to display info 

function displayWins() {
    var winsDisplay = document.querySelector("#wins");
    winsDisplay.textContent = winScore;
}


//display letters guessed so far that are wrong
function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#wrong-guesses");
    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}

//Displays how many guesses are left
function displayGuessesLeft() {
    var guessesLeftDisplay = document.querySelector("#guesses-left");
    guessesLeftDisplay.textContent = guessesLeft;
}

//Displays the blanks
function displayCurrentWord() {
    var currentWordDisplay = document.querySelector("#blank-spaces");
    currentWordDisplay.innerHTML = answerArray.join(" ");
}

//Displays image
function displayImage() {
    var pictureDisplay = document.querySelector("#movie-img");
    pictureDisplay.src = movieImage;
}


//Reveals answer if user is unable to solve.
function displayAnswer() {
    var revealedAnswerDisplay = document.querySelector("#reveal-answer");
    revealedAnswerDisplay.textContent = movieChosen.toUpperCase();
}


//define function init for restarting the game after a loss or win
function init() {
    //Changes gameStatus to ready.
    gameStatus = true;
    
    //reset
    randomMovie = Math.floor(Math.random() * movieChoices.length);
    
    //reset
    movieChosen = movieChoices[randomMovie].word;
    var movieImage = movieChoices[randomMovie].image

    //reset
    lettersRemaining = movieChosen.length;

    //reset
     answerArray = []; 

    
    for (var i = 0; i < movieChosen.length; i++) {
        //If an answer has more than one word, use + as a separator. A space will be displayed when currentWord is displayed. 
        //copied this from slackoverflow but no idea what it means or if it's working 
        if (movieChosen[i] === "+") {
            answerArray[i] = "&nbsp;";
        } else {
            //Replace word answer with "_"s
            answerArray[i] = "_";
        }
    }

    //reset

    lettersRemaining = movieChosen.length;

    //reset
    guessesLeft = 9;
    displayGuessesLeft()

    //reset
    incorrectGuessesMade = [];
    displayGuessesMade()
    
    //reset
    displayCurrentWord();

    //reset
    displayImage();



    


}