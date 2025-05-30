//1.
str = "madam"
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString(str)); // Output: "olleh"

//2.
function polindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}
console.log(polindrome(str)); // Output: true

//3.
input = "javascript";
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}   
console.log(countVowels(input)); // Output: 3

//4.
let factorial = 5;
function factorialOfNumber(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
   
    return n * factorialOfNumber(n - 1);
}
console.log(factorialOfNumber(factorial)); // Output: 120

//5.
let largestNumber = [3, 5, 7, 2, 8];
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}
console.log(findLargestNumber(largestNumber)); // Output: 8

//6.
let smallestNumber = [3, 5, 7, 2, 8];
function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (let num of arr) {
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}
console.log(findSmallestNumber(smallestNumber)); // Output: 2



//7.
let checkPrime = 15;
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(checkPrime)); // Output: true

//8.
let sumElement = [1, 2, 3, 4, 5];
function sumOfArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumOfArray(sumElement)); // Output: 15

//9.
let removeDuplicates = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicateElements(arr) {
    return [...new Set(arr)];
}   
console.log(removeDuplicateElements(removeDuplicates)); // Output: [1, 2, 3, 4, 5]


//10.
let fibonacciNumber = 6;
function fibonacci(n)
{
    let fib = [0,1];
    for(let i = 2; i< n; i++)
    {
        fib[i] = fib[i-1] + fib[i-2];

    }
    return fib;
}
console.log(fibonacci(fibonacciNumber)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



//11.
let Str = "silent";
let Anagram = "listen";

function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
console.log(isAnagram(Str, Anagram)); // Output: true  


//12.
let secondLargest = [3, 5, 7, 2, 8];

function findSecondLargest(arr) {
    let Largest = secondLargest[0];
    let secondLarge = secondLargest[0];
    for(let num of arr)
    {
        if(num > Largest)
        {
            secondLarge = Largest;
            Largest = num;
        }
        else if(num > secondLarge && num < Largest)
        {
            secondLarge = num;
        }
    }    
    return secondLarge;     
}
console.log(findSecondLargest(secondLargest)); // Output: 7


//13.
let swapA = 5;
let swapB = 10;
function swapvalues(a, b){
    a = a + b;
    b = a - b;
    a = a - b
    return [a, b];
}
console.log(swapvalues(swapA, swapB)); // Output: [10, 5]


//14.
let capitalizeStr = "hello world";
function capitalizeFirstLetter(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(capitalizeFirstLetter(capitalizeStr)); // Output: "Hello World"


//15.
let countWords = "This is a sample sentence";
function countWordsInString(str) {
    return str.split(' ').length;
}
console.log(countWordsInString(countWords)); // Output: 5

//16.
let reverseWords = "Hello World";
function reverseWordsInString(str) {
    let words = str.split(' ');
    for(let i = 0; i < words.length ; i++)
    {
        words[i] = words[i].split('').reverse().join('');
    }
    return words.join(' ');
}
console.log(reverseWordsInString(reverseWords)); // Output: "olleH dlroW"

//17.
let CheckNumber = 7 ;
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(CheckNumber)); // Output: "Odd"


//18.
let checkrrSort = [5, 2, 8, 1, 4];
function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(isArraySorted(checkrrSort)); // Output: false


//19.
let gcdNum1 = 12;
let gcdNum2 = 18;

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(gcdNum2, gcdNum1)); // Output: 6



//20.
let lcmNum1 = 12;
let lcmNum2 = 18;
function lcm(a,b){
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return (lcmNum1 * lcmNum2) / a;
}
console.log(lcm(lcmNum1, lcmNum2)); // Output: 36


//21.
let countOccurence = "banana";
function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countCharacterOccurrences(countOccurence, 'a')); // Output: 3


//22.
let mergeArray1 = [1, 2, 3];
let mergeArray2 = [4, 5, 6];
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays(mergeArray1, mergeArray2)); // Output: [1, 2, 3, 4, 5, 6]


// //23.
// let flatterArray = [1, [2, [3,[4, [5]]]]];
// function flattenArray(arr) {
//     return arr.reduce((flat, toFlatten) => {
//         return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
//     }, []);
// }
// console.log(flattenArray(flatterArray)); // Output: [1, 2, 3, 4, 5]

//24.
let missingNumber = [1, 2, 4, 5, 6];
function findMissingNumber(arr){
    let n = arr.length + 1;
    let total  = 0;
    for(let i = 1; i<= n ; i++)
    {
        total = total + i;
    }
     
    let sum = arr.reduce((acc, num) => acc + num, 0);

    return total - sum;
}
console.log(findMissingNumber(missingNumber)); // Output: 3


//25.

let removeFalsyValues = [0, 1, false, 2, '', 3, null, undefined, 4];
function removeFalsy(arr) {    
    return arr.filter(num => num !== false && num !== null && num !== undefined && num !== 0 && num !== '');
}
console.log(removeFalsy(removeFalsyValues)); // Output: [1, 2, 3, 4]



//26.
let StringToNumber = "12345";
function stringToNumber(str) {
    return Number(str);
}
console.log(stringToNumber(StringToNumber)); // Output: 12345


//27.
let numberToString1 = 67890;
function numberToString(num) {
    return num.toString();
}
console.log(numberToString(numberToString1)); // Output: "67890"

