//CodeWar Solutions


//likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

 function likes(names) {
        if (names.length === 0) {
            return 'no one likes this';
        } else if (names.length === 1) {
            return `${names[0]} likes this`;
        } else if(names.length === 2) {
            return `${names[0]} and ${names[1]} like this`;
        } else if(names.length == 3) {
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        } else if(names.length > 3) {
            return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
        }
    }


//Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct. However,
// since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.


function maskify(cc) {
    if(cc.length === 0) {
        return "";
    }
    if(cc.length == 1) {
        return cc;
    }

    if(cc.length > 1) { //if length of string is > 1, replace last 4 digits.
        var replaced = cc.replace(/.(?=.{4,}$)/g, '#');
        return replaced;
    }
}


//Create a function that returns the sum of the two lowest positive numbers given
// an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    var numberOne = numbers[0];
    var numberTwo = numbers[1];
    return numberOne + numberTwo;
}

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything
// but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    var isNumber = /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6)
    return isNumber;
}


//You are given an array (which will have a length of at least 3, but could be very large) containing integers.
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer


function findOutlier(integers){
    var evens = [];
    var odds = [];
    for (var i = 0; i < integers.length; i++)
    {
        if ((integers[i] % 2) == 0)
        {
            evens.push(integers[i]);
        }
        else
        {
            odds.push(integers[i]);
        }
    }
    var elen = evens.length;
    var olen = odds.length;

    if (elen > olen)
    {
        return odds[0];
    }
    else
    {
        return evens[0];
    }
}

//Marketing thinks it would be great to welcome visitors to the site in their own language

function greet(language) {
    if(language == 'english') {
        return 'Welcome';
    }

    if(language == 'dutch') {
        return 'Welkom';
    }
    else {
        return 'Welcome';
    }
}


//Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

var moveZeros = function (arr) {
    let zero = [];
    let others = [];
    let together = [];

    for (let i =0; i <= arr.length-1; i++){
        if (arr[i] === 0){
            zero.push(arr[i])
        }
        else{
            others.push(arr[i])
        }
    }
    together = others.concat(zero);
    return together;
};


//Define a function that takes an integer argument and returns logical value true or
// false depending on if the integer is a prime.
function isPrime(num) {
    if (num < 2)
        return false;
    for (var i=2; i<num; i++) {
        if (num % i == 0) {
            return false;}}
    return true;
}


