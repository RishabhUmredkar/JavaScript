// a = 10
// console.log(a);

// //9......Var......

// var a;
// a = "var";
// console.log(a);

// var a = "double var";
// console.log(a);

// a = "triple  var";
// console.log(a);


// Day 2

// let x;
// console.log(x);


// let big = "5856421564124150241564154104065416798745415542132454065406"
// console.log(big);



// //Difference between == and ===

// let a = 10;
// let b = "10"
// console.log(a == b);

// console.log(this);

    
//  //demo();  // output : second  .Because demo variable declare after the call.
// var demo = function()
// {
//     console.log("first");
    
// }

// function demo()
// {
//     console.log("Second");
    
// }
// demo();     // output: first    .because it decalre the first.


// {
//     scopes()
//     function scopes()
//     {
//         console.log("hello Scopes");
        
//     }
// }



// let x = 'hello Javascript'
// console.log(x.length);
// console.log(x.slice(16));
// console.log(x.slice(10));
// console.log(x.slice(5,10));
// console.log(x.slice(10,5));
// console.log(x.slice(-4,-8));
// console.log(x.slice(5,-2));



// console.log(x.substring(16));
// console.log(x.substring(10));
// console.log(x.substring(5,10));
// console.log(x.substring(10,5));
// console.log(x.substring(-8,-4));    
// console.log(x.substring(-4,-8));
// console.log(x.substring(5,-5));






let outer = () =>{
    let x = 10;
    console.log(x);
    
    let inner = () =>{
        x++;
        console.log(x);
    }
    return inner;
}

let get = outer();
get();
get();
get();
get();
get();
get();
get();
get();
get();
get();

