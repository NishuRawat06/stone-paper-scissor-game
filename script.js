// DOM elements
const stoneBtn = document.querySelector('.stonebtn');
const paperBtn = document.querySelector('.paperbtn');
const scissorBtn = document.querySelector('.scissorbtn');

const stoneImage = document.getElementById('stone-img');
const paperImage = document.getElementById('paper-img');
const scissorImage = document.getElementById('scissor-img');

const botStone = document.getElementById('bot-stone');
const botPaper = document.getElementById('bot-paper');
const botScissor = document.getElementById('bot-scissor');

const comscoreElem = document.getElementById('comscore');
const pscoreElem = document.getElementById('pscore');
const roundNumElem = document.getElementById('round-num');
const roundResultElem = document.getElementById('round-result');
const restartBtn = document.getElementById('restart-btn');

const humanArr = [stoneBtn, paperBtn, scissorBtn];
const humanImages = [stoneImage, paperImage, scissorImage];
const botImages = [botStone, botPaper, botScissor];

let playerScore = 0;
let botScore = 0;
let round = 0;
const maxRounds = 5;



function resetHands() {
    humanImages.forEach(img => img.style.display = 'none');
    botImages.forEach(img => img.style.display = 'none');
}

// Pick a random bot hand
function randomBotHand() {
    const ind = Math.floor(Math.random() * botImages.length);
    return botImages[ind];
}

// Determine winner
function winnerCheck(botImg, playerImg) {
    const playerId = playerImg.id;
    const botId = botImg.id;

    if (
        (playerId === 'stone-img' && botId === 'bot-scissor') ||
        (playerId === 'paper-img' && botId === 'bot-stone') ||
        (playerId === 'scissor-img' && botId === 'bot-paper')
    ) {
        playerScore++;
        pscoreElem.textContent = playerScore;
        roundResultElem.textContent = "Player wins this round!";
    } else if (
        (playerId === 'stone-img' && botId === 'bot-paper') ||
        (playerId === 'paper-img' && botId === 'bot-scissor') ||
        (playerId === 'scissor-img' && botId === 'bot-stone')
    ) {
        botScore++;
        comscoreElem.textContent = botScore;
        roundResultElem.textContent = "Computer wins this round!";
    } else {
        roundResultElem.textContent = "It's a Draw!";
    }
}

// Play one round
function playRound(idx) {
    if(round > maxRounds) return; // Stop after max rounds

    resetHands();

    const playerImg = humanImages[idx];
    const botImg = randomBotHand();

    playerImg.style.display = 'block';
    botImg.style.display = 'block';

    winnerCheck(botImg, playerImg);

    round++;
    roundNumElem.textContent = round <= maxRounds ? round : maxRounds;

    // Check if game is over
    if(round > maxRounds || playerScore === 3 || botScore === 3) { // first to 3 wins
        let finalResult = '';
        if(playerScore > botScore) finalResult = "🎉 Player wins the game!";
        else if(botScore > playerScore) finalResult = "💻 Computer wins the game!";
        else finalResult = "😎 It's a Draw!";

        // Show restart button
        restartBtn.style.display = 'block';
        roundResultElem.textContent = finalResult;

        // Disable buttons
        humanArr.forEach(btn => btn.disabled = true);
    }
}

// Restart game
function restartGame() {
    playerScore = 0;
    botScore = 0;
    round = 1;
    pscoreElem.textContent = playerScore;
    comscoreElem.textContent = botScore;
    roundNumElem.textContent = round;
    roundResultElem.textContent = '';
    restartBtn.style.display = 'none';
    resetHands();
    humanArr.forEach(btn => btn.disabled = false);
}

// Attach click events
humanArr.forEach((btn, idx) => {
    btn.addEventListener('click', () => playRound(idx));
});
restartBtn.addEventListener('click', restartGame);

// Initialize hands
resetHands();
