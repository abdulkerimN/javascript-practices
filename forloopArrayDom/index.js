let me = ["i", "am", "learning", "JavaScript"]
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < me.length; i++) {
    greetingEl.textContent += me[i] + " ";
    // the below also works in the same way but it will add an extra space at the end of the string, which is not a problem in this case but it can be in some cases. So we can use the join method to avoid that.
    // greetingEl.textContent = me.join("  ");

    // console.log(me[i]);
}