let firstCard = 6
let secondCard = 10

sum = firstCard + secondCard
console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else
if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}


let haveEaten = true

function eat() {
    if (haveEaten) {
        console.log("I'm not hungry")
        haveEaten = false
    } else {
        console.log("I'm hungry")
    }
}
eat()
eat()