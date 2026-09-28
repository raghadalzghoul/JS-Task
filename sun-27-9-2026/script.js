
// Exercise 1 — Hoisting & Scoping Challenge 
// ● Predict the output before running the code. 
//undefine for the name cause its on console log befor the decleration
//console.log(x) also not define cause of the x is declared by the var whish is functional scop
// console.log(name);
// var name = "Jone";
// function test() {
//     var x = 10;
//     if (true) {
//         var y = 20;
//     }
//     console.log(y);
// }
// test();
// console.log(x); 


// ● Explain how hoisting works with var.
// JavaScript processes variable and function declarations before executing the code.When you declare a variable using var, JavaScript makes the variable available at the beginning of its function scope (or global scope)
// ● Identify the difference between function scope and block scope. 
// function scope var a variable declared with var inside a function is accessible anywhere inside that function.
// A variable declared with let or const is accessible only inside the block {} where it was declared.
// ● Rewrite the example using let where appropriate.
// if the y where declared by let not var it gonna be block scop and not be printed in console


// 1. Create the Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 2. Add greet() to Person.prototype
Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name +
        " and I am " + this.age + " years old.");
};

// 3. Create the Employee constructor
function Employee(name, age, employeeId, position) {
    // Call the Person constructor
    Person.call(this, name, age);

    this.employeeId = employeeId;
    this.position = position;
}

// 4. make Employee inherit from Person
Employee.prototype = Object.create(Person.prototype);

// Restore the constructor reference
Employee.prototype.constructor = Employee;

// 5. Override greet() in Employee.prototype
Employee.prototype.greet = function () {
    console.log("Hello, I am " + this.name +
        ", my employee ID is " + this.employeeId +
        ", and I work as a " + this.position + ".");
};

// 6. Create three employees
var employee1 = new Employee("Raghad", 23, 101, "Developer");
var employee2 = new Employee("Ahmad", 28, 102, "Manager");
var employee3 = new Employee("Sara", 25, 103, "Designer");

// 7. Demonstrate inheritance
employee1.greet();
employee2.greet();
employee3.greet();

// Access inherited properties
console.log(employee1.name);
console.log(employee2.age);

// Check inheritance
console.log(employee1 instanceof Employee); // true
console.log(employee1 instanceof Person);   // true






// EXERCISE 3 — Array Methods Playground


var students1 = [
    "Ahmad", "Sara", "Omar", "Lina", "Yousef",
    "Rania", "Khaled", "Noor", "Adam", "Maya",
    "Ali", "Dana", "Sami", "Hala", "Zaid",
    "Lama", "Tariq", "Jana", "Fadi", "Reem",
    "Othman", "Leen", "Hassan", "Aya", "Baraa",
    "Malak", "Laith", "Nour", "Samer", "Dima"
];

var students2 = [
    "Rami", "Farah", "Mahmoud", "Salma", "Hamza",
    "Tasneem", "Anas", "Joud", "Marwan", "Razan",
    "Ibrahim", "Sahar", "Wael", "Batool", "Amer",
    "Hiba", "Kareem", "Rama", "Ayman", "Sana"
];

// concat()
var allStudents = students1.concat(students2);

console.log("Exercise 3 - Combined:", allStudents);

// sort()
allStudents.sort();
console.log("Sorted:", allStudents);

// reverse()
allStudents.reverse();
console.log("Reversed:", allStudents);

// includes()
console.log("Does Ahmad exist?", allStudents.includes("Ahmad"));

// forEach()
allStudents.forEach(function (student, index) {
    console.log(index + ": " + student);
});



// EXERCISE 4 — Student Records Manager

