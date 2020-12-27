var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 WINS";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 WINS";
}
else{
  document.querySelector("h1").textContent = "TIE";
}
