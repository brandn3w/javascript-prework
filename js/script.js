
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
  else if(playerInput== '2'){
	playerMove= 'nożyce';

} else {
	playerMove='papier';

}

printMessage('Twój ruch to: ' + playerMove);

if(computerMove=='kamień' && playerMove =='papier'){
		printMessage('Ty wygrywasz');
} else if 
	(computerMove == "papier" && playerMove =='papier'){
		printMessage('Remis');
	} else if 
	(computerMove =='papier' && playerMove=='kamień'){
		printMessage('Komputer wygrywa');
	} else if 
	(computerMove =='papier' && playerMove=='nożyce'){
		printMessage('Ty wygrywasz');
		}	else if
		(computerMove =='kamień' && playerMove=='nożyce'){
		printMessage('Komputer wygrywa');
	} else if
	(computerMove =='kamień' && playerMove=='kamień'){
		printMessage('Remis');
	} else if 
	(computerMove =='nożyce' && playerMove=='kamień'){
		printMessage('Ty wygrywasz');
	} else if (computerMove =='nożyce' && playerMove=='nożyce'){
		printMessage('Remis');
	} else if (computerMove =='nożyce' && playerMove=='papier'){
		printMessage('Komputer wygrywa');
	} else if (computerMove == 'papier' && playerMove!= ['1', '2', '3']){
		printMessage('Nieznany ruch');
	}else if (computerMove == 'kamień' && playerMove!= ['1', '2', '3']){
			printMessage('Nieznany ruch');
	}else
	(computerMove == 'nożyce' && playerMove!= ['1', '2', '3'])
				printMessage('Nieznany ruch');
	