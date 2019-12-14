
 


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

  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let argComputerMove = getMoveName(randomNumber);
printMessage('Ruch komputera to: '+ argComputerMove);

let argPlayerMove = getMoveName(playerInput);
console.log('Gracz wpisał: ' + playerInput);
printMessage('Twój ruch to: '+ argPlayerMove);



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

}
displayResult(argComputerMove, argPlayerMove)


