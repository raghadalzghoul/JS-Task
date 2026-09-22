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