
{
const playGame = function(playerInput) {
 clearMessages();


  const getMoveName = function(randomNumber) {
    if (randomNumber == 1) {
      return "kamień";
    } else if (randomNumber == 2) {
      return "papier";
    } else if (randomNumber == 3) {
      return "nożyce";
    } else return "nieznany ruch";
  }


  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  const argComputerMove = getMoveName(randomNumber);
  printMessage("Ruch komputera to: " + argComputerMove);

  const argPlayerMove = getMoveName(playerInput);
  console.log("Gracz wpisał: " + playerInput);
  printMessage("Twój ruch to: " + argPlayerMove);

  const displayResult = function(argComputerMove, argPlayerMove) {
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
      argComputerMove == "papier" &&
      argPlayerMove != 1 &&
      argPlayerMove != 2 &&
      argPlayerMove != 3
    ) {
      printMessage("Nieznany ruch");
    } else {
      printMessage("Ty wygrywasz");
    }
  }
  displayResult(argComputerMove, argPlayerMove)
}

document.getElementById('rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('scissors').addEventListener('click', function(){
  playGame(3);
});

}