//Generare un numero random per il giocatore
//Generare un numero random per il computer
//Se è vero che numero giocatore è > di numero computer allora "giocatore hai vinto"


const playerNumber = Math.floor(Math.random() * 5) +1;
console.log('user number:' + playerNumber);

const computerNumber = Math.floor(Math.random() * 5) +1;
console.log('computer number:' + computerNumber);

if(playerNumber > computerNumber){
    console.log('Complimenti hai vinto!');
}else if(playerNumber < computerNumber){
    console.log('Mi dispiace hai perso!');
}else{
    console.log('I due numeri sono uguali! Ripeti');
}






