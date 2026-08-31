//function is a block of code you can reuse anytime. function is important to developer because it is reusable over and over again and it also bring about readability 
//declare
//functions without parameter
/**
 * function functionName (){
 * }
 */

function greetings (){
    console.log("HELLO WORLD!!")
}

greetings()

//Function with parameters
function welcome(name){
    console.log(`Welcome to class MR/MISS/MRS ${name}`)
}

welcome("David")

//add with parameter 
function add(){
    let x = 4;
    let y = 6;
    console.log("the addition of x and y")
    return x + y
}
console.log(add())

//add without parameter 
function addition(x , y){
    return x +y
}
console.log(addition(9 , 10))
console.log(addition(7 , 89))


/**
 * Practicing function with and without parameter
 */
//function without parameter

function praising(){
    console.log("God is to be praised at all time")
}

praising();

//function with parameter

function loving(name){
    console.log(`I love miss ${name}`)
}

loving("Tife")

function subtract(){
    a = 3;
    b = 7;
    console.log("This is a sign of Subtraction within")
    return b - a;
}
console.log(subtract())

function multiplication(g, h){
    return g * h;
}
console.log(multiplication(5, 8));
console.log(multiplication(12, 7));


function agecheck(age){
    if (age < 18){
        return "Pls get out... you're underage"
    }else if(age == 18){
        return "Buy me one drink Egbon"
    }else{
        return "Buy me 5 drinks Egbon mhii"
    }
}

let davidage = agecheck(12)
console.log(davidage)

/**Write a function that if the number picked is equal equal to 4 then return congratulation, else return 
 * try again
 */

function luckyballon(number){
    if(number !== 4){
        return "Try again... Thank you!!"
    }else{
        return "Congratulation lucky winner"
    }
}

let mynumber = luckyballon(4)
console.log(mynumber)

function luckyage(number){
    if (number >= 18){
        return "You can vote... Kindly proceed!!"
    }else {
        return "Kindly wait for your time. Thanks!!!"
    }
}

let votingpass = luckyage(65);
console.log(votingpass)

//scope local scope and global scope(define outside the function)

//for global scope it is written outside the function 
let score = 75;

function gradingsystem(){
    if(score >= 50){
        return "PASSED!!!"
    }else{
        return "FAILED... you have to retake the course"
    }
}

//for local scope it is written within the function
function deliveryFee(){
    let fee = 500
    return fee
}
console.log(deliveryFee())

let scores = 101
function yearthree(){
    if (scores >= 0 && scores <= 49){
        return "F"
    }else if(scores >= 50 && scores <= 69){
        return "B"
    }else if(scores >= 70 &&scores <= 100){
        return "A"
    }else{
        return "ERROR!!!"
    }
}

let ayomikunScore = yearthree(scores)
console.log(ayomikunScore)


//ARROW FUNCTION
const minus =  (num) =>{
    return num - 50
}
let result = minus(75)
