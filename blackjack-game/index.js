let firstCard = 1
let secondCard = 10
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el");

sum = firstCard + secondCard

function startGame() {
    // console.log("Starting the game...");
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
    } else
    if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}

// console.log(sum);
// startGame();
// console.log(message);
// console.log(hasBlackJack);
// console.log(isAlive);


function newCard() {
    // console.log("Drawing a new card from the deck!")
    let card = 2
    sum += card
    startGame()
}
// let haveEaten = true

// function eat() {
//     if (haveEaten) {
//         console.log("I'm not hungry")
//         haveEaten = false
//     } else {
//         console.log("I'm hungry")
//     }
// }
// eat()
// eat()