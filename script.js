// GameBoard module IIFE
const GameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return { board };
})();

// Factory function to create multiple players
const Player = (name, symbol) => {
    return { name, symbol };
};

// Create players with Player factory function
const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');

// Game module IIFE
const Game = (() => {
    const { board } = GameBoard;
    const display = document.querySelector('.display');

    let winningPlayer = '';
    let symbol = '';

    const playerSelection = (e) => {
        const index = e.target.id;
        if (symbol === '' && board[index] === '') {
            winningPlayer = player1.name;
            symbol = player1.symbol;
            board[index] = player1.symbol;
            e.target.textContent = player1.symbol;
        } else if (symbol === player1.symbol && board[index] === '') {
            winningPlayer = player2.name;
            symbol = player2.symbol;
            board[index] = player2.symbol;
            e.target.textContent = player2.symbol;
        } else if (symbol === player2.symbol && board[index] === '') {
            winningPlayer = player1.name;
            symbol = player1.symbol;
            board[index] = player1.symbol;
            e.target.textContent = player1.symbol;
        };
        checkWinner();
    };

    const cells = document.querySelectorAll('.cell');

    const addClick = () => {
        cells.forEach((cell) => {
            cell.addEventListener('click', playerSelection);
        });
    };

    const removeClick = () => {
        cells.forEach((cell) => {
            cell.removeEventListener('click', playerSelection);
        });
    };

    const checkWinner = (() => {
        const { board } = GameBoard;
        if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
            display.textContent = `${winningPlayer} Wins!`
            symbol = '';
            removeClick();
        };
        if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
            display.textContent = `${winningPlayer} Wins!`
            symbol = '';
            removeClick();
        };
        if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
            display.textContent = `${winningPlayer} Wins!`
            symbol = '';
            removeClick();
        };
        if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
            display.textContent = `${winningPlayer} Wins!`
            symbol = '';
            removeClick();
        };
        if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
            display.textContent = `${winningPlayer} Wins!`
            symbol = '';
            removeClick();
        };
        if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
            display.textContent = `${winningPlayer} Wins!`
            symbol = '';
            removeClick();
        };
        if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
            display.textContent = `${winningPlayer} Wins!`
            symbol = '';
            removeClick();
        };
        if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
            display.textContent = `${winningPlayer} Wins!`
            symbol = '';
            removeClick();
        };
        if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== ''
            && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' &&
            board[8] !== '') {
            display.textContent = `Draw!`
            symbol = '';
            removeClick();
        };
    });
    addClick();
    display.textContent = 'Game Start!';

    return { addClick };
})();

// Reset module IIFE
const reset = (() => {
    const { board } = GameBoard;
    const resetBtn = document.querySelector('.reset');
    const display = document.querySelector('.display');

    resetBtn.addEventListener('click', () => {
        for (let i = 0; i < board.length; i++) {
            const index = document.querySelector(`button[id='${i}']`);
            board[i] = '';
            index.textContent = '';
            display.textContent = 'Game Start!'
            Game.addClick();
        };
    });
})();

