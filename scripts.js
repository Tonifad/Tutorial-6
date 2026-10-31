
let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

// Initialize the game by setting the value inside next-lbl to nextPlayer
document.getElementById('next-lbl').innerText = nextPlayer;

// This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Add a button to each cell in the gameboard
    for (let i = 1; i <= 9; i++)
    {
        let cell = document.getElementById('c' + i);

        let button = document.createElement('button');
        button.innerText = '[ ]';

        cell.appendChild(button);
    }

    // Add takeCell as an event listener to all the buttons
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener('click', takeCell);
    }
}

// Respond to a click event on any of the board buttons
function takeCell(event)
{
    // Get the button that was clicked
    let button = event.currentTarget;

    // Replace the empty space with the current player's symbol
    button.innerText = nextPlayer;

    // Make the button clickable only once
    button.disabled = true;

    // Switch to the other player
    if (nextPlayer === 'X')
    {
        nextPlayer = 'O';
    }
    else
    {
        nextPlayer = 'X';
    }

    // Update the next player label
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check if the game is over
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerText = 'Game Over';
    }
}

// Returns true if all buttons are disabled
function isGameOver()
{
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        if (btns[i].disabled === false)
        {
            return false;
        }
    }

    return true;
}
