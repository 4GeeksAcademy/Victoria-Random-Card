/* eslint-disable */
import "bootstrap";
import "./style.css";

function randomCard() {
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let palosIndex = Math.floor(Math.random() * palos.length);
  let numerosIndex = Math.floor(Math.random() * numeros.length);

  document.querySelector("#top").innerHTML = palos[palosIndex];
  document.querySelector("#number").innerHTML = numeros[numerosIndex];
  document.querySelector("#bottom").innerHTML = palos[palosIndex];

  let colorPalos =
    palos[palosIndex] == "♦" || palos[palosIndex] == "♥"
      ? "text-danger"
      : "text-dark";
  document.querySelector("#top").className = colorPalos;
  document.querySelector("#number").className = colorPalos;
  document.querySelector("#bottom").className = colorPalos;
}

setInterval(() => randomCard(), 3000);

document.querySelector("#btn").addEventListener("click", () => randomCard());
window.onload = function() {
  randomCard();
};
