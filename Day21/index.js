let a = 10;

let apnapromise = new Promise((resolve , reject)=>{
    if(a == 10)
    {
        resolve("a is 10");
    }
    else{
        reject("A is not 10")
    }
})

console.log(apnapromise);
apnapromise.then((msg)=>{
    console.log(msg);
})

apnapromise.catch((msg)=>{
    console.log(msg);
})
apnapromise.finally(()=>{})
console.log("end");


// let p = fetch("https://api.github.com/users").then(res => res.json()).
// then(res => res.json()).then(res => console.log(res));


// let p = fetch("https://api.github.com/users/1")
// let p2 = p.then((res)=>{
//     return res.json();
// })

// p2.then((api)=>{
//     console.log(api);
    
// })





let api = true;
let data = [{}, {}, {}]
let p5 = new Promise((res, rej) =>{
    if(api){
        res(data);
    }
    else{
        rej("Something went wrong");
    }
})

p5.then((res)=>{
    console.log(res);    
})
p5.catch((err)=>{
    console.log(err);
})



// It is Used to Fetch the pi
fetch('https://api.github.com/users').then(res => res.json()).then(res =>console.log(res));
