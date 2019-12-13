
 let randomNumber = Math.floor(Math.random() * 3 + 1);


function getMoveName(argMoveId) {
  if (argMoveId == "1") {
	  return 'kamień';
  } else if (argMoveId == "2"){
return "papier";
   } else if (argMoveId == "3"){
 return "nożyce";
    } else 
 return "nieznany ruch";
  }



let argComputerMove = getMoveName(randomNumber);

printMessage("Wylosowana liczba to: " + randomNumber);


/* if (randomNumber == 1) {
	computerMove = 'kamień';
} else if ( randomNumber ==2) {
	computerMove ="papier"
} esle {
	computerMove ='nozyce';
}
printMessage('Mój ruch to: ' + computerMove);*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(randomNumber);

/*if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else {
  playerMove = "nożyce";
}
*/

printMessage("Twój ruch to: " + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
  if (argComputerMove == "kamień" && argPlayerMove == "papier") {
    printMessage("Ty wygrywasz");
  } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
    printMessage("Komputer wygrywa");
  } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
    printMessage("Komputer wygrywa");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
    printMessage("Komputer wygrywa");
  } else if (argComputerMove == argPlayerMove) {
    printMessage("Remis");
  } else if (
    argComputerMove == "papier" && argPlayerMove != 1 && argPlayerMove != 2 && argPlayerMove != 3
  ) {
    printMessage("Nieznany ruch");
  } else if (
    argComputerMove == "kamień" &&
    argPlayerMove != 1 && argPlayerMove != 2 && argPlayerMove != 3
  ) {
    printMessage("Nieznany ruch");
  } else if (
    argComputerMove == "nożyce" &&
    argPlayerMove != 1 && argPlayerMove != 2 && argPlayerMove != 3
  ) {
    printMessage("Nieznany ruch");
  } else {
    printMessage("Ty wygrywasz");
  }

};


