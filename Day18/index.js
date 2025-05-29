
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

console.log(backPack.myStuff.myitem1); // Blanket


// Now Destructuring with Array

let backPack2 = ["Tent", "compass", "Torch", "Rope", "Lighter", ["X", "Y", "Z"]]

let [a, b,  ,  , c, [p,  , r]] = backPack2; // destructuring
console.log(a); // Tent
console.log(b); // compass
console.log(p); // X
console.log(r); // Z


console.log("1");

// Rest and spread


let backPack3 = ["Tent", "Compass","Torch", "Rope", "Lighter", "Tshirt", "Pants", "Towel"]

let [g,h,i,... cloths] = backPack3; ///! REST Parameter    It store the whole vlues in single continer
console.log(cloths);
console.log(g);
console.log(h);

console.log(...backPack3);  //! SPREAD 





// By using Rest 
let add = (...container) =>{
    //! here all the sent arguments are stored in single container(in array ) with the help of rest parameter
    console.log(container);
    let addition = container.reduce((acc, amt) =>{
        return acc += amt;
    }, 5000)
    console.log(addition);
}
add(1000, 2000, 3000, 4000, 1000);



// By using Spread

let arr1 = [10,20,30];
let arr2 = [40, 10, 30];
let newArr = [...arr1, ...arr2];
console.log(newArr);



