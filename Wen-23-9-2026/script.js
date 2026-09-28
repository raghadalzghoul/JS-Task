


// =========================
// 1 - JavaScript Objects
// =========================

// 1
let persons = {
    name: "Adam",
    age: 25,
    gender: "male"
};

console.log(persons.name);
console.log(persons.age);
console.log(persons.gender);

// Adam
// 25
// male


// 2
let person2 = {
    name: "Adam",
    age: 25
};

person2.gender = "male";

console.log(person2);

// { name: "Adam", age: 25, gender: "male" }


// 3
let person3 = {
    name: "Adam",
    age: 25
};

console.log(person3.name);

// Adam



// =========================
// 2 - JavaScript Arrays
// =========================

// 1
let numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function(number) {
    console.log(number);
});

// 1
// 2
// 3
// 4
// 5


// 2
let fruits2 = ["banana", "cherry", "apple"];

fruits2.sort();

console.log(fruits2);

// ["apple", "banana", "cherry"]


// 3A - reverse()
let fruits3 = ["apple", "banana", "cherry"];

fruits3.reverse();

console.log(fruits3);

// ["cherry", "banana", "apple"]


// 3B - concat()
let arr3B1 = [1, 2, 3];
let arr3B2 = [4, 5, 6];

let combined = arr3B1.concat(arr3B2);

console.log(combined);

// [1, 2, 3, 4, 5, 6]


// 3C - slice()
let arr3C = [1, 2, 3, 4, 5, 6];

arr3C.splice(2, 2);

console.log(arr3C);

// [1, 2, 5, 6]


// 3D - splice()
let arr3D = [1, 2, 3, 4, 5];

arr3D.splice(2, 1);

console.log(arr3D);

// [1, 2, 4, 5]


// 3E - indexOf()
let arr3E = [1, 2, 3, 4, 5];

let index1 = arr3E.indexOf(2);

console.log(index1);

// 1


// 3F - join()
let arr3F = [1, 2, 3, 4, 5];

let string3F = arr3F.join(",");

console.log(string3F);

// "1,2,3,4,5"


// 3G - split()
let string3G = "1,2,3,4,5";

let arr3G = string3G.split(",");

console.log(arr3G);

// ["1", "2", "3", "4", "5"]


// 7 - length
let arr7 = [1, 2, 3, 4, 5];

console.log(arr7.length);

// 5


// 8 - for...of
let arr8 = [1, 2, 3, 4, 5];

for (let number of arr8) {
    console.log(number);
}

// 1
// 2
// 3
// 4
// 5


// 9 - Array.isArray()
let arr9 = [1, 2, 3, 4, 5];

console.log(Array.isArray(arr9));

// true