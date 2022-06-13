// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    console.log(count)
} 
let userName = "Guest";
let message = "You have three new notifications";
let messageToUser = message + ", " + userName + "!";
console.log(messageToUser);

const name = "Christopher"
const greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)