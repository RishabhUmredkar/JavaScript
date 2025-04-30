glob = 50;
var a;
let b;

console.log(glob); // 50
console.log(a); // undefined
console.log(b); // undefined

a = 10;
b = 20;
glob = 100;
console.log(glob); // 100
console.log(a); // 10
console.log(b); // 20

var a = 110;
b = 120;
console.log(glob); // 100
console.log(a); // 110
console.log(b); // 20
