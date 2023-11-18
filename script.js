// create a function to get a random computer's choice
const choices = ['rock', 'paper', 'scissors'];
const getComputerChoice = () => {
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// declare variables for scores
let playerScore = 0;
let computerScore = 0;

// create a function to compare user's choice with computer choice
const play = (playerSel, computerSel) => {
    if (playerSel === computerSel) {
        return 'Tie';
    }
    if (playerSel === 'paper' && computerSel === 'rock') {
        playerScore = playerScore + 1;
        return 'You win! Paper beats rock';
    } else if (playerSel === 'paper' && computerSel === 'scissors') {
        computerScore = computerScore + 1;
        return 'You lose! Scissors beats Paper';
    } else if (playerSel === 'rock' && computerSel === 'paper') {
        computerScore = computerScore + 1;
        return 'You lose! Paper beats rock';
    } else if (playerSel === 'rock' && computerSel === 'scissors') {
        playerScore = playerScore + 1;
        return 'You win! rock beats Scissors';
    } else if (playerSel === 'scissors' && computerSel === 'rock') {
        computerScore = computerScore + 1;
        return 'You lose! rock beats Scissors';
    } else if (playerSel === 'scissors' && computerSel === 'paper') {
        playerScore = playerScore + 1;
        return 'You win! Scissors beats Paper';
    }
}


//create a function to play 5 games and output scores
const game = () => {
    for (let i = 0; i < 5; i++) {
        const player = prompt("Elije entre 'rock', 'paper' o 'scissors'").toLowerCase();
        console.log(play(player,getComputerChoice()));
         
    }
    return console.log(`Puntaje del jugador: ${playerScore} \nPuntaje de la maquina: ${computerScore}`)
}


game();