var studentRecords = [
    { id: 1, name: "Ahmad", grade: 85 },
    { id: 2, name: "Sara", grade: 92 },
    { id: 3, name: "Omar", grade: 76 },
    { id: 4, name: "Lina", grade: 88 },
    { id: 5, name: "Yousef", grade: 70 },
    { id: 6, name: "Rania", grade: 95 },
    { id: 7, name: "Khaled", grade: 81 },
    { id: 8, name: "Noor", grade: 90 },
    { id: 9, name: "Adam", grade: 73 },
    { id: 10, name: "Maya", grade: 87 },
    { id: 11, name: "Ali", grade: 79 },
    { id: 12, name: "Dana", grade: 91 },
    { id: 13, name: "Sami", grade: 68 },
    { id: 14, name: "Hala", grade: 84 },
    { id: 15, name: "Zaid", grade: 89 },
    { id: 16, name: "Lama", grade: 77 },
    { id: 17, name: "Tariq", grade: 93 },
    { id: 18, name: "Jana", grade: 80 },
    { id: 19, name: "Fadi", grade: 86 },
    { id: 20, name: "Reem", grade: 94 },
    { id: 21, name: "Othman", grade: 72 },
    { id: 22, name: "Leen", grade: 83 },
    { id: 23, name: "Hassan", grade: 75 },
    { id: 24, name: "Aya", grade: 96 },
    { id: 25, name: "Baraa", grade: 78 },
    { id: 26, name: "Malak", grade: 82 },
    { id: 27, name: "Laith", grade: 71 },
    { id: 28, name: "Nour", grade: 88 },
    { id: 29, name: "Samer", grade: 69 },
    { id: 30, name: "Dima", grade: 97 },
    { id: 31, name: "Rami", grade: 74 },
    { id: 32, name: "Farah", grade: 85 },
    { id: 33, name: "Mahmoud", grade: 79 },
    { id: 34, name: "Salma", grade: 90 },
    { id: 35, name: "Hamza", grade: 81 },
    { id: 36, name: "Tasneem", grade: 87 },
    { id: 37, name: "Anas", grade: 73 },
    { id: 38, name: "Joud", grade: 92 },
    { id: 39, name: "Marwan", grade: 76 },
    { id: 40, name: "Razan", grade: 84 },
    { id: 41, name: "Ibrahim", grade: 89 },
    { id: 42, name: "Sahar", grade: 93 },
    { id: 43, name: "Wael", grade: 70 },
    { id: 44, name: "Batool", grade: 86 },
    { id: 45, name: "Amer", grade: 80 },
    { id: 46, name: "Hiba", grade: 91 },
    { id: 47, name: "Kareem", grade: 77 },
    { id: 48, name: "Rama", grade: 95 },
    { id: 49, name: "Ayman", grade: 82 },
    { id: 50, name: "Sana", grade: 88 }
];

// splice() - add
studentRecords.splice(5, 0, {
    id: 51,
    name: "New Student",
    grade: 90
});

// splice() - remove
studentRecords.splice(10, 1);

// splice() - replace
studentRecords.splice(15, 1, {
    id: 52,
    name: "Replacement Student",
    grade: 85
});

// slice() - copy part of array
var studentCopy = studentRecords.slice(0, 5);

console.log("Exercise 4 - First 5:", studentCopy);

// Sort by grade
studentRecords.sort(function (a, b) {
    return b.grade - a.grade;
});

// Print using forEach()
studentRecords.forEach(function (student) {
    console.log(
        student.id + " - " +
        student.name + " - " +
        student.grade
    );
});


// EXERCISE 5 — JSON Converter


var product = {
    id: 1,
    name: "Laptop",
    price: 750,
    category: "Electronics",
    available: true
};

console.log("Exercise 5 - Original object:", product);

// Object -> JSON string
var jsonProduct = JSON.stringify(product);

console.log("JSON string:", jsonProduct);

// JSON string -> Object
var convertedProduct = JSON.parse(jsonProduct);

console.log("Converted object:", convertedProduct);

// Invalid JSON
try {
    var invalidJSON = '{"name":"Laptop", "price":750';
    var result = JSON.parse(invalidJSON);
    console.log(result);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}



// EXERCISE 6 — Product Inventory Analyzer


var inventory1 = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics", quantity: 5 },
    { id: 2, name: "Phone", price: 500, category: "Electronics", quantity: 10 },
    { id: 3, name: "Keyboard", price: 50, category: "Accessories", quantity: 20 },
    { id: 4, name: "Mouse", price: 30, category: "Accessories", quantity: 25 },
    { id: 5, name: "Monitor", price: 250, category: "Electronics", quantity: 8 }
];

var inventory2 = [
    { id: 6, name: "Desk", price: 200, category: "Furniture", quantity: 4 },
    { id: 7, name: "Chair", price: 120, category: "Furniture", quantity: 12 },
    { id: 8, name: "Headphones", price: 80, category: "Accessories", quantity: 15 },
    { id: 9, name: "Tablet", price: 400, category: "Electronics", quantity: 6 },
    { id: 10, name: "Printer", price: 300, category: "Electronics", quantity: 3 }
];

// concat()
var inventory = inventory1.concat(inventory2);

// sort() by price
inventory.sort(function (a, b) {
    return a.price - b.price;
});

console.log("Exercise 6 - Sorted inventory:");
console.log(inventory);

// includes()
var availableCategories = [
    "Electronics",
    "Accessories",
    "Furniture"
];

console.log(
    "Does Electronics exist?",
    availableCategories.includes("Electronics")
);

// splice() - remove discontinued product
inventory.splice(2, 1);

// slice() - first five products
var firstFiveProducts = inventory.slice(0, 5);

console.log("First five products:");
console.log(firstFiveProducts);


// EXERCISE 7 — Arrow Function Transformation

