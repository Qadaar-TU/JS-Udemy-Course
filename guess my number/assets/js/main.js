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

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // when no input
    document.querySelector(".message").textContent = "No Number ⛔️";
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 🎉😃";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high!" : "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the Game !😩";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
