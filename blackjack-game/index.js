let firstCard = 1
let secondCard = 10
let hasBlackJack = false
let isAlive = true
let message = ""


sum = firstCard + secondCard
console.log(sum)

if (sum < 21) {
    message = "Do you want to draw a new card? 🙂"
} else
if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

console.log(message)
console.log(hasBlackJack)
console.log(isAlive)


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