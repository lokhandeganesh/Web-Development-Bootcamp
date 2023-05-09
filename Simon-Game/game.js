var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;
var gameStarted = false;

// Start game on keypress
$(document).on("keydown", function (e) {
  if (!gameStarted) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();

    gameStarted = true;
  }
});

// user click event handling
$(".container").on("click", ".btn", function () {
  // console.log("Method called!");
  var userChosenColour = $(this).attr("id");
  userClickPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  // call checkAnswer() after user has clicked and chosen their answer,
  // passing in the index of last answer in the user's sequence.
  checkAnswer(userClickPattern.length - 1);
});

// Checking user answer input sequence with game generated
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");

    // Adding red background colour on wrong user input sequence
    $("body")
      .addClass("game-over")
      .delay(200)
      .queue(function () {
        $(this).removeClass("game-over").dequeue();
      });

    // Changing title to "Game Over, Press any key to Restart"
    $("#level-title").text(`Game Over, Press any key to Restart`);

    // Calling startOver() to reset game
    startOver();
  }
}

function nextSequence() {
  userClickPattern = [];

  // inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  // update h1 with change in level
  $("#level-title").text(`Level ${level}`);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  // pushing random pattern
  gamePattern.push(randomChosenColour);

  // Flash animate
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);

  /*
  // Play the sound for the button colour selected
  var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();
*/
  playSound(randomChosenColour);
}

// Play sound according to input value
function playSound(name) {
  // Play the sound for the button colour selected
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

// Animate colour box on click event
function animatePress(currentColour) {
  // console.log(`Method animatePress called! `);
  $(`#${currentColour}`)
    .addClass("pressed")
    .delay(100)
    .queue(function () {
      $(this).removeClass("pressed").dequeue();
    });
}

// function for restarting game
function startOver() {
  gamePattern = [];
  level = 0;
  gameStarted = false;
}
