//assignment operators
let a = 20
console.log(a += 5)
console.log(a -= 10)
console.log(a *= 2)
console.log(a /= 2)
console.log(a %= 2)

//control flow 
//conditionals if/else
let age = 40

if(age >= 18){
    console.log("You can vote dear")
}else{
    console.log("You cannot vote dear")
}

const pass = "Nigeria";
if (pass === "Nigeria"){
   console.log("You can enter any country of your choice")    
}else{
    console.log("you can only enter three countries")
}

let gender = "male"
if (gender === "female") {
    console.log("you are a female, use the lady's restroom")
} else if (gender === "non-binary") {
    console.log("use the non-binary room")
} else if (gender === "trans") {
    console.log("use the trans room")
} else {
    console.log("you are a male, use the men's restroom")
}
    
//loops for(start; condition ; increament;)
for(i = 0; i < 10; i++){
    console.log(i)
}

let arrOFNames = ["james", "john", "jude", "david", "queen"]
console.log(arrOFNames.length)
for(let names = 0; names < arrOFNames.length; names++){
    console.log("TECHCRUSH" + arrOFNames[names] + "@gmail.com")
}

for(let x = 0; x <= 12; x++){
    console.log(x * 2);
}

for(let z = 0; z <= 12; z++){
    console.log(z * 3);
}

/**
 * The WHILE LOOP, repeat until a condition changes
 */
let loginAttempt = 0.09
while(loginAttempt < 3){
    console.log(`attempt number ${loginAttempt}`)
    loginAttempt++
}

//"loginAttempt"
//`${loginAttempt}`
//i don't get this part and when do i know to use double quote and a string literal

let scores = [20, 12, 25, 15];
for(let newScore =0; newScore < scores.length; newScore++){
    console.log(scores[newScore] + 20)
}

let money = ["USD", "NZD", "CHF", "GBP"]
for(m = 0; m < money.length; m++){
    console.log("I Love" + money[m])
}

let trial = 0
while(trial < 4){
    console.log(`Trial period ${trial.toFixed(2)}`);
    trial = trial + 0.2
}

