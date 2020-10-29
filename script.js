var lastGuess = document.getElementById('last-guess');
var score = document.getElementById('score-num');
var highScore = document.getElementById('current-highscore');
var randomNumber = Math.floor((Math.random() * 20) + 1);

function newGame() {
	document.getElementById('play-again').addEventListener('click', function() {
		randomNumber = Math.floor((Math.random() * 20) + 1);
		document.getElementById('check-guess').disabled = false;
		score.innerText = 20;
		lastGuess.value = '?';
		document.getElementById('guessed-number').innerText = '?';
	});

}

function updateDisplay() {
	var displayNum = lastGuess.value;
	//display lastGuess in main display area
	if (Number(score.innerText) > 0 && lastGuess.value <= 20 && lastGuess.value >= 1) {
		document.getElementById('guessed-number').innerText = displayNum;	
	}
}
function updateScore() {
	if (Number(score.innerText) > 0 && lastGuess.value <= 20 && lastGuess.value >= 1) {
		var updatedScore = Number(score.innerText) - 1;
		score.innerText = updatedScore;
	} else if (lastGuess.value > 20 || lastGuess.value < 1) {
		alert('please enter a number between 1-20');
	} else if (Number(score.innerText) <= 0) {
		score.innerText = "Sorry, you lose. Please play again!";
	} else {
		alert("Huh, something went wrong!");
	}
}



function randomize() {
	if (lastGuess.value > randomNumber) {
		document.getElementById('guess-action').innerText = "Too High, Guess Lower";
	} else if (lastGuess.value < randomNumber) {
		document.getElementById('guess-action').innerText = "Too Low, Guess Higher";
	} else {
		alert('You Win');
		updatedHighScore = Number(score.innerText);

		if (highScore.innerText < updatedHighScore) {
			highScore.innerText = updatedHighScore;
			document.getElementById('check-guess').disabled = true;
		}

		newGame();
	}
}
//on check-guess click
document.getElementById('check-guess').addEventListener('click', function() {
	updateDisplay();
	//lower score count by one
	updateScore();
	//prompt higher or lower
	randomize();
});



