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

/*Win Conditions*/
const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

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
    if (checkWin()) {
        if(playersTurn = 'X'){
            insertMessage(xWin)
        }else{
            insertMessage(oWin)
        }
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

function clickedCell(cellID){
    return document.getElementById(cellID).innerText;
}



function checkRow (a, b, c) {
    if(clickedCell(a) != '' && clickedCell(a) == clickedCell(b) && clickedCell(b) == clickedCell(c)){
        return true;
    }else{
        return false;
    }
}

/* function that takes the checkRow function and loops through winningConditions variable*/

function checkWin() {
    totalMoves++
    for (let i = 0; i<= 7; i++) {
        let winCondition = winConditions[i];
        let a = winCondition[0];
        let b = winCondition[1];
        let c = winCondition[2];
        if(checkRow(a,b,c)){
             return true;
        }
    };

}

