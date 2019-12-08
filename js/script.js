let computerMove ='kamień';
let playerMove = 'papier';

function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem'+ playerMove + '! Jeśli Twój ruch to nożyczki, to wygrywasz!');