
var movieChoices= [ //creating the word choice array
    "Step Brothers", 
    "Elf",
    "Daddy's Home",
    "Old School",
    "Get Hard",
    "The Campaign",
    "Anchorman",
    "Stranger than Fiction",
    "Superstar",
    "Talladega Nights"
    ];

var randomMovie = ""; //random movie selected 
var letterIsInWord= [];// letters in the random movie selected 
var blanks = 0; //the number of blanks to match the letters -->numbblanks
var rightGuess = [] //stores right letters guessed --> blankssuccess
var wrongGuess = [];//stores wrong letters guessed


var wins = 0;
var losses = 0; 
var guessesLeft = 9;

function startGame () { //creating function startGame
    guessesLeft=9; //starts player off with 9 guesses
    rightGuess=[]; // sets wrongGuess at zero/blank
    rightGuess=[]; //sets rightGuess at zero/blank

        randomMovie = movieChoices[Math.floor(Math.random()*movieChoices.length)]; //selects random movie from moivechoices array
        letterIsInWord = randomMovie.split (""); //splits random movie into characters
        blanks = letterIsInWord.length; //set number of blansk to number of letters 
        console.log(randomMovie); //log the movie chosen
        console.log(blanks); //log the number of letters in the word chosen

        for (let i=0; i<blanks; i++) { //if [i] is less than the number of letters in the word, keep running this loop
            rightGuess.push("_"); //add _ 
        }
        console.log(rightGuess); //log rightGuess
        document.getElementById("blank-spaces").innerHTML = rightGuess.join(" "); //joins the right guessed letters together to display for user
        document.getElementById("guesses-left").innerHTML = guessesLeft; //joins the guesses left to dislpay for user
        document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" "); //joins the wrong guessed letters together to display for user
};

//now have to check players letters 
function checkLetters (letter){
    var letterInWord = false; // this is boolean set to false to prove if letter is in word or not
    for (let i=0; i< blanks; i++){ //loop will run as long as [i] is less than the length of letters in the movie being guessed
        if (randomMovie[i]=== letter) { // if the letter index of the randomMovie selected is = to the letter guessed, letterIsInWord is true 
            letterInWord = true;

        }
    }

if (letterInWord) { //if letterIsInWOrd is true then ...
    for (let i=0; i<blanks; i++) { //...run this loop
        if (randomMovie[i]=== letter) {//if the letter guessed is correct, then the letter gets stored in rightGuess
            rightGuess[i]=letter; 
        }
        console.log(rightGuess); //store the right guess
    }
} else { //if the letter is wrong 
    guessesLeft --; //subtract a guess
    wrongGuess.push(letter); //push will add the letter guessed to the wrongGuess pile displayed for user
}
    console.log(wrongGuess);//store the wrong guess 


function roundComplete (){
    document.getElementById("blank-spaces").innerHTML = rightGuess.join(" ");//replaces "blank-spaces" with the value of rightGuess 
    document.getElementById("guesses-left").innerHTML = guessesLeft; //updates guesses left
    document.getElementById("wrong-guess").innerHTML = wrongGuess.join(" ");//updates wrong guesses with letter and space

    console.log(letterIsInWord); //store if letter is in word
    console.log(rightGuess);//store if guess was right
    if (letterIsInWord.join(" ") === rightGuess.join(" ")) { //if letter is in the word = right guess then add a win
        wins ++
        alert("You win!");
        document.getElementById("wins").innerHTML= wins++; //updates win in html
        startGame();//start game over
    }else if (guessesLeft === 0) { //no guesses left, you lose
        document.getElementById("guesses-left").innerHTML=losses++; //run out of guesses, add to losses
        document.getElementById("wrong-guess").innerHTML=" ";
        alert("You don't have anymore guesses left");
       
    }
};

  // This function is run whenever the user presses a key. this is the actual order of the game functions
document.onkeyup= function () {
    var letterGuessed = event.keycode;
        if (letterGuessed=== number) {
            alert ("That is not a letter. Try again")
        } else {
        checkLetters(letterGuessed);} //calls function checkLetters and applies it to letterGuessed
         console.log(letterGuessed);
    roundComplete(); //calls function roundComplete which will update all the scores
};

var reloadGame = function() {}
    var startButton = document.getElementById("start");
    startGame();}

