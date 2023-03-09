// Problem 1: 
// Description: In this function we take a positive number as input and do some mathemethical operation with previous oparated result and return final value as number 

function mindGame(number) {
    if (typeof number === 'number' && number > 0) {
        let multiply = number * 3;
        let added = multiply + 10;
        let division = added / 2;
        let substraction = division - 5;
        let finalResult = substraction;
        return finalResult;
    }
    else {
        return 'Please Enter a Valid Number';
    }
}

// Problem 2:
// Description: In this function we will take a string as parameter and check the parameter length if the parameter length is a even number we will return 'even' and if the number is odd will return 'odd'

function evenOdd(sentence) {
    if (typeof sentence === 'string') {
        if (sentence.length % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    else {
        return 'Please Enter the proper Value';
    }
}

// Problem 3
// Description : In this function below we will take a number as input value and differentiate the number with 7, if the substraction value is greater than 7 then it will return value multiply by 2 and if the substraction value is less than 7 then return the substraction value as result 

function isLGSeven(number) {
    if (typeof number === 'number') {
        let difference = number - 7;
        if (difference > 7) {
            let multiple = number * 2;
            return multiple;
        }
        else {
            return difference;
        }
    }
    else {
        return 'Please Enter a Proper value';
    }
}

// Problem 4
// description: In this function we will take an array of numbers as input parameter and loop throw the array elements and if the array element is negative then we will count it as bad data and after counting all bad data we will return total numbers of bad data value 

function findingBadData(numbers) {
    if (Array.isArray(numbers)) {
        let badData = 0;
        for (let i = 0; i < numbers.length; i++) {
            let number = numbers[i];
            if (number < 0) {
                badData++;
            }
        }
        return badData;
    }
    else {
        return 'Please Enter a set of Numbers';
    }
}

// Problem 5 
