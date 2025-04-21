let arr = [1,45,23,67,89,12,34,56,78,90];
console.log(arr.slice(1,3));


// console.log(arr[50]); //undefined

console.log(arr.splice(2,3,100,454,1,544,65,1,3,54,45,45,8,3));

console.log(arr);

let str = "Terminator";
let reverseJoin = str.split("").reverse().join("");
console.log(reverseJoin); // "ronimatreT"


let str2 = Array.from("Terminator");
console.log(str2); // ["T", "e", "r", "m", "i", "n", "a", "t", "o", "r"]

// concat
arr = [1,2,3];
arr2 = [4,5,6];
arr3 = arr.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
