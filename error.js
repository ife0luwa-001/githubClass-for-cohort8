//syntax error mean use of wrong syntax
//refernce error mns declairng a variable that you didn't declare
//typeerror

try {
    // Code that might fail goes here
    let result = 10 / 2;
    console.log(result);
    console.log("This line will NOT run.");
} catch (err) {
    // This runs ONLY if something goes wrong
    console.log("An error occurred: " + err.message + " " + err.name);
}

console.log("The program continues here.");

try {
    let condition = 23 * 2;
    console.log(condition)
}catch (err) {
    console.log("An error occurred:" + err.message + err.name)
}

function loadUserData(userId) {
    console.log("Starting to load data...");
    try {
        if (userId <= 0) {
            throw new Error("user ID must be greater than0");
        }
        console.log("Data loaded for user: " + userId);
    } catch (error) {
        console.log("Failed: " + error.message);
    }finally {
        console.log("Loading complete. Closing connection.");    //this would always run 
    }
}

loadUserData(5)
loadUserData(-1)


function registerStudent(name, age){
    try {
        if (!name) {
            throw new Error ("Name cannot be empty")
        }
        if (age < 16 || age > 60) {
            throw new Error ("Age must be between 16 & 60. Got: " + age)
        }
        if (!name && !age) {
            throw new Error ("Both fiels cannot be empty")
        }
        console.log("student registered: " + name + ", Age: " + age);
    }catch (error) {
        console.log("Registration failed: " + error.message);
    }
}

//registerStudent("David", 19);
//registerStudent("", 32);
registerStudent("Deborah", 13);