// Square
const square = (number) => number * number;

console.log("Exercise 7 - Square:", square(5));

// Even
const isEven = (number) => number % 2 === 0;

console.log("Is 10 even?", isEven(10));

// Total price
const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    { name: "Mouse", price: 30 }
];

const totalPrice = (products) => {
    return products.reduce((total, product) => {
        return total + product.price;
    }, 0);
};

console.log("Total price:", totalPrice(products));

// map()
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number * number);

console.log("Map:", squaredNumbers);

// filter()
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Filter:", evenNumbers);

// reduce()
const sum = numbers.reduce((total, number) => total + number, 0);

console.log("Reduce:", sum);


// EXERCISE 8 — Destructuring & Default Parameters


const user = {
    name: "Raghad",
    email: "raghad@example.com",
    age: 23,
    address: "Amman"
};

// Object destructuring
const {
    name,
    email,
    age,
    address: userAddress
} = user;

console.log("Exercise 8:");
console.log(name);
console.log(email);
console.log(age);
console.log(userAddress);

// Array destructuring
const skills = ["JavaScript", "React", "Node.js"];

const [skill1, skill2, skill3] = skills;

console.log(skill1);
console.log(skill2);
console.log(skill3);

// Default parameters
function createUser(
    name = "Unknown",
    age = 18,
    country = "Jordan"
) {
    return {
        name: name,
        age: age,
        country: country
    };
}

console.log(createUser("Ahmad", 25, "Jordan"));

// Optional parameters omitted
console.log(createUser());


// EXERCISE 9 — Spread, Rest, Map & Set Challenge

// Two arrays
const enrolledStudents1 = [101, 102, 103, 104];
const enrolledStudents2 = [103, 104, 105, 106];

// Spread
const allEnrolledStudents = [
    ...enrolledStudents1,
    ...enrolledStudents2
];

console.log("Exercise 9 - Combined:", allEnrolledStudents);

// Set removes duplicates
const uniqueStudentIds = [...new Set(allEnrolledStudents)];

console.log("Unique IDs:", uniqueStudentIds);

// Rest parameter
const calculateAverage = (...grades) => {
    const total = grades.reduce(
        (sum, grade) => sum + grade,
        0
    );

    return total / grades.length;
};

console.log(
    "Average:",
    calculateAverage(80, 90, 75, 85)
);

// Map
const studentGrades = new Map();

// Add
studentGrades.set(101, 85);
studentGrades.set(102, 90);
studentGrades.set(103, 75);

// Update
studentGrades.set(101, 95);

// Retrieve
console.log("Student 101 grade:", studentGrades.get(101));

// Delete
studentGrades.delete(103);

// Convert Map to regular array
const finalStudentData = Array.from(studentGrades);

console.log("Final student data:", finalStudentData);


// EXERCISE 10 — Dynamic Student Report


const reportStudents = [
    { id: 1, name: "Ahmad", grade: 85 },
    { id: 2, name: "Sara", grade: 92 },
    { id: 3, name: "Omar", grade: 55 },
    { id: 4, name: "Lina", grade: 78 },
    { id: 5, name: "Yousef", grade: 45 }
];

let reports = "";

reportStudents.forEach(student => {

    const status = student.grade >= 50
        ? "Pass"
        : "Fail";

    reports += `
Student Name: ${student.name}
Student ID: ${student.id}
Grade: ${student.grade}
Status: ${status}
-------------------------
`;
});

console.log("Exercise 10:");
console.log(reports);

// Display in browser if an element exists
const reportElement = document.getElementById("reports");

if (reportElement) {
    reportElement.innerHTML = reports.replace(/\n/g, "<br>");
}



// EXERCISE 11 — Classes & Inheritance


class Persons {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

class Student extends Persons {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }

    getInfo() {
        return `Student: ${this.name}, ID: ${this.studentId}, Email: ${this.email}`;
    }
}

class Instructor extends Persons {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    getInfo() {
        return `Instructor: ${this.name}, Subject: ${this.subject}, Email: ${this.email}`;
    }
}

const persons = new Persons(
    "Ali",
    "ali@example.com"
);

const student = new Student(
    "Sara",
    "sara@example.com",
    101
);

const instructor = new Instructor(
    "Ahmad",
    "ahmad@example.com",
    "JavaScript"
);

console.log("Exercise 11:");
console.log(persons.getInfo());
console.log(student.getInfo());
console.log(instructor.getInfo());

console.log(student instanceof Persons); // true
console.log(student instanceof Student); // true



// EXERCISE 12 — JavaScript Modules

