// Setting left-dice value on event
function diceOne() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);

  var image1 = document.getElementById("dice-image-1");
  image1.setAttribute("src", `images/dice${randomNumber1}.png`);
  return randomNumber1;
}

// Setting right-dice value on event
function diceTwo() {
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var image2 = document.getElementById("dice-image-2");
  image2.setAttribute("src", `images/dice${randomNumber2}.png`);
  return randomNumber2;
}

function rollBothDice() {
  var diceOneValue = diceOne();
  var diceTwoValue = diceTwo();

  // Announcing Result of Dice Roll
  var winner = document.getElementById("winner-header");  
  if (diceOneValue > diceTwoValue) {
    winner.innerHTML = "🚩 Player 1 Wins";
  } else if (diceOneValue < diceTwoValue) {
    winner.innerHTML = "Player 2 Wins 🚩";
  } else {
    winner.innerHTML = "🚩 Draw! 🚩"; 
  }
  
  // console.log(diceOneValue, diceTwoValue);
}
