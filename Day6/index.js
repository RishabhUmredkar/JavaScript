// let func = () =>{
//     return "hello";
// }

// console.log(func());

// console.log(10*20);

// let whatIsReturned = func()
// console.log(whatIsReturned);



// let fun2 = () =>{
//     console.log("func 2");
//     fun2()
// }

// console.log(fun2);


let fun1 = (func) =>{       // 1. func == fun2
    console.log(func);      // 2. it will show the fun2 method
    return func(fun3)       //3. It will go to fun2 with arg as fun3
}

let fun2 = (func) =>{
    console.log("fun2",func);   //4. it will show the fun3 method
     return func("hello");      //5. it will go to fun3 method with hello as a parameter
}

let fun3 = (arg) =>{
    console.log("fun3",arg);
    return arg;
}

let x = fun1(fun2);
console.log(x);




// Assignment 28 / 03 / 2025

// 1. What is a Callback?
// • Task: Write a function called shout that accepts a message and a callback.
// • Goal: The callback should decide how to display the message (e.g., print "HELLO" if the message is "hello").
// • Hint: A callback is just a function you pass to another function.


// let shout = (msg,cbf) =>{
//     cbf(msg);
// };

// let cbf = (msg) => {
//     console.log(msg);
// };

// shout("hello",cbf);


let robot = (name1, cbf)=>{
    cbf(name1)
}

let cbf = (name1)=>{
    console.log(`hello ,${name1} I am your friendly robot`);
    
}

robot("Rishabh",cbf);


let mathWizard = (num1 , num2, opt)=>{
    opt(num1, num2);
}

let add = (num1, num2) =>{
    console.log(num1+num2);
    }

let sub = (num1, num2) =>{
    console.log(num1-num2);
}
            

mathWizard(10,20, sub);



let decisionMaker = (decision,sayNo,sayYes) =>{

    if(decision){
        sayYes();
    }
    else{
        sayNo();
    }
}
let  sayYes = () =>
{
    console.log("Happy");
}
let sayNo = () =>
{
    console.log("Sad");
}

let isHappy = true;
decisionMaker(isHappy, sayNo, sayYes);


let doubleFun = (number,double) =>{
    double(number);
}

let double = (number)=>
{
    console.log(number * number);
}

doubleFun(5 , double);




let giveCompliment = (name12,giveCompliment) =>{
    console.log(name12);
}

compliment("Rishabh", giveCompliment);