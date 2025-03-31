//1. 
// let hof = (name,cbf)=>{
//     console.log(cbf(name));
// }

// let cbf = (name) =>{
//     return `hello ${name} !`;
// }
// hof("Rishabh",cbf);


// //2.
// let hof = (value , cbf1, cbf2) =>{
//     if(value){
//         cbf1();
//     }
//     else{
//         cbf2();
//     }
// }

// let cbf1 = () =>{
//     console.log("the value is True");
// }
// let cbf2 = () =>{
//     console.log("the value is False");
// }

// let value = false;
// hof(value, cbf1, cbf2);



// //3.
// let compliment = (cbf) =>{
//     cbf();
// }

// let cbf = () =>{
//     console.log("You are amazing!");
// }

// compliment(cbf);


// //4.
// let double = (num1, cbf) =>{  
//     cbf(num1*2);
// }
// let cbf = (result) =>{
//     console.log(`The double is ${result}`);
// }
// double(5, cbf);



// //5.
// let simpleMath = (num1, num2, cbf) =>{
//     cbf(num1, num2);
// }
// let add = (num1, num2) =>{
//     console.log(num1 + num2);
// }
// simpleMath(10, 20, add);



//6.
// let confirm = (value, cbf1, cbf2) =>{
//     if(value){
//        console.log(cbf1());
//     }
//     else{
//         console.log(cbf2());
//     }
// }

// let cbf1 = () =>{
//     return "YES";
// }
// let cbf2 = () =>{
//     return "NO";
// }   
// value = true;
// confirm(value, cbf1, cbf2);


//7.
// let square = (num, cbf) =>{
//     cbf(num*num);
// }
// let cbf = (result) =>{
//     console.log(`The square is ${result}`);
// }   
// square(5, cbf);


//8.
// let mood = (isHappy, happyCallback, sadCallback) =>{
//     if(isHappy == "happy"){
//         happyCallback();
//     }
//     else{
//         sadCallback();
//     }
// }

// let happyCallback = () =>{
//     console.log("Good to Hear!");
// }
// let sadCallback = () =>{
//     console.log("Hope you feel better soon!");
// }
// mood("happy", happyCallback, sadCallback);



//9.

// let laugh = (cbf) =>{
//     cbf();
// }
// let cbf = () =>{
//     console.log("Ha Ha Ha!");
// }
// laugh(cbf);


//10.
// let sign = (num, cbf) =>{
//     if(num > 0){
//         cbf("positive");
//     }
//     else if(num < 0){
//         cbf("negative");
//     }
//     else{
//         cbf("zero");
//     }
// }
// let cbf = (result) =>{
//     console.log(`The number is ${result}`);
// }
// sign(5, cbf);


//11.
// let unlock = (value, cbf) =>{
//     if(value == "unlock"){
//         cbf("Open!");
//     }
//     else{
//         cbf("Close!");
//     }
// }
// let cbf = (result) =>{
//     console.log(`Door is ${result}`);
// }

// unlock("unlock", cbf);
// unlock("lock", cbf);




//12.

// let thumb = (value, cbf)=>{
//     if(value){
//         cbf("👍");
//     }
//     else{
//         cbf("👎");
//     }
// }
// let cbf = (result) =>{
//     console.log(`The feedback is ${result}`);
// }   

// let value = true;
// thumb(value, cbf);
// thumb(value, cbf);




//13.
// let welcome = (name, cbf) =>{
//     console.log(cbf(name));
// }
// let cbf = (name) =>{
//     return `Welcome ${name}!`;
// }
// welcome("Rishabh", cbf);



//14. 
// let magicWord = (word, cbf) =>{
//     if(word == "please")
//     {
//         cbf("Correct!");
//     }
//     else{
//         cbf("try Again!");
//     }
// }
// let cbf = (result) =>{
//     console.log(` ${result}`);
// }
// magicWord("please", cbf);
// magicWord("hello", cbf);




//15.
// let TripleNumber = (num, cbf) =>{
//     cbf(num*3);
// }
// let cbf = (result) =>{
//     console.log(`The triple is ${result}`);
// }
// TripleNumber(5, cbf);
// TripleNumber(10, cbf);


//16.
// let fixedAnswer = (que, cbf) =>{
//     cbf();
// }

// let cbf = () =>{
//     console.log("I don't know the answer!");
// }   

// fixedAnswer("What is the meaning of life?", cbf);
// fixedAnswer("What is the capital of France?", cbf);





// //17.
// let luckyNumber = (num, cbf) =>{
//     if(num == 7){
//         cbf("Lucky!");
//     }
//     else{
//         cbf("Not Lucky!");
//     }
// }
// let cbf = (result) =>{
//     console.log(`The number is ${result}`);
// }   
// luckyNumber(7, cbf);
// luckyNumber(10, cbf);



//18.
// let ShoutWishper = (msg, cbf) =>{  
//     console.log(cbf(msg));
// }
// let cbf = (msg) =>{
//     return msg == msg.toUpperCase() ? "Shouting" : "Whispering !"
// }   
// ShoutWishper("HELLO", cbf);
// ShoutWishper("hello", cbf);


//19.
// let response = (value , cbf1, cbf2) =>{
//     if(value){
//         cbf1();
//     }
//     else{
//         cbf2();
//     }
// }
// let cbf1 = () =>{
//     console.log("The value is True");
// }
// let cbf2 = () =>{
//     console.log("The value is False");
// }
// let value = false;
// response(value, cbf1, cbf2);
// response(value, cbf1, cbf2);




//20.
// let hof = (cbf) =>{
//     cbf("😊");
// }
// let cbf = (emoji) =>{
//     console.log(`The emoji is ${emoji}`);
// }
// hof(cbf);