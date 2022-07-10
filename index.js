

const playerText = document.getElementById("playertext");
const compText = document.getElementById("comptext");
const resulText = document.getElementById("resultext");

const choice = document.querySelectorAll(".choice");

const rock = document.getElementById("rockbtn");
const paper = document.getElementById("papbtn");
const scissor = document.getElementById("scibtn");


let player;
let computer;
let result;

choice.forEach(button => {
    button.addEventListener('click', () => {

        player = button.textContent;
        computerTurn();

        playerText.textContent = `Player: ${player}`;
        compText.textContent = `Computer: ${computer}`;
        resulText.textContent = checkWinner();

    })
});

function computerTurn(){
    const randNum = Math.floor(Math.random()*3) +1;

    switch(randNum){

        case 1:
            computer = "ROCK"
            break;

        case 2:
            computer = "PAPER"
            break;

        case 3:
            computer = 'SCISSOR'
            break;



    }
};


function checkWinner(){

    if(player == computer){
        return "Barabri"
    }

    else if(computer == "ROCK"){
        return (player == "PAPER") ? "Jeet Gaya Tu" : "AI se Haar Gaya Idiot";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSOR") ? "Jeet Gaya Tu" : "AI se Haar Gaya Idiot";
    }

    else if(computer == "SCISSOR"){
        return (player == "ROCK") ? "Jeet Gaya Tu" : "AI se Haar Gaya Idiot";
    }



}






