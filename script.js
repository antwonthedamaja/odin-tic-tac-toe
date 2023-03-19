//DOM elements/manipulation
const tiles = document.querySelectorAll('.tile');
const tileButtons = document.querySelectorAll('.tile-container');
const playButton = document.querySelector('#submit');
const p1Name = document.querySelector('#p1-name-selection');
const p2Name = document.querySelector('#p2-name-selection');
const p1Color = document.querySelector('#p1-color');
const p2Color = document.querySelector('#p2-color');
const AIselect = document.querySelector('#p2-human');
const p1Container = document.querySelector('#player1-container');
const p2Container = document.querySelector('#player2-container');
const p1DomText = document.querySelector('#p1-text');
const p2DomText = document.querySelector('#p2-text');
const score = document.createElement('div');
score.classList.add("score");
score.innerText = 'Score: 0';
let firstRun = true;

const displayController = {
    initialize: function() {
        player1.score = 0;
        player2.score = 0;
        player1.name = p1Name.value;
        player2.name = p2Name.value;
        player1.color = `hsl(${p1Color.value}, 100%, 44%)`;
        player2.color = `hsl(${p2Color.value}, 100%, 44%)`;
        player2.playerStatus = AIselect.checked;
        p1DomText.innerText = player1.name;
        p1DomText.style.color = player1.color;
        p2DomText.innerText = player2.name;
        p2DomText.style.color = player2.color;
        boardController.clear();
        if (firstRun === false) {
            p1Container.lastElementChild.remove();
            p2Container.lastElementChild.remove();
        }
        firstRun = false;
        p1Container.appendChild(score.cloneNode(true)); 
        p2Container.appendChild(score.cloneNode(true));
        modal.close();
        game.startGame();
    },
    updateBoard: function() {
        tiles.forEach((tile, index) => {
            tile.innerText = boardController.board[index];
        });
    }
};

p1Color.addEventListener('input', () => p1Color.style.accentColor = `hsl(${p1Color.value}, 100%, 44%)`);
p2Color.addEventListener('input', () => p2Color.style.accentColor = `hsl(${p2Color.value}, 100%, 44%)`);
playButton.addEventListener('click', () => displayController.initialize());

//players
function Player(name, color, playerStatus, marker) {
    this.name = name;
    this.color = color;
    this.score = 0;
    this.playerStatus = playerStatus;
    this.marker = marker;
}

const player1 = new Player(undefined, undefined, undefined, 'X');
const player2 = new Player(undefined, undefined, undefined, 'O');

//main
const boardController = {
    board: ['', '', '',
            '', '', '',
            '', '', ''],
    setTile: function(pos, setting) {
        this.board[pos] = `${setting}`;
        displayController.updateBoard();
    },
    clear: function() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        displayController.updateBoard();
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
            let arr = this.winConditions[i];
            if (boardController.board[arr[0]] === boardController.board[arr[1]]
                && boardController.board[arr[0]] === boardController.board[arr[2]]
                && boardController.board[arr[0]] != '') {
                    console.log('win!')};
        }
    },
    startGame: function() {
        tileButtons.forEach((tile, index) => {
            tile.addEventListener('click', () => {
                if (tile.innerText == '') {
                    boardController.setTile(index, this.deriveTurn());
                }
                this.turnCounter++;
                this.checkForWin();
            });
        });
    },
    turnCounter: 0,
    deriveTurn: function() {
        if (this.turnCounter % 2 == 0) {
            return player1.marker;
        } else {
            return player2.marker;
        }
    }
};

//modal
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', () => modal.showModal());
closeModal.addEventListener('click', () => modal.close());