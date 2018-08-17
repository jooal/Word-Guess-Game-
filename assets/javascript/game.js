
var movieChoices= [ //creating the word choice array
    "Step Brothers", //0
    "Elf", //1
    "Daddy's Home",//2
    "Old School",//3
    "Get Hard",//4
    "The Campaign",//5
    "Anchorman",//6
    "Stranger than Fiction",//7
    "Superstar",//8
    "Talladega Nights"//9
    ];

var images = [ //create array for pictures 
    "./assets/images/stepbrothers.jpg",
    "./assets/images/elf.jpg",
    "./assets/images/dadyshome.jpg",
    "./assets/images/old school.jpg",
    "./assets/images/gethard.jpg",
    "./assets/images/The Campaign Movie.jpg",
    "./assets/images/anchorman.jpg",
    "./assets/images/strangerthanfiction.jpg",
    "./assets/images/superstar.jpg",
    "./assets/images/talladeganights.jpg"
];


var randomMovie = ""; //random movie selected 
var lettersInWord= [];// letters in the random movie selected 
var blanks = 0; //the number of blanks to match the letters -->numbblanks
var rightGuess = [] //stores right letters guessed --> blankssuccess
var wrongGuess = [];//stores wrong letters guessed
letterGuessed = [];//users guess


var wins = 0; //counts wins
var losses = 0;  // counts losses
var guessesLeft = 9; //counts guesses left 

//images wrap this in a function, then call it in startGame or create an array?? 
//function matchImage(element){}

// imageMatch(movieChoices[0])= ("./assets/images/stepbrothers.jpg")
// imageMatch(movieChoices[1])=("./assets/images/elf.jpg")
// imageMatch(movieChoices[2])=("./assets/images/dadyshome.jpg")  



function startGame () { //creating function startGame
    guessesLeft=9; //starts player off with 9 guesses
    wrongGuess=[]; // sets wrongGuess at zero/blank
    rightGuess=[]; //sets rightGuess at zero/blank

        randomMovie = movieChoices[Math.floor(Math.random()*movieChoices.length)]; //selects random movie from moivechoices array
        lettersInWord = randomMovie.split (""); //splits random movie into characters
        console.log(lettersInWord)
        blanks = lettersInWord.length; //set number of blansk to number of letters 
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
function checkLetters (letterGuessed){
    var isGuessCorrect = false; // this is boolean set to false to prove if letter is in word or not
    for (var i = 0; i < lettersInWord; i++){ //loop will run as long as [i] is less than the length of letters in the movie being guessed
        if (lettersInWord[i] === letterGuessed) { // if the letter index of the randomMovie selected is = to the letter guessed, letterIsInWord is true 
            isGuessCorrect = true;
            console.log("You guessed a right letter" + lettersInWord[i])
            console.log(isGuessCorrect); //store if letter is in word

        }
    }

//
 if (isGuessCorrect) { //if isGuessCorrect is true then ...
  for (let i=0; i<blanks; i++) { //...run this loop
    if (letterGuessed === lettersInWord) {//if the letter guessed is lettersInWord, then the letter gets stored in rightGuess
            rightGuess.push(letterGuessed); 
         }
       console.log(rightGuess); //store the right guess
     }
 } else { //if isGuessCorrect is not true
      guessesLeft --; //subtract a guess
      wrongGuess.push(letterGuessed); //push will add the letter guessed to the wrongGuess pile displayed for user
}
     console.log(wrongGuess);//store the wrong guess 
}

function roundComplete (){
    document.getElementById("blank-spaces").innerHTML = rightGuess.join(" ");//replaces "blank-spaces" with the value of rightGuess 
    document.getElementById("guesses-left").innerHTML = guessesLeft; //updates guesses left
    document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" ");//updates wrong guesses with letter and space

    

    if (lettersInWord.join(" ") === rightGuess.join(" ")) { //if letter is in the word = right guess then add a win
        wins ++
        alert("You win!");
        document.getElementById("wins").innerHTML= wins++; //updates win in html
        roundComplete(); //calls function roundComplete which will update all the scores
    }else if (guessesLeft === 0) { //no guesses left, you lose
        document.getElementById("guesses-left").innerHTML=losses++; //run out of guesses, add to losses
        document.getElementById("wrong-guess").innerHTML=" ";
        alert("You don't have anymore guesses left");
        roundComplete(); //calls function roundComplete which will update all the scores
    }
};

  // This function is run whenever the user presses a key. this is the actual order of the game functions
document.onkeyup= function(event) {
    var letterGuessed = event.key;
    console.log(letterGuessed);
        //if (letterGuessed=== number) { //if player types number
        //    alert ("That is not a letter. Try again")
        //} else {
        checkLetters(letterGuessed); //calls function checkLetters and applies it to letterGuessed
        
    // roundComplete(); //calls function roundComplete which will update all the scores
}



var reloadGame = function(event) {
    var startButton = document.getElementById("start");
    startGame();
}

