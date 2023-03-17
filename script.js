const tiles = document.querySelectorAll('.tile');

const gameBoard = {
    board: ['x', 'x', 'o',
            'o', 'x', 'x',
            'x', 'x', 'x'],
    renderBoard: function() {
        tiles.forEach((tile, index) => {
            tile.innerText = this.board[index];
          });
    },
    setTile: function(pos, setting) {
        this.board[pos] = `${setting}`;
    }
};

const game = {
    winConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    checkGame: function() {
        for (let i = 0; i < this.winConditions.length; i++) {
            let arr = this.winConditions[i];
            if (gameBoard.board[arr[0]] === gameBoard.board[arr[1]]
                && gameBoard.board[arr[0]] === gameBoard.board[arr[2]]
                && gameBoard.board[arr[0]] != '') console.log('win!');
        }
    },
};



function Player(name, color) {
    this.name = name;
    this.color = color;
    this.score = 0;
}

gameBoard.renderBoard();
game.checkGame();