/*
Create these three files:

students.js
grades.js
app.js

---------------- students.js ----------------

export const students = [
    { id: 1, name: "Ahmad", grades: [80, 90, 85] },
    { id: 2, name: "Sara", grades: [95, 90, 92] }
];

export function getStudent(id) {
    return students.find(student => student.id === id);
}

export default students;


---------------- grades.js ----------------

export function calculateAverage(grades) {
    const total = grades.reduce(
        (sum, grade) => sum + grade,
        0
    );

    return total / grades.length;
}

export function getStatus(grade) {
    return grade >= 50 ? "Pass" : "Fail";
}


---------------- app.js ----------------

import students, { getStudent } from "./students.js";
import {
    calculateAverage,
    getStatus
} from "./grades.js";

students.forEach(student => {

    const average = calculateAverage(student.grades);
    const status = getStatus(average);

    console.log(
        `${student.name}: ${average} - ${status}`
    );
});

const student = getStudent(1);
console.log(student);

HTML:

<script type="module" src="app.js"></script>

Run using a local server.
*/



// EXERCISE 13 — Web Storage Methods

// setItem()
localStorage.setItem("name", "Raghad");
localStorage.setItem("age", "23");
localStorage.setItem("country", "Jordan");

// getItem()
console.log("Exercise 13:");
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));

// key(index)
console.log("First key:", localStorage.key(0));

// length
console.log("Number of items:", localStorage.length);

// Display all storage contents
for (let i = 0; i < localStorage.length; i++) {

    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    console.log(key + ": " + value);
}

// removeItem()
localStorage.removeItem("age");

console.log(
    "After removing age:",
    localStorage.getItem("age")
);

// clear()
// Uncomment when you want to remove everything.

// localStorage.clear();


// EXERCISE 14 — Local Storage To-Do List

let tasks = JSON.parse(
    localStorage.getItem("tasks")
) || [];

function addTask(taskName) {

    const task = {
        id: Date.now(),
        name: taskName,
        completed: false
    };

    tasks.push(task);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function completeTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {
            task.completed = true;
        }

        return task;
    });

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function clearTasks() {

    tasks = [];

    localStorage.removeItem("tasks");
}

function displayTasks() {

    console.log("Tasks:");

    tasks.forEach(task => {

        console.log(
            task.name +
            " - " +
            (task.completed ? "Completed" : "Not completed")
        );
    });

    console.log("Number of tasks:", tasks.length);
}

// Example
addTask("Study JavaScript");
addTask("Practice React");

displayTasks();



// EXERCISE 18 — Session Storage Multi-Step Form


let currentStep = Number(
    sessionStorage.getItem("currentStep")
) || 1;

let registrationData = JSON.parse(
    sessionStorage.getItem("registrationData")
) || {};

function saveStep(step, data) {

    registrationData = {
        ...registrationData,
        ...data
    };

    sessionStorage.setItem(
        "registrationData",
        JSON.stringify(registrationData)
    );

    sessionStorage.setItem(
        "currentStep",
        step
    );

    currentStep = step;
}

function nextStep(data) {

    saveStep(currentStep + 1, data);

    console.log("Moved to step:", currentStep);
}

function previousStep() {

    if (currentStep > 1) {
        currentStep--;

        sessionStorage.setItem(
            "currentStep",
            currentStep
        );
    }

    console.log("Current step:", currentStep);
}

function restoreForm() {

    const savedData = JSON.parse(
        sessionStorage.getItem("registrationData")
    );

    const savedStep = sessionStorage.getItem("currentStep");

    console.log("Restored data:", savedData);
    console.log("Restored step:", savedStep);
}

// Example
saveStep(1, {
    name: "Raghad",
    email: "raghad@example.com"
});

nextStep({
    university: "University of Jordan",
    major: "Computer Science"
});

restoreForm();



// EXERCISE 19 — Cookies & Preferences Manager

// Set cookie
function setCookie(name, value, days) {

    const date = new Date();

    date.setTime(
        date.getTime() + days * 24 * 60 * 60 * 1000
    );

    document.cookie =
        name +
        "=" +
        encodeURIComponent(value) +
        ";expires=" +
        date.toUTCString() +
        ";path=/";
}

// Read cookie
function getCookie(name) {

    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {

        const cookie = cookies[i].trim();

        if (cookie.indexOf(name + "=") === 0) {

            return decodeURIComponent(
                cookie.substring(name.length + 1)
            );
        }
    }

    return null;
}

// Delete cookie
function deleteCookie(name) {

    setCookie(name, "", -1);
}

// Theme preference
function setTheme(theme) {
    setCookie("theme", theme, 30);
}

// Language preference
function setLanguage(language) {
    setCookie("language", language, 30);
}

// Save preferences
setTheme("dark");
setLanguage("English");

// Display saved preferences
console.log("Exercise 19:");
console.log("Theme:", getCookie("theme"));
console.log("Language:", getCookie("language"));