let cells = document.querySelectorAll('.row > div');

/* text variables*/
let xWin = 'Player X won!';
let oWin = 'Player O won!';
let draw = 'Draw';

/* Total Moves count */
let totalMoves = 0;

/*Variable that keeps track of who's turn it is*/

let playersTurn = 'X';
/*Winning Player*/
let winningPlayer = null;



for (let i = 0; i < cells.length; i++) {

    cells[i].addEventListener('click', cellClicked);

};


function insertMessage(message) {
    document.getElementById('message').innerText = message;
};


function newGame() {
    totalMoves = 0;

    for (let h = 0; h <= 8; h++) {
        resetGame(h);
    }
};

function switchTurn() {
    if (winningPlayer != null) {
        if (winningPlayer = 'X') {
            insertMessage(xWin);
        } else {
            insertMessage(oWin);
        };
    } else if (playersTurn == 'X') {
        playersTurn = 'O';
    }else {
        playersTurn = 'X'
    };
};

function cellClicked() {

    if (playersTurn == 'X') {
        event.target.textContent = 'X';
        switchTurn();
    } else if(playersTurn == 'O'){
        event.target.textContent = 'O';
        switchTurn();
    }else {
        insertMessage('Pick Another Square')
    }
    
};

// function clickedCell(cellID){
//     return document.getElementById(cellID).innerText;
// }

// function checkWin () {
//     totalMoves++
//     if (
//         (checkRow(1, 2, 3) ||

//         checkRow(4, 5, 6) ||

//         checkRow(7, 8, 9) ||

//         checkRow(1, 4, 7) ||

//         checkRow(2, 5, 8) ||

//         checkRow(3, 6, 9) ||

//         checkRow(1, 5, 9) ||

//         checkRow(3, 5, 7)) = true
//     ){
//         winningPlayer = playersTurn
//     }elseif(totalMoves > 8 ){
//         winningPlayer = 'draw';
//     }
// };

function checkRow (a, b, c) {
    let win = false;
    if(clickedCell(a) == clickedCell(b) && clickedCell(b) == clickedCell(c)){
        win = true;
    }
    return win;
}