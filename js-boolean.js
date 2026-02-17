let havePassed = true

function passExam() {
    if (havePassed) {
        console.log("Congratulations! You passed the exam! 🎉")
        havePassed = false
    } else {
        console.log("You need to study more for the next exam.")
    }
}

passExam()
passExam()