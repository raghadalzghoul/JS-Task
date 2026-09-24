'use strict'

//q1
console.log(typeof (100)) //number

//q2
console.log(typeof (73.9))       //number
//q3
console.log(typeof (NaN));  //number
//q4
console.log(typeof ("Water")) //string
//q5
console.log(typeof (false))//booleaan
//q6
console.log(typeof (9 != 11)) //booleaan
//q7
console.log("Orang" + "e") //orange
//q8
console.log("Orange" - "s") // NAN
//q9
console.log("4" + "8")   //48
//q10
console.log("name" + 3) //name3
//q11
console.log("name" - 3);//NAN
//q12
console.log(82 * "word"); //NAN
//q13
console.log(1 + "hello") //1hello
//q14
console.log(1 + true) //2
//q15
console.log("hello" + true) //hellotrue
//q16
console.log(typeof (Infinity)) //number
console.log(1 == '1') //true
console.log(1 === '1')//false



///////////////////JavaScript Exercises – Basics   

//Cash flow ratio  

let cash = 1000;
let liabilities = 500;
let output = cash / liabilities

console.log(output)


//Net income  
let revenues = 1000
let expenses = 500
let output2 = revenues - expenses;
console.log(output2)

//Total assets 

let liabilities3 = 1000, equity = 500
let output3 = liabilities3 - equity;

console.log(output3)


// Net income (using profit margin and sales)


let profit = 1000, sales = 500

let output4 = profit * sales;
console.log(output4)


//Average
let x = 7, y = 9, z = 2;
let output5 = (x + y + z) / 3;
console.log(output5);

//Discount  
let price = 150, discount = 30;
let Discount = (price * discount) / 100;
let FinalPrice = price - Discount
console.log(FinalPrice)

//function Age

 let Age = 40;


 if (18 < Age < 30) 
console.log(true)
else  console.log(false) ;


//Exponential

let number1 =2, number2= 3 
let expo=number1 ** number2;
console.log(expo)


//Remainder
let  number3= 10, number4= 4 
let Remainder =number3%number4
console.log(Remainder)



/////////////////////////////string
let Strings="Welcome To Orange";
console.log(Strings.toUpperCase());
console.log(Strings.slice(8,10).toUpperCase());
console.log(Strings.replace("Welcome to", "Hello from"));
console.log(Strings.length);
console.log(Strings.replace("Orange", '"Orange"'));
console.log(Strings.concat(" Jordan"));

let W = "cactus";
console.log(W[0] + W.slice(1).replaceAll("c", "*"));




////////////////////////////////array

let arr = ["Coding", "Academy", "By", "Orange"];



arr.push("Jordan");

console.log(arr);



console.log(arr.slice(0, 2));





arr.unshift("Welcome", "To");

console.log(arr.slice(0, 6));




console.log(arr.slice(3, 6));


console.log(arr.join(" ").slice(10,35));


console.log(arr.slice(2, 6));


console.log([arr[2],arr[5]]);











var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop();

console.log(vegetables);



fruit.shift();

console.log(fruit);





let index = fruit.indexOf("orange");

console.log(index);




fruit.push(index);

console.log(fruit);




let length = vegetables.length;

console.log(length);




vegetables.push(length);

console.log(vegetables);



let food = fruit.concat(vegetables);

console.log(food);




food.splice(4, 2);    //(starting element ,nimber of element to remove)

console.log(food);



food.reverse();

console.log(food);




let result = food.join(" ");

console.log(result);


/////////////////condetionals

//1

let birthYear = 2000;

let currentY = new Date().getFullYear();

let age = currentY - birthYear;



if (age > 60) {
    console.log("You may join the seniors’ program.");
} else if (age > 30) {
    console.log("You are not eligible. You may join other programs.");
} else if (age >= 18 && age <= 30) {
    console.log("You are eligible. Start your application.");
} else {
    console.log("You may join the kids' program.");
}


//2



function switchLetters(str) {

    let result = "";

    for (let i = 0; i < str.length; i++) {

        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }

    }

    return result;
}

console.log(switchLetters("OrAnGe"));



//3


function camelCase(str) {

    let words = str.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {

        if (i === 0) {
            result += words[i];
        } else {
            result += words[i][0].toUpperCase() + words[i].slice(1);
        }

    }

    return result;
}

console.log(camelCase("Coding Academy by Orange"));



//4


function removeElement(arr, element) {

    let index = arr.indexOf(element);

    if (index !== -1) {
        arr.splice(index, 1);
    }

    return arr;
}

console.log(
    removeElement(["Coding", "Academy", "By", "Orange"], "By")
);


//5


function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

}

console.log(checkEvenOdd(7));




//6


function isNumber(value) {

    return typeof value === "number";

}

console.log(isNumber(10));


//7


function largest(a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }

}

console.log(largest(10, 20));


//8


function triangleType(a, b, c) {

    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || a === c || b === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }

}

console.log(triangleType(5, 5, 5));


//9

function inRange(number, min, max) {

    return number >= min && number <= max;

}

console.log(inRange(15, 10, 20));


