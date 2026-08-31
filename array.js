const arr = [1, "David", true, [1, 2,3]]

let students = ["Sara", "Samad", "Godwin", "David"]
console.log(students[0])
console.log(typeof(students[0]))
console.log(students.length)
//to remove daviddo this below
students[3] = "Vincent"
console.log(students[3])

//adding element to an array to students
students.push("Ada") //add item to the end of the array 
console.log(students);

students.unshift("Dominion") //it add item to the beginning of an array
console.log(students)

//removing element
students.pop()
console.log(students)  //it removes the last item in the array
students.shift()
console.log(students)  //it iremoves the first item in the array

//include, indexof
console.log(students.includes("Samad"));    //check if the item exist and tells you true or else it woyld be vice versa
console.log(students.indexOf("Sara"));     //tell you where the item in an array exist and tell you the exact location and if it doesn't exist in the array it tells you (-1)

//reverse, sort, slice, splice
students.reverse()
console.log(students)
students.sort()
console.log(students.slice(1, 3))
console.log(students.splice(1, 2))

//replace() & replaceAll()
//replace ---- it replace text in a string
const stringText = "Uzoma is a fine girl, Uzoma is so smart and cute and Uzoma is a software developer"
console.log(stringText.replace("Uzoma", "She"))
//replaceAll
console.log(stringText.replaceAll("Uzoma", "She"))

function wordcheck(word){
    return word === word.split("").reverse().join("")? "Yes it is a palindrome" : "No it is not a palindrome"
}

console.log(wordcheck("madam"))

//higher order array
//map, filter, reduce, forEach, find, findIndex, some, every.

//map method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const doubledNumbers = numbers.map((num) => (num * 2).toFixed(2))
const double = numbers.map((num) => num * 3)    //for one liner
const doubled = numbers.map((num) =>{       //for more than one line, like for a paragraph
    return num * 3;
})
console.log(doubledNumbers)

//or
const prices = [1000, 2000, 3000, 4000]
const newPrices = prices.map((num) => (num * 2.2).toFixed(2))
console.log(newPrices)

const ages = [11, 34, 63, 27, 29, 30]
const doubledAges = ages.map((dax) => "Their ages are  " + dax)  //for adding prefix
const doubles = ages.map((map) => {
    return "Their ages are:  " + map * 2
})

console.log(doubles)
console.log(doubledAges)
console.log(double)
console.log(doubled)


//filter method for filtering out items that meet or align with special conditions
const odd_number = numbers.filter((num) => num % 2 !== 0)
console.log(odd_number)

const complexion = ["Dark", "Medium", "Fair", "Dark", "Fair"]
const darkComplexion = complexion.filter((item) => item === "Dark")  //item is the call back function and it is going to filter only "dark" out alone
console.log(darkComplexion) //refernce error is when you try calling a variable but you didn't declare it so it would bring refernce error


//find method
const reduceToAlbino = complexion.find((item) => item === "Caramel")
console.log(reduceToAlbino)

const findindexofdark = complexion.findIndex((item) => item === "Fair")
console.log(findindexofdark)

//reduce method
const nums = [700, 300, 500, 1000, 1200]
const sum = nums.reduce((accumulator, currentvalue) => accumulator + currentvalue,)
console.log(sum)

const multiplynums = nums.reduce((accumulator, currentvalue) => accumulator * currentvalue, 1)
console.log(multiplynums)