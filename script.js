const tiles = document.querySelectorAll('.tile');

const game = {
    gameBoard: ['x', 'x', 'x',
                'x', 'x', 'x',
                'x', 'o', 'o'],
}

function renderBoard() {
    tiles.forEach((tile, index) => {
        tile.innerText = game.gameBoard[index];
      });
}