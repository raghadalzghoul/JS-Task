      
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


