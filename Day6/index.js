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

//1.
let shout = (msg,cbf1) =>{
    cbf1(msg);
};

let cbf1 = (msg) => {
    console.log(msg.toUpperCase());
};

shout("hello",cbf1);



//2.
let robot = (name1, cbf)=>{
    cbf(name1)
}

let cbf = (name1)=>{
    console.log(`hello ,${name1} I am your friendly robot`);
    
}

robot("Rishabh",cbf);



//3.
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



//4.
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




//5.
let doubleFun = (number,double) =>{
    double(number);
}

let double = (number)=>
{
    console.log(number * number);
}

doubleFun(5 , double);




//6.
let giveCompliment = (name12, compliment) =>{
    compliment(name12);
}

let compliment = (name12) =>{
    console.log(`hey ${name12}`);
    
}

giveCompliment("Rishabh", compliment);



//7.
let evenOdd = (num, checkNumber) =>{
    checkNumber(num);
}

let check = (num) =>{
    if(num %2 ==0)
    {
        console.log(`${num} is Even`);
    }
    else{
        console.log(`${num} is Odd`);
    }
}
evenOdd(12, check);




//8.
let  judgeNumber = (num, check) =>{
    check(num);
}

let find = (num) =>{
    if(num >0){
        console.log(`${num} Is positive`);
    }
    else{
        console.log(`${num} Is Negative`);
    }
} 

judgeNumber(-12, find);



//9.
let tinyCalculator = (num1, num2, opt) =>{
    console.log(opt(num1, num2));
    
}

let addition = (num1, num2) =>{
    return num1 + num2
}

let substraction = (num1, num2) =>{
    return num1 - num2
}

let multiplication = (num1, num2) =>{
    return num1 * num2
}

let division = (num1, num2) =>{
    return num1 + num2
}
tinyCalculator(15 , 5, addition);



//10.
let nameStyler =  (name, style) =>{
    console.log(style(name));
}

let toUpperCaseStyle = (name) =>{
    return name.toUpperCase();
}
let toLowerCaseStyle = (name) =>{
    return name.toLowerCase();
}
let toStarCaseStyle = (name) =>{
    return `⭐${name}⭐`;
}

nameStyler("Rishabh", toUpperCaseStyle);
//nameStyler("Rishabh", toLowerCaseStyle);
//nameStyler("Rishabh", toStarCaseStyle);


//11.
let transform = (numb1 , callback) =>{
    console.log(callback(numb1));
}

let square = (numb1) =>{
    return numb1*numb1;
}
let triple = (numb1) =>{
    return numb1*numb1*numb1;
}

transform(5, square);
transform(4, triple);



//12.
let askOracle = (que,randomGenerate)=>{
    console.log(`Question : ${que}`);
    console.log(`Oracle ans :${randomGenerate()} `);
}

let randomAns = () =>{
    const answer = ["yes", "no", "MayBe", "not Sure", "Definitely"];
    return answer[Math.floor(Math.random() * answer.length)];
}


askOracle("Is India greate country", randomAns);

//13.
let numberBattle = (number2,number1, large) =>{
    console.log(large(number1, number2));
}

let largeNumber = (number1, number2) =>{
    return Math.max(number1,number2);
}

numberBattle(121, 25, largeNumber);



//14.

let moodChecker = (mood, msg) =>{
   console.log(msg(mood));
}

let message = (mood) =>{
    if(mood == "happy"){
        return "😀";
    }if(mood == "sad"){
        return "😔";
    }if(mood == "angry"){
        return "😡";
    }if(mood == "masti"){
        return "💥";
    }if(mood == "tired"){
        return "😴";
    }else{
        return "🤔";
    }
}
moodChecker("happy", message);


//15.
let magicMirror = (word, reverse)=>{
    console.log(reverse(word));
}
let reverse = (word) =>{
let ans ="";
    for(i = word.length; i>=0; i--)
    {
        ans = ans + word.charAt(i);
    }
    return ans;
}

magicMirror("hbahsir",reverse);




//16. 

let isAdult = (age, check) =>{
    console.log(check(age));
}

let checkAge = (age) =>{
    if(age>17)
    {
        return "you are an adult";
    }
    else{
        return "you are minor"
    }
}
isAdult(18,checkAge);

//17.
let magicNumber = (number,lucky)=>{
    console.log(lucky(number));
}

let lucky = (number)=>{
    if(number == 7){
        return "Lucky number !"
    }
    else{
        return "Just a number !"
    }
}
magicNumber(9,lucky)

//18.
let speak = (msg, volume)=>{
    console.log(volume(msg));
}

let volume = (msg) =>{
    return msg == msg.toUpperCase() ? "Shouting" : "Whispering !"
}
speak("hELLO",volume);


//19.
let magic = (num, divide)=>{
    console.log(divide(num));
}

let divide = (num) =>{
    return num %5  == 0 ? "High Five !" : "No Magic !"
}
magic(26,divide);



//20.
let introduce = (name, msg)=>{
    console.log(msg(name));
}

let msg = (name) =>{
    return `Hey I am ${name}! Nice to meet you! `;
}

introduce("Rishabh",msg) ;