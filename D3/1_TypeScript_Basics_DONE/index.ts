import { add } from "./utility"

const firstNumber = 2
const secondNumber = 3

let userName
userName = "mrspotts"

// display user welcome message                       
function showUser(user:string) {
    return `Welcome, ${user}!`
} 

console.log(add(firstNumber, secondNumber))
console.log(showUser(userName)) 
