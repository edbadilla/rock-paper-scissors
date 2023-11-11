// create a function to get a random computer's choice
const choices = ['rock', 'paper', 'scissors'];
const player = prompt("Elije entre 'rock', 'paper' o 'scissors'").toLowerCase();

const getComputerChoice = () => {
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
// console.log(getComputerChoice(choices));
let playerScore = 0;
let computerScore = 0;
// create a function to get user's choice
const play = (playerSel, computerSel) => {
    
    if (playerSel === computerSel) {
        return 'Tie';
    }
    if (playerSel === 'paper' && computerSel === 'rock') {
        // playerScore ++;
        return 'You win! Paper beats rock';
    } else if (playerSel === 'paper' && computerSel === 'scissors') {
        // computerScore++;
        return 'You lose! Scissors beats Paper';
    } else if (playerSel === 'rock' && computerSel === 'paper') {
        computerScore++;
        return 'You lose! Paper beats rock';
    } else if (playerSel === 'rock' && computerSel === 'scissors') {
        // playerScore ++;
        return 'You win! rock beats Scissors';
    } else if (playerSel === 'scissors' && computerSel === 'rock') {
        // computerScore++;
        return 'You lose! rock beats Scissors';
    } else if (playerSel === 'scissors' && computerSel === 'paper') {
        // playerScore ++;
        return 'You win! Scissors beats Paper';
    }
}


// console.log(play(player,getComputerChoice()));


const game = () => {
    for (let i = 0; i < 5; i++) {
        return play(player,getComputerChoice());
         
    }

    console.log(playerScore);
    console.log(computerScore);
    


}
console.log(game());