let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el");
let playerName = "bogale"
let playerMoney = 200
let playerEl = document.getElementById("techawach");
playerEl.textContent = playerName + ": $" + playerMoney

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else
        return randomNumber;
};

function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // console.log("Starting the game...");
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: ";
    // render out all the cards we have use Array which is list of items
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
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
    if (isAlive === true && hasBlackJack === false) {
        // console.log("Drawing a new card from the deck!")
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }

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