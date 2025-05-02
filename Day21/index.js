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