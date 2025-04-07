// console.log(a);


//var a = 10;

console.log(this);

// alert("hello");


let a = 10;
let f1 = () =>
{
    console.log(a);
    return a+a;
}
let rev = f1();
console.log(rev);
