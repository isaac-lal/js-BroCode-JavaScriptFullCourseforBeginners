// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let age; // "let" is used for best practice other than var
age = 21; // integer (whole numbers)
// let age = 21; can be used together
age += 1; // NOTE: if we add 1 to age as a STRING, we are adding an extra 1
          // and concatenating it
          
console.log("You are", age, "years old"); 

let firstName = "Isaac"; // string
console.log("Hello", firstName);

let student = true; // booleans (true or false)
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;