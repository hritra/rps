//function to get random input from the computer
function computerplay(){
    let choice = Math.floor(Math.random() * 3); //returns a random number form 0 to 2
    let computer = choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors" ;
    return computer;
}
//Score variables
let playScore = 0;
let compScore = 0;
let result;

//function to play the round
function playRound(computerSelection, playerSelection){
    if(playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'paper'){
        if(playerSelection && computerSelection){
            
            if(playerSelection === computerSelection){
                playScore ++;
                compScore ++;
                console.log('Tie game!');
            }
            else if(playerSelection === "rock" && computerSelection === "paper"){
                console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
                compScore ++;
            }
            else if(playerSelection === "paper" && computerSelection === "scissors"){
                console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
                compScore ++;
            }
            else if(playerSelection === "scissors" && computerSelection === "rock"){
                console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
                compScore ++;
            }
            else{
                console.log(`Player wins! ${playerSelection} beats ${computerSelection}`);
                playScore ++;
            }
            console.log(`Player Score: ${playScore}`);  //displays the score for player
            console.log(`Computer Score: ${compScore}`); //displays the score for computer
            
        }else{
            console.log('INVALID!');
        }
    }else{
        console.log("Please choose from rock, paper or scissors!");
    }
}

//main function to play the game and determine the winner
function game(){
    for(let i = 0; i < 5; i++){
        const computerSelection = computerplay();
        const playerSelection = window.prompt("Rock, Paper, Scissors: ").toLowerCase().trim();
        playRound(computerSelection, playerSelection);
    }
    result = playScore === compScore ? "The game is tied!" : playScore > compScore ? "The Player wins the game!": "The computer wins the game!";
    console.log(result);
}
game();