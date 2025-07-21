import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const suits = [
    {
      label: "♦",
      color: "red",
    },
    {
      label: "♥",
      color: "red",
    },
    {
      label: "♠",
      color: "black",
    },
    {
      label: "♣",
      color: "black",
    },
  ];
  const values = [
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
    "K",
  ];

  function getRandomInt(array) {
    const randomInt = Math.floor(Math.random() * array.length);
    return array[randomInt];
  }
  const topSuit = document.querySelector(".card-top");
  const value = document.querySelector(".card-value");
  const bottomSuit = document.querySelector(".card-bottom");
  const chosenSuit = getRandomInt(suits);
  const chosenValue = getRandomInt(values);
  topSuit.textContent = chosenSuit.label;
  value.textContent = chosenValue;
  bottomSuit.textContent = chosenSuit.label;
  topSuit.style.color = chosenSuit.color;
  bottomSuit.style.color = chosenSuit.color;
  // console.log("suit: ", chosenSuit.label, "value: ", chosenValue);
};
