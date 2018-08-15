var movieChoices= [ //creating the word choice array
    "The Big Sick", 
    "21 Jumpstreet",
    "The Other Guys",
    "Valentine's Day",
    "Juno",
    "13 Going On 30",
    "Mad Max",
    "Baby Driver",
    "Inception",
    "The Shining"
    ];

var randomMovie = ""; //when select word at random from the wordList

var letterIsInWord = []; //word that is played on is going to break it up into letters

var blanks = 0; //will hold the number of letters in the word

var rightGuess = []; //will store the right or wrong letters. stores underscores or letters

var wrongGuess = []; //stores the wrong letter guesses

var wins = 0;
var losses = 1;
var guessesLeft = 9; //only have 9 lives

//var pressStart = "";

//var hangmanImg = [];



/*
    1. select a word at random
    2. want to break up that random word into letters and replace them with underscores
    3. we want to add those underscores to the HTML
    4. numguesses always equals 9, and blankandsuccess is an empty array. and wrongguesses is empty as well
    */


function startGame() { 
    guessesLeft = 9;
    rightGuess = []; //makes empty at start
    wrongGuess= []; //makes empty at start

	randomMovie= movieChoices[Math.floor(Math.random() * movieChoices.length)];
	letterIsInWord = randomMovie.split("");
	blanks = letterIsInWord.length;
	console.log(randomMovie);
	console.log(blanks);

	for (var i = 0; i < blanks; i++) {
	    rightGuess.push("_");
	}
	console.log(rightGuess);
	document.getElementById('blank-spaces').innerHTML = rightGuess.join(" ");
	document.getElementById('guesses-left').innerHTML = guessesLeft;
    document.getElementById('wrong-guesses').innerHTML = wrongGuess.join(" ");

};

function checkLetters(letter){ //function that gets input from the user
    
    var letterInWord = false;
//1. Compare the letter the user picks matches any of the letters in the word
//2. I want a conditional statement to determine if the letter the user picked is in the word. If so, do something, if not, do something else.
    for(var i = 0; i < blanks; i++){
        if (randomMovie[i] === letter){
            letterInWord = true;

        }
    }
//will only run if above for loop is true
    if(letterInWord){
        for (i = 0; i < blanks; i++) {
            if (randomMovie[i] === letter) {
                rightGuess[i] = letter;
            }
            console.log("inside our checkletter function", rightGuess);
        }
        //3. If the user is wrong we want to decrease the numGuesses variables by one
    }else{ //if letter is wrong
        guessesLeft --;
        wrongGuess.push(letter);
    }
    console.log("our wrong guesses inside our checkletter function", wrongGuess);
};
/* to check if a letter is already in teh wrong guesses array. set up an if/else conditional that will run a for loop that will iterate ocer all teh letters and then use the if/else to check if it already exists. 
 */

function roundComplete() {
    /*
    1. Its going to update the HTML with the letters that are in the word
    2. Its going to update the HTML with guesses we have left
    3. Its going to update the HTML to show the wrong guesses
    4. Its going to determine whether the user won the game or not
    */
    document.getElementById('blank-spaces').innerHTML = rightGuess.join(" ");
    document.getElementById('guesses-left').innerHTML = guessesLeft;
    document.getElementById('wrong-guesses').innerHTML = wrongGuess.join(" ");



        console.log(letterIsInWord);
        console.log(rightGuess);
    	if(letterIsInWord.join(" ") === rightGuess.join(" ")){
    		wins++;
    		alert("You win!!");
    		document.getElementById('wins').innerHTML = wins;
    		startGame();
    	}else if(guessesLeft === 0){
    		document.getElementById('losses').innerHTML = losses++;
    		document.getElementById('wrong-guesses').innerHTML = " ";
    		alert("you don't have anymore guesses left");
            startButton.style.visibility = "visible";
    		//startGame();

    	}


    

};
    startGame(); 
    
    document.onkeyup = function(){
        
        
            //alert("press any key to start");
            //console.log("starting game", startGame);
            /*var anyLetter = String.fromCharCode(event.keyCode).toLowerCase();
            alert ("Press any key to start");*/

        /*
        1. its going to take in the letter that we type in
        2. its going to pass it through the CheckLetter function
        */
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("this is the letter we type", letterGuessed);
        checkLetters(letterGuessed);
        roundComplete();


        
            

};

var reloadPage = function() {
    var playButton = document.getElementById('start');
    startButton.style.visibility = "hidden";
    startGame();
}
