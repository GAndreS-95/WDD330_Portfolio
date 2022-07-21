// Game variables
const board = document.querySelector('.board');
const resetButton = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';
let current_player = player1;


// Adds an x or y depending on who's turn it is.
// Changes turn on success.
function addPiece(element) {
    console.log(element.target);
    element.target.innerHTML = current_player;
    if (current_player === player1){ 
        current_player = player2;
    }
    else{ 
        current_player = player1;
    }
}

// Need an event listener for onClick for the pieces to actually add.