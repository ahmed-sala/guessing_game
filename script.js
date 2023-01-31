'use strict';
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      displayMessage('⛔ No Number!');
    } else if (guess === secretNumber) {
      displayMessage('🎉 correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = guess;
      highScore += score;
      document.querySelector('.highscore').textContent = highScore;
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : ' 📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You are lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  },
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
  })
);
// void showMessage(message, cla);
// {
//   document.querySelector('.${cla}').textContent = message;
// }