//10
function isLeapYear(year) {

    if (year % 400 === 0) {
        return true;
    }

    if (year % 100 === 0) {
        return false;
    }

    return year % 4 === 0;
}

console.log(isLeapYear(2024));


/////////////////////////loops

for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}





let i = 1;

while (i <= 50) {

    if (i % 2 === 0) {
        console.log(i);
    }

    i++;
}




//3
//even

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}




//odd

for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}

//4


for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}


////5

function fizzBuzz(number) {

    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }

}

console.log(fizzBuzz(1));
console.log(fizzBuzz(15));



//6

function fizzBuzz(number) {

    if (number > 100) {
        return;
    }

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }

    fizzBuzz(number + 1);
}

fizzBuzz(1);

//7
function banknotes(amount, notes) {

    let result = [];

    for (let i = 0; i < notes.length; i++) {

        while (amount >= notes[i]) {

            result.push(notes[i]);

            amount -= notes[i];
        }
    }

    return result;
}

console.log(banknotes(57, [25, 10, 5, 1]));

//8

function countCharacter(str, character) {

    let count = 0;

    str = str.toLowerCase();
    character = character.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        if (str[i] === character) {
            count++;
        }

    }

    return count;
}

console.log(countCharacter("Coding Academy by Orange", "o"));


//9
//a
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
//b
for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}
//c
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}
//d
for (let i = 50; i >= 20; i--) {

    if (i % 3 === 0) {
        console.log(i);
    }

}
//10
let text = "CodingAcademy";

let array = [7, 500, "KH404", "black", 36];

//e

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//f

for (let i = text.length - 1; i >= 0; i--) {
    console.log(text[i]);
}

//11
let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];

let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    } else {
        odds.push(numbers[i]);
    }

}

console.log(evens);
console.log(odds);

//12

let proteins = [
    "chicken",
    "pork",
    "tofu",
    "beef",
    "fish",
    "beans"
];

let grains = [
    "rice",
    "pasta",
    "corn",
    "potato",
    "quinoa",
    "crackers"
];

let vegetables1 = [
    "peas",
    "green beans",
    "kale",
    "edamame",
    "broccoli",
    "asparagus"
];

let beverages = [
    "juice",
    "milk",
    "water",
    "soy milk",
    "soda",
    "tea"
];

let desserts = [
    "apple",
    "banana",
    "more kale",
    "ice cream",
    "chocolate",
    "kiwi"
];


function createMeals(numberOfMeals) {

    let meals = [];

    for (let i = 0; i < numberOfMeals; i++) {

        let meal = [
            proteins[i % proteins.length],
            grains[i % grains.length],
            vegetables1[i % vegetables1.length],
            beverages[i % beverages.length],
            desserts[i % desserts.length]
        ];

        meals.push(meal);
    }

    return meals;
}

console.log(createMeals(4));



//Objects

function getProperties(obj) {

    return Object.keys(obj);

}

let student = {
    name: "Raghad",
    age: 23,
    major: "Computer Science"
};

console.log(getProperties(student));

//2
function countProperties(obj) {

    return Object.keys(obj).length;

}

console.log(countProperties(student));


//3

function combineObjects(obj1, obj2) {

    return Object.assign({}, obj1, obj2);

}

let person = {
    name: "Raghad"
};

let information = {
    age: 23
};

console.log(combineObjects(person, information));

//4

function uppercaseValues(obj) {

    let result = {};

    for (let key in obj) {

        result[key] = obj[key].toUpperCase();

    }

    return result;
}

let data = {
    name: "raghad",
    city: "amman"
};

console.log(uppercaseValues(data));

//5

function removeNull(obj) {

    let result = {};

    for (let key in obj) {

        if (obj[key] !== null) {
            result[key] = obj[key];
        }

    }

    return result;
}

let data1 = {
    name: "Raghad",
    age: null,
    city: "Amman"
};

console.log(removeNull(data1));

//6


function sortProperties(obj) {

    return Object.keys(obj).sort();

}

let student1 = {
    name: "Raghad",
    age: 23,
    city: "Amman",
    major: "Computer Science"
};

console.log(sortProperties(student1));




/////////////////////second

let age1 = 27;

if (age1 > 18) {
    console.log("You are an adult");
}


//2

let num = 4;

if (num % 2 === 0) {
    console.log("The number is even");
}


//3
let char = "a";

if (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z")
) {
    console.log("It's a letter");
}
//4


let list = [1, 2, 3];

if (Array.isArray(list)) {
    console.log("It's an array");
}


//5
let x1 = 5;

if (x1 > 0) {
    console.log("x is a positive number");
}


//9

let z1 = 9;

if (z1 % 3 === 0) {
    console.log("z is a multiple of 3");
}


//10


let password = "mypassword123";

if (password.length >= 8) {
    console.log("Your password is strong");
}
//11
let age2 = 30;

if (age2 >= 18 && age2 <= 65) {
    console.log("You are of working age");
}
//12

let color = "red";

if (color === "red" || color === "green" || color === "blue") {
    console.log("color is a primary color");
}

//13

function isValidNumber(value) {

    if (!isNaN(value)) {
        console.log(value + " is a valid number");
    } else {
        console.log(value + " is not a number");
    }

}

