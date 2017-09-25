	$(document).ready(function(){

	var wins = 0;
	var losses = 0;
	var score;

	var minNumber = 19;
	var maxNumber = 120;
	var numberToGuess;

	var crystalMaxNumber = 12;
	var crystalMinNumber = 1;
	var crystalRandomNumber;

	function startGame() {
		score = 0;

		numberToGuess = randomNumberFromRange(minNumber, maxNumber);
		$('#randomNumber').html(numberToGuess);

		$('.crystals').each(function (index, crystalButton) {
			$(crystalButton).data('value', randomNumberFromRange(crystalMinNumber, crystalMaxNumber));
			$(crystalButton).on('click', onCrystalClicked);
		});
	}

	function onCrystalClicked(e){
		score += $(this).data('value');
		$('#score').html(score);

		if (score < numberToGuess){
			return;
		}


		if (score === numberToGuess) {
			wins++;
			endGame("You won!");
		}

		else {
			losses++;
			endGame("You lost!");
		}
	}

	function endGame(message){
		alert(message);
		$('#wins').html(wins);
		$('#losses').html(losses);
		startGame();
		$('#score').empty();
	}

	function randomNumberFromRange(min, max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	startGame();

	});
