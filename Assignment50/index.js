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

//34.
