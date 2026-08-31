//Section A (Nuber 1)
const name = "Aremu David Ayomide";
console.log(name);
console.log(typeof(name))

let age = 20;
console.log(name);
console.log(typeof(age));

let studentstatus = 3.142;
console.log(studentstatus)
console.log(typeof(studentstatus))

//Section A (Number 2)
const shoppinglist = ["rice", "stew", 20, true]
console.log(typeof(shoppinglist))
console.log(shoppinglist)

/**I noticed that it brought this below:
 * No debugger available, can not send 'variables'
 */

//Arithmetic Operator
//number 3
let num1 = 20
let num2 = 10

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

//number 4
let x = 17
let y = 5
console.log(x % y)

//number 5
let price = 1500;
let discount = 200
let finalprice = price - discount;
console.log(finalprice)


//Comparism Operators
//number 6
let a = 10
let b = "10"
console.log(a == b) //both are the same in terms of the end value which is (5)
console.log(a === b) //in terms of their data type, they are strictly not the same 

//number 7
score = 75;
console.log(score >= 50);


//Logical Operators
//number 8
const hasTicket = true;
const hasID = false;
console.log(hasTicket && hasID) //cannot enter

//number 9
console.log(hasTicket || hasID) //cannot enter

//Mini Project
//number 10
let password = "1234";
let correctPassword = "1234";
console.log(password === correctPassword)

//number 11
const budget = 5000
const itemPrice = 1200
console.log((budget >= itemPrice) && (budget > 0))
