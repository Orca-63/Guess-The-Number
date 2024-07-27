let randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const value = document.querySelector('.lowOrHigh');

const startOver = document.querySelector('.resultParas');

let prevGuess = [];

let numberOfGuesses = 1;

let playGame = true;
const p = document.createElement('p');
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validatingTheGuess(guess);
    })
}

function validatingTheGuess(guess) {

    if (guess < 1 || guess > 100 || isNaN(guess))
        alert("Please enter a valid number!");
    else {
        prevGuess.push(guess);
        if (numberOfGuesses === 10) {
            displayGuess(guess);


            userInput.style.backgroundColor = 'linear-gradient(to right, rgb(160, 243, 76), rgb(178, 245, 111))';
            displayMessage(`GAME OVER!!!. THE CORRECT NUMBER WAS ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }

    }



}

function checkGuess(guess) {
    if (guess === randomNumber) {
        userInput.style.backgroundColor = 'linear-gradient(to right, rgb(160, 243, 76), rgb(178, 245, 111))';

        displayMessage(`YOU WIN!!`);
        endGame();

    }
    else if (guess < randomNumber) {

        displayMessage('ENTER A LARGER NUMBER!');

    }
    else if (guess > randomNumber) {

        displayMessage('ENTER A SMALLER NUMBER');
    }
}

function displayMessage(message) {
    value.innerHTML = `${message}`;
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.style.color = 'darkblue';
    guessSlot.innerHTML += `${guess} `;
    numberOfGuesses++;
    remaining.innerHTML = `${11 - numberOfGuesses}`

}

function endGame() {
    userInput.value = '';

    userInput.setAttribute('disabled', '');

    p.classList.add('button');
    p.style.fontSize = '30px';

    p.innerHTML = `<div id = "newGame"> Start New Game</div>`;
    p.style.background = 'linear-gradient(to right, rgb(238, 114, 135), rgb(241, 148, 163), rgb(246, 186, 196))';

    p.style.height = '40px';
    p.style.width = '460px';
    p.style.color = '#fff';
    p.style.textAlign = 'center';
    p.style.borderRadius = '10px';
    p.style.marginTop = '2px';

    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        userInput.style.background = ' #ffffff';
        randomNumber = Math.floor((Math.random() * 100) + 1);

        prevGuess = [];
        numberOfGuesses = 1;
        guessSlot.innerHTML = '';
        value.innerHTML = '';

        remaining.innerHTML = `${11 - numberOfGuesses}`;
        userInput.removeAttribute('disabled');

        startOver.removeChild(p);
        playGame = true;

    })

}

