const tiles = document.querySelectorAll('.tile');

const boardController = {
    board: ['', '', '',
            '', '', '',
            '', '', ''],
    updateBoard: function() {
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
    checkForWin: function() {
        for (let i = 0; i < this.winConditions.length; i++) {
            let arr = this.winConditions[i]; //arr = [0, 1, 2]
            if (boardController.board[arr[0]] === boardController.board[arr[1]]
                && boardController.board[arr[0]] === boardController.board[arr[2]]
                && boardController.board[arr[0]] != '') console.log('win!');
        }
    }
};

const displayController = {

}

function Player(name, color) {
    this.name = name;
    this.color = color;
    this.score = 0;
}

//modal
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', () => modal.showModal());
closeModal.addEventListener('click', () => modal.close());