(function () {
    let cells = document.querySelectorAll('.row > div');

    /*Game State variable for resetting the game*/
    let gameState = false;

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
    // Adds an eventlistener for clicks to each cell (ie: box)
    for (let i = 0; i < cells.length; i++) {

        cells[i].addEventListener('click', cellClicked);

    };

    /* This function does a few things.  First it clears the message line if it is telling the person to pick another box.
    Second it checks how many moves have been made to see if the result is a draw. Next if the result is not a draw it verifies if checkWin is true.
    If it's true it displays the winning message.  If not it switches the playersTurn variable to the next user*/
    function switchTurn() {
        document.getElementById('message').innerText = '';
        if (totalMoves > 7) {
            document.getElementById('message').innerText = 'Draw'
            gameState = true;
        } else if (checkWin()) {
            document.getElementById('message').innerText = 'Player ' + playersTurn + ' wins!'
            gameState = true;
        } else if (playersTurn == 'X') {
            playersTurn = 'O';
        } else {
            playersTurn = 'X'
        };
    };

    /*This function is run when a cell is clicked.  If the game has been won it resets the board.   Otherwise it checks if
    a cell has already been played.  If not it inserts the correct player value and runs the switchTurn function.  Otherwise 
    it tells the player to pick another square */
    function cellClicked() {
        if (gameState == true) {
            resetGame();
        } else if (event.target.innerText == '') {
            if (playersTurn == 'X') {
                event.target.textContent = 'X';
                switchTurn();
            } else if (playersTurn == 'O') {
                event.target.textContent = 'O';
                switchTurn();
            }
        } else {
            document.getElementById('message').innerText = 'Pick another square'
        }

    };

    // Pulls innerText from specific squares by cellID
    function clickedCell(cellID) {
        return document.getElementById(cellID).innerText;
    }


    // function to check if the first cell is not blank and if not it check if the next 2 cells are the same)
    function checkRow(a, b, c) {
        if (clickedCell(a) != '' && clickedCell(a) == clickedCell(b) && clickedCell(b) == clickedCell(c)) {
            return true;
        } else {
            return false;
        }
    }

    /* function that takes the checkRow function and loops through winningConditions variable*/

    function checkWin() {
        totalMoves++
        for (let i = 0; i <= 7; i++) {
            let winCondition = winConditions[i];
            let a = winCondition[0];
            let b = winCondition[1];
            let c = winCondition[2];
            if (checkRow(a, b, c)) {
                return true;
            }
        };

    }
    // Resets game to default state
    function resetGame() {
        for (let i = 1; i < 10; i++) {
            document.getElementById(i).innerText = ''
        };
        document.getElementById('message').innerText = '';
        totalMoves = 0;
        gameState = false;
    }
})();