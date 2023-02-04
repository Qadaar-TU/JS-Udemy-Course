// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  location.reload();
  let score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
});

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // when no input
    displayMessage("No Number ⛔️");
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number 🎉😃");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the Game !😩");
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
