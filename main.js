let heading = document.getElementById('#heading');
let player1 = document.getElementById('#player-1');
let player2 = document.getElementById('#player-2');

function play() {
    const player1Chance = Math.floor(Math.random() * 6) + 1;
    const player2Chance = Math.floor(Math.random() * 6) + 1;

    player1.src = './images/dice' + player1Chance + '.png';
    player2.src = './images/dice' + player2Chance + '.png';

    debugger;
    if (player1Chance > player2Chance) {
        heading.innerHTML = '🚩 Player 1 Wins!'
    } else if (player1Chance < player2Chance) {
        heading.innerHTML = 'Player 2 Wins! 🚩'
    } else {
        heading.innerHTML = 'It is a tie. Play Again!'
    }
}