// let heading  = document.getElementsByTagName('h1');

// for(let i = 0 ; i<heading.length; i++)
// {
//     heading[i].style.backgroundColor = "red"
// }


let x = 10.156;
console.log(Math.floor(x)); // 10
console.log(Math.ceil(x)); // 11
console.log(Math.round(x)); // 10

console.log(Math.round(10000 * Math.random())); // Example output: 1234

let tens = [" ", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
let ones = [" ", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
let teens = [" ", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

let numberToWords = (num) => {
    console.log(num);
    
    if (num === 0) return "Zero";
    if (num < 0) return "Negative " + numberToWords(-num);
    if (num > 9999) return "Number too large";

    let words = "";

    if (Math.floor(num / 1000) > 0) {
        words += ones[Math.floor(num / 1000)] + " Thousand ";
        num %= 1000;
    }

    if (Math.floor(num / 100) > 0) {
        words += ones[Math.floor(num / 100)] + " Hundred ";
        num %= 100;
    }

    if (num > 10 && num < 20) {
        words += teens[num - 10] + " ";
    } else {
        words += tens[Math.floor(num / 10)] + " ";
        num %= 10;
        words += ones[num] + " ";
    }

    return words.trim();
}


console.log(numberToWords(Math.round(10000 * Math.random()))); // Output: "One Thousand Two Hundred Thirty Four"