// REVERSE AN ARRAY

let revarr =[1,2,3,4,5];
let i = 0;
let end = revarr.length - 1;
let temp = 0;

while (i < end) {
    temp = revarr[i];
    revarr[i] = revarr[end];
    revarr[end] = temp;
    i++;
    end--;
}
console.log(revarr); // [5,4,3,2,1]
revarr.reverse(); // [1,2,3,4,5]
console.log(revarr); // [1,2,3,4,5]

// FIND MAXIMUM AND MINIMUM ELEMENTS IN AN ARRAY            
let arr = [1,2,3,4,5];

let max = arr[0];
let min = arr[0];
for(let i = 0; i<arr.length; i++){
    if(arr[i] >max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
}

console.log(max); // 5
console.log(min); // 0



// find the array is palindrome or not
let palindrome = [1,2,3,4,5,4,3,2,1];
let start = 0;
let end1 = palindrome.length - 1;
let isPalindrome = true;
while (start < end1) {
    if(palindrome[start] !== palindrome[end1]) {
        console.log("Not a palindrome");
        isPalindrome = false;
        break;
    }
    start++;
    end1--;
}
if(isPalindrome) {
    console.log("Palindrome");
}



// Remove duplicates from an array
let arr1 = [1,2,3,4,5,1,2,3,4,5];
let uniqueArr = [];
for(let i = 0; i<arr1.length; i++){
    if(!uniqueArr.includes(arr1[i])){
        uniqueArr.push(arr1[i]);
    }
}
console.log(uniqueArr); // [1,2,3,4,5]