var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var leftNum = document.querySelector('.img1');
leftNum.src = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var leftNum = document.querySelector('.img2');
leftNum.src = "images/dice" + randomNumber2 + ".png";
var titleText = document.querySelector('h1');
if(randomNumber1 > randomNumber2) {
  titleText.innerHTML = '🚩 Player 1 won';
} else if(randomNumber1 < randomNumber2) {
  titleText.innerHTML = 'Player 2 won 🚩';
} else {
  titleText.innerHTML = 'Its a draw';
}
