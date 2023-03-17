const tiles = document.querySelectorAll('.tile');

const game = {
    gameBoard: ['x', 'x', 'x',
                'x', 'x', 'x',
                'x', 'o', 'o'],
    renderBoard: function() {
        tiles.forEach((tile, index) => {
            tile.innerText = this.gameBoard[index];
          });
    }
}
