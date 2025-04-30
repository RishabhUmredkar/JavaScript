student ={
    name : "Rishabh",
    age : 22,
    address : "Nagpur",
    hobbies : ["Reading", "Travelling"]
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function collectFees(fees){
    console.log(`${this.name} has paid ${fees} fees`);
}

collectFees.call(student, 1000); // Rishabh has paid 1000 fees

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function collectFees(fees){
    console.log(`${this.name} has paid ${fees} fees`);
}
collectFees.apply(student, [1000]); // Rishabh has paid 1000 fees
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function collectFees(fees){
    console.log(`${this.name} has paid ${fees} fees`);    
}
let bindFunc = collectFees.bind(student, 5000); // Rishabh has paid 1000 fees

bindFunc()// Rishabh has paid 1000 fees
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// destructuring 
// extracting values from object and arrays and assigning them to variables

let backPack = {
    item1 : "Camera",
    item2 : "Tiffin",
    itme3 : "Charger",
    myStuff : {
        myitem1 : "Blanket",
        myitem2 : "Towel",
        myitem3 : "Socks",
        myitem4 : "Shampoo"
    }
}

console.log(backPack.item1); // Camera
let {item1 , item2, itme3} = backPack; // destructuring
console.log(item1); // Camera
console.log(item2); // Tiffin
console.log(itme3); // Charger

