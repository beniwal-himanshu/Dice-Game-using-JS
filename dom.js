var head = document.getElementsByTagName("h1")[0];
var buttonn = document.getElementsByClassName("butt")[0];
var dice1 = document.getElementsByClassName("img_p1")[0];
var dice2 = document.getElementsByClassName("img_p2")[0];

function startGame() {
  var random1 = Math.floor(Math.random() * 6) + 1;
  var random2 = Math.floor(Math.random() * 6) + 1;

  dice1.setAttribute("src", `./images/dice${random1}.png`);
  dice2.setAttribute("src", `./images/dice${random2}.png`);

  if (random1 > random2) {
    head.innerText = "PLAYER 1 WINS";
  } else if (random2 > random1) {
    head.innerText = "PLAYER 2 WINS";
  } else {
    head.innerText = "DRAW";
  }
}
buttonn.addEventListener("click", startGame);
