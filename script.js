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
    // while (playerScore <= 5 && computerScore <= 5){
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
// }
//create a function to play 5 games and output scores
// const game = () => {
//     for (let i = 0; i < 5; i++) {
//         const player = prompt("Elije entre 'rock', 'paper' o 'scissors'").toLowerCase();
//         console.log(play(player,getComputerChoice()));
//     }
//     return console.log(`Puntaje del jugador: ${playerScore} \nPuntaje de la maquina: ${computerScore}`)
// };
// game();

//Functions for UI
// const btnrock = document.querySelector('#rock');
// const btnpaper = document.querySelector('#paper');
// const btnscissors = document.querySelector('#scissors');
// 

// const ui = (result) => {
//     contenedor.textContent = result;
//     let p = document.createElement('p');
//     contenedor.appendChild(p);
//     if (playerScore < 5 && computerScore < 5) {
//         p.textContent = `Puntaje del jugador: ${playerScore} \nPuntaje de la maquina: ${computerScore}`;
//     } else if (playerScore > computerScore) {
//         p.textContent = 'Jugador Gana';
//     } else {
//         p.textContent = 'PC Gana';
//     }
// }
// btnrock.addEventListener('click', () => {
//     let result = play('rock',getComputerChoice());
//     ui(result);
// });
// btnpaper.addEventListener('click', () => {
//     let result = play('paper',getComputerChoice());
//     ui(result);
// });
// btnscissors.addEventListener('click', () => {
//     let result = play('scissors',getComputerChoice());
//     ui(result);
// });

const contenedor = document.querySelector('div');
const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let result = play(btn.textContent.toLowerCase(),getComputerChoice());
        contenedor.textContent = result;
        let p = document.createElement('p');
        contenedor.appendChild(p);
        if (playerScore < 5 && computerScore < 5) {
            p.textContent = `Puntaje del jugador: ${playerScore} Puntaje de la maquina: ${computerScore}`;
        } else if (playerScore > computerScore) {
            p.textContent = 'Player wins';
            disableButtons();
            const text = document.createTextNode(' — Refresh the webpage to play again!.');
            p.appendChild(text);
        } else {
            p.textContent = 'PC wins';
            disableButtons();
            const text = document.createTextNode(' — Refresh the webpage to play again!.');
            p.appendChild(text);
        }
    });
});


const disableButtons = () => {
    btns.forEach(btn => {
        btn.disabled = true;
    });
}