isValidNumber(11);
isValidNumber("19");
isValidNumber("xyz");
isValidNumber("17.5");
isValidNumber("21F");


       
///////////////JavaScript Functions  ///////////////////////
//1

function findSmallest(arr1) {
    let smallest = arr1[0];

    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] < smallest) {
            smallest = arr1[i];
        }
    }

    return smallest;
}

console.log(findSmallest([30, 45, 60, 7]));



//2

function AlphabeticalOrder(str) {
    let arr = str.split("");

    arr.sort();

    return arr.join("");
}

console.log(AlphabeticalOrder("hello"));

//3


function factorial(numb) {
    if (numb > 0) {
        return numb * factorial(numb - 1);
    } else {
        return 1;
    }
}

console.log(factorial(8));

//4




function oddOrEven(num){
    if(num%2==0)
         return "even"
  
    else

              return "Odd"

}


console.log(oddOrEven(6)); 



//5

function addUp(num){
    let accu=0;
for(i=1;i<=num;i++) 
{


      accu+=num

}
return accu

}

console.log(addUp(6)); 

//6


function minMaxLengthAverage(arr) {

    arr.sort((a, b) => a - b);

    let newARR = [];

    let length = arr.length;
    let smallest = arr[0];
    let largest = arr[arr.length - 1];
    
    let sum = 0;
       for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / length;

    newARR.push(smallest);
    newARR.push(largest);
      newARR.push(length);
newARR.push(average);
    return newARR;
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));




// 7
function countWords(str) {
    let words = str.split(" ");
    return words.length;
}

console.log(countWords("hello from CodingAcademy!"));



// 8
function MultiplyByLength(arr) {
    let length = arr.length;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * length);
    }

    return newArr;
}

console.log(MultiplyByLength([4, 2, 5]));



// 9
function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}

console.log(checkEnding("CodingSchool", "Ac"));



// 10
function doubleChar(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr += str[i] + str[i];
    }

    return newStr;
}

console.log(doubleChar("Coding"));



// 11
function findIndex(arr, element) {
    return arr.indexOf(element);
}

console.log(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Ali"));



///////////////////////////JS loops////////////////////



// 1
let j = 1;

while (j <= 10) {
    console.log(i);
    j++;
}


// 2
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}


// 3
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 4
let sum4 = 0;

for (let i = 1; i <= 10; i++) {
    sum4 += i;
}

console.log(sum4);
// 55


// 5
let arr5 = [1, 2, 3, 4, 5];
let largest5 = arr5[0];

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] > largest5) {
        largest5 = arr5[i];
    }
}

console.log(largest5);
// 5


// 6
let arr6 = [1, 2, 3, 4, 5];
let sum6 = 0;

for (let i = 0; i < arr6.length; i++) {
    sum6 += arr6[i];
}

let average6 = sum6 / arr6.length;

console.log(average6);
// 3


// 7
let number7 = 5;
let factorial7 = 1;

for (let i = 1; i <= number7; i++) {
    factorial7 *= i;
}

console.log(factorial7);
// 120


// 8
let number8 = 10;
let first8 = 0;
let second8 = 1;

for (let i = 0; i <= number8; i++) {
    if (first8 > number8) {
        break;
    }

    console.log(first8);

    let next8 = first8 + second8;
    first8 = second8;
    second8 = next8;
}

// 0 1 1 2 3 5 8


// 9
let number9 = 20;

for (let i = 2; i <= number9; i++) {

    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

// 2 3 5 7 11 13 17 19


// 10
let arr10 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < arr10.length; i++) {

    for (let j = 0; j < arr10[i].length; j++) {
        console.log(arr10[i][j]);
    }

}


// 11
let arr11 = [1, 2, 3, 4, 5];

for (let i = arr11.length - 1; i >= 0; i--) {
    console.log(arr11[i]);
}


// 12
let arr12 = [1, 2, 3, 4, 5];
let step12 = 2;

for (let i = 0; i < arr12.length; i += step12) {
    console.log(arr12[i]);
}


// 13
let arr13 = [1, 2, 1, 3, 2, 1];
let number13 = 1;
let count13 = 0;

for (let i = 0; i < arr13.length; i++) {

    if (arr13[i] === number13) {
        count13++;
    }

}

console.log(count13);



// 14
const heros = [
    { name: 'Iron Man', power: 'Tech' },
    { name: 'Spider-Man', power: 'Spider abilities' },
    { name: 'Thor', power: 'Godly powers' },
    { name: 'Hulk', power: 'Super strength' }
];

const newHeros = heros.map(function(hero, index) {

    return {
        hero: hero.name,
        power: hero.power,
        id: index
    };

});

console.log(newHeros);


// 15
const inputWords = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
];

const newWords = inputWords.filter(function(word) {
    return word.length > 7;
});

console.log(newWords);



// 16
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumSquaredDivisibleBy5 = numberss.reduce(function(sum, number) {

    if (number % 5 === 0) {
        return sum + (number * number);
    }

    return sum;

}, 0);

console.log(sumSquaredDivisibleBy5);













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