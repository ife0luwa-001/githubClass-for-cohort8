//object is used to store related data type in form of key to value data type.

const obj = {      //name, age... are the keys while 19, Aremu David... are the values
    name : 'Aremu David Ayomide',
    gender : "Male",
    age : 19,
    complextion: "Fair",
};

let phone = {
    brand : "Samsung",
    model : "Galaxy S22 ultra",
    price : 350000,
};

phone.color = "Black";
phone.weight = "350kg";
console.log(phone)

//adding properties to an object.
let student = {
    name : "Aremu Dominion Adenike",
    regNo : 125/24/2/108,
    course : "Law",
    year : 2026,
    friends : ["David", "John", "Dominion"]
}

console.log(student);
student.gender = "Female";
console.log(student.gender);
delete student.year;
console.log(student)

//destructuring
let employee = {
    name: "David Aremu",
    role:  "Backend Developer",
    salary: 500000,
    city: "Lagos"
}
//without destucturing(long way)
let hisName = employee.name;
let hisRole = employee.role;

//with destructuring(shortest way)
const { name:username, role:Job, salary } = employee;


//using spread function
let DNA = {
    genders: "XX",
    complexion: "fair",
}

let offSpring = {
    ...DNA,
    name: "Aremu David Ayomide",
    age: 19,
}

console.log(offSpring)

//iterating over object
console.log(Object.keys(offSpring));
console.log(Object.values(offSpring));
console.log(Object.entries(offSpring));
