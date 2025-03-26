// let fun = (a,b)=>{

//     console.log(a*b);

// }

// fun(10,20);



let heading = document.querySelector("h1");

// Question : Find the number whether it is prime or not.
let a = parseInt(prompt("ehter then number"));

let isPrime = (a) => {
    let count = 0;
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            count++;
        }
    }
    if (count != 0) {
        heading.innerText = `${a} is not prime number`;
        // console.log(`${a}  is not prime`)
    }
    else {
        heading.innerText = `${a} is prime Number`;
        // console.log(`${a} is prime`)
    }
}
isPrime(a);
// console.log(typeof a);



// //3.
// let funExpression = function add(){
//     heading.innerText = 'this is function expression'
// }
// funExpression()

// // 4. 
// (function ()
// {
//     console.log("IIFE");
// })()


let higherOrder = (a,sum)=>{
    sum(a)
    console.log("hello");
};

let prime = (a)=> {
    console.log(a);
}
higherOrder(100, prime );