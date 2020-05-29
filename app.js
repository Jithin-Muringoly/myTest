const startGameBtn = document.getElementById('start-game-btn');
function startGame(){
    isgameOn=true;
    console.log('Game started');
    const playerSelection=getPlayerChoice();
    console.log(playerSelection);
}

const ROCK='ROCK';
const SCISSORS='SCISSORS';
const PAPERS='PAPERS';
const defaultChoice=ROCK;
let isgameOn=false;

function getPlayerChoice(){

    const selection=prompt(`${ROCK}, ${PAPERS} or ${SCISSORS}`,'').toUpperCase();
    console.log(selection);
    if(
        selection !== ROCK &&
        selection !==PAPERS &&
        selection !== SCISSORS
    ){alert(`invalid selection. System has chose ${ROCK} for you`);
    return defaultChoice;}

    //alert(`you have selected ${selection}`);
    return selection;

};


startGameBtn.addEventListener('click',startGame);