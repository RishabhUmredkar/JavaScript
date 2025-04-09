// let fname = "Rishabh"
// let arr = [10,20,30, "Hello",null, undefined, NaN, true, 10n, `${fname}`, ()=>{
//     console.log("Hello Function");
//     return "hello";
// }]
// console.log(arr);

// console.log(arr[10]());




let a = () => {
    console.log("hello");
    console.log("_______");
    console.log("-------");
    return "Hello Return"
}
// a()
// console.log(a());

// let b = a();
// console.log(b);



let arr = [a(), 10, 20, "Array"]

// console.log("this is start");
// console.log(arr);

let nums = [4, 664, 65, 32, 656, 32, 2, 5, 65, 323, 656, 562, 23, 250, 2, 4]
let temp;
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
            temp = nums[j];
            nums[j] = nums[j + 1]
            nums[j + 1] = temp;
        }
    }
}
console.log(nums);



let apnmap = (cbf, numsArr) => {
    for (let i = 0; i < numsArr.length; i++) {
        cbf(numsArr[i]);
    }
}

apnmap((val) => {
    console.log(val * 10);
}, nums)


let s = nums.map((val, i, arr) => {
    return val * 20;
})
console.log(s);



let frName = ["Rishabh", "prajwal", "Gaurav", "Aman", "Mohit"]
let fetch = frName.map((val, i, arr) => {
    return val;
})
console.log(fetch);



let car = ["Swift", "BMW", "Audi", "Tesla", "XuV700", "Rolls Royce"]
let fetchCar = car.map((val, i, arr) => {
    return val;
})
console.log(fetchCar);


let number = [10, 7, 65, 66, 32, 6, 997, 89, 1, 2, 54, 4]
let fetchNumber = number.map((val, i, arr) => {
    return val * 3 + 10 + 2;
})
console.log(fetchNumber);

let reverseNumber = number.map((val, ind, arr) => {
    return (arr[arr.length - ind - 1])
})
console.log(reverseNumber);