//28.
let uniqueArray = [1, 2, 2, 3, 4, 4, 5];
function getUniqueElements(arr) {
    return [...new Set(arr)];
}
console.log(getUniqueElements(uniqueArray)); // Output: [1, 2, 3, 4, 5]

console.log("--------------------");

//29.
let frequencyArray = [1, 2, 4,2, 3, 4, 4, 5];
function countFrequency(arr) {
    const frequency = {};
    for (let num of arr) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }

    }
    return frequency;
}
console.log(countFrequency(frequencyArray)); // Output: { '1': 1, '2': 2, '3': 1, '4': 2, '5': 1 }


//30.
let intersectionArray1 = [1, 2, 3, 4];
let intersectionArray2 = [3, 4, 5, 6];

function findIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}   
console.log(findIntersection(intersectionArray1, intersectionArray2)); // Output: [3, 4]



//31.
let UnionArray1 = [1, 2]; 
let UnionArray2 = [2, 3];
function findUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(findUnion(UnionArray1, UnionArray2)); // Output: [1, 2, 3]


//32.
let sumOfDigits = 12345;
function sumDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumDigits(sumOfDigits)); // Output: 15

//33.
let reverseNumber = 12345;
function reverseDigits(num) {
    return Number(num.toString().split('').reverse().join(''));
}
console.log(reverseDigits(reverseNumber)); // Output: 54321



//34.
let CountEvenOdd = 123456;
function countEvenOddDigits(num) {
    let evenCount = 0;
    let oddCount = 0;
    const digits = num.toString().split('');
    
    for (let digit of digits) {
        if (Number(digit) % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    return { evenCount, oddCount };
}
console.log(countEvenOddDigits(CountEvenOdd)); // Output: { evenCount: 3, oddCount: 3 }

//35.

let celcius = 25;
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(celcius)); // Output: 77    

// //36.
// let checkStrNumeric = "12345";
// function isNumeric(str) {
//     return !isNaN(str) && !isNaN(parseFloat(str));
// }
// console.log(isNumeric(checkStrNumeric)); // Output: true


// //37.
// let nonRepeatingString = "aabbcddeeegc";
// function findFirstNonRepeatingCharacter(str) {
//     const charCount = {};
//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
    
//     for (let char of str) {
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }
    
//     return null; // If no non-repeating character is found                                                      
// }   
// console.log(findFirstNonRepeatingCharacter(nonRepeatingString)); // Output: "c"



//38.
let duplicateElement = [1, 2, 3, 4, 5, 1, 2];
function findDuplicateElements(arr) {
    const seen = new Set();
    const duplicates = [];
    
    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.push(num);
        } else {
            seen.add(num);
        }
    }
    return [...new Set(duplicates)];
}
console.log(findDuplicateElements(duplicateElement)); // Output: [1, 2]

//39.
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNumber(1, 100)); // Output: Random number between 1 and 100


//40.
let checkLeapYear = 2024;
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(checkLeapYear)); // Output: true


//41.
let CountCases = "HelloWorld!";
function countUpperLowerCases(str) {
    let upperCount = 0;
    let lowerCount = 0;
    
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            upperCount++;
        } else if (char >= 'a' && char <= 'z') {
            lowerCount++;
        }
    }
    
    return { upperCount, lowerCount };
}

console.log(countUpperLowerCases(CountCases)); // Output: { upperCount: 2, lowerCount: 8 }


//42.
let AverageArray = [1, 2, 3, 4, 5];
function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log(calculateAverage(AverageArray)); // Output: 3


//43. 
let checkAllElementUnique = [1, 2, 3, 4, 5];
function areAllElementsUnique(arr) {
    const seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            return false; // Duplicate found
        }
        seen.add(num);
    }
    return true; // All elements are unique
}


//44.
let PrintStarPattern = 5;
function printStarPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        pattern += '*'.repeat(i) + '\n';
    }
    return pattern;
}
console.log(printStarPattern(PrintStarPattern));


//45.
let midium = [1, 2, 3, 4, 5];
function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2; // Average of two middle elements
    } else {
        return arr[mid]; // Middle element for odd length
    }
}
console.log(findMedian(midium)); // Output: 3

//46.
let mode = [1, 2, 2, 3, 4, 4, 4, 5];
function findMode(arr) {
    const frequency = {};
    let maxFreq = 0;
    let mode = [];
    
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mode = [num];
        } else if (frequency[num] === maxFreq) {
            mode.push(num);
        }
    }
    
    return mode;
}
console.log(findMode(mode)); // Output: [4]


//47.
let sumEvenNumbers = [1, 2, 3, 4, 5];
function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}
console.log(sumOfEvenNumbers(sumEvenNumbers)); // Output: 6


//48.
let sumOddNumbers = [1, 2, 3, 4, 5];
function sumOfOddNumbers(arr) {
    return arr.reduce((sum, num) => {
        if (num % 2 !== 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}   
console.log(sumOfOddNumbers(sumOddNumbers)); // Output: 9


//49.
let timeFormat = "14:30";
function convertTo12HourFormat(time) {
    let [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12; // Midnight case
    }
    
    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
}
console.log(convertTo12HourFormat(timeFormat)); // Output: "2:30 PM"

//50.
let checkValue = [1, 2, 3, 4, 5];
function checkValueInArray(arr, value) {
    return arr.includes(value);
}
console.log(checkValueInArray(checkValue, 3)); // Output: true



