///Object method added in day 16 i.e assign
let obj = {
    name : "Rishabh",
    age : 22,
    add : "Nagpur",
    address : {
        city : "Nagpur",
        state : "Maharashtra",
        pincode : 440018
    },
}

for(const prop in obj){
    console.log(obj[prop]);
    
}

//It is used to check if the property exists in the object or not
console.log("name" in obj); // true
console.log("name1" in obj); // false
console.log("city" in obj); // false
console.log("city" in obj.address); // true


//way to declare object

let object1 = {}        //object Literal way
let object2 = new Object(); //Instatiating an Object using Object constructor


class demo 
{
    constructor(name, age)
    {
        this.name = name ;
        this.age = age ;
    }
}

let Obj = new demo("RIshabh",22);
console.log(Obj);




// Shallow copy and deep copy


let newObj = {
    name : "Rishabh",
    age : 22
}

//shallow 
// let copy = newObj; // shallow copy
// console.log(copy); // { name: 'Rishabh', age: 22 }
// copy.mobile = 7418529630;
// console.log(newObj); // { name: 'Rishabh', age: 22, mobile: 7418529630 }
// console.log(copy); // { name: 'Rishabh', age: 22, mobile: 7418529630 }


//deep copy

let a = JSON.stringify(newObj); // convert object to string
let copy = JSON.parse(a); // convert string to object

copy.mobile = 7418529630; // add mobile to copy
console.log(newObj);
console.log(copy);






//Exception Handling 
console.log("Tinku ghar se nikla gya");

try{
    console.log("Tinku road se ja rha tha");
    console.log(abc);   // this will throw an error because abc is not defined
    
    throw new Error("Cycle punchure ho gyi");
}
catch(err){
    console.log(err);
}
finally
{
    console.log("Tinku school pahuncha");
}
    
