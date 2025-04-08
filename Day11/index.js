let num = 987465665;
console.log(typeof typeof num);



let str = "98h6"
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.startsWith("98"));
console.log(str.endsWith("6"));
console.log(str.padStart(10,"X"));
console.log(str.padEnd(10,"*"));



let newstr = "hello"
console.log(newstr.indexOf("h"));


// let a = undefined
// let newA = a.toString()
// console.log(newA); // TypeError: Cannot read properties of undefined (reading 'toString')
// console.log(typeof newA); // TypeError: Cannot read properties of undefined (reading 'toString')


let a = true
let check = a.toString()
console.log(check); // true



let b = 123
let check2 = b.toString()   
console.log(check2); // 123
console.log(typeof check2); // string

let c = 123.456
let check3 = c.toString()
console.log(check3); // 123.456

let d = 12345678901234567890
let check4 = d.toString()
console.log(check4); // 12345678901234567890
console.log(typeof check4); // string

let e = BigInt
let check5 = e.toString()
console.log(check5); // [Function: BigInt]

let f = Symbol("hello")
let check6 = f.toString()
console.log(check6); // Symbol(hello)

console.log(typeof check6); // string

// let g = null
// let check7 = g.toString()
// console.log(check7); // TypeError: Cannot read properties of null (reading 'toString')
// // console.log(typeof check7); // TypeError: Cannot read properties of null (reading 'toString')

// let h = undefined
// let check8 = h.toString()
// console.log(check8); // TypeError: Cannot read properties of undefined (reading 'toString')
// // console.log(typeof check8); // TypeError: Cannot read properties of undefined (reading 'toString')

let i = NaN
let check9 = i.toString()
console.log(check9); // NaN
console.log(typeof check9); // string

let j = Infinity
let check10 = j.toString()
console.log(check10); // Infinity
console.log(typeof check10); // string

let k = -Infinity
let check11 = k.toString()
console.log(check11); // -Infinity
console.log(typeof check11); // string

let l = -0
let check12 = l.toString()
console.log(check12); // -0
console.log(typeof check12); // string

let m = 0
let check13 = m.toString()
console.log(check13); // 0
console.log(typeof check13); // string

let n = 0.0
let check14 = n.toString()
console.log(check14); // 0
console.log(typeof check14); // string

let o = 0.0000000000000001
let check15 = o.toString()
console.log(check15); // 1e-16
console.log(typeof check15); // string



let movie = "Bahubali"
console.log(movie.replace("b","hii")); // bahubali
console.log(movie.replaceAll("b","baaaaaaaa")); // bahubali
console.log(movie.replace(/b/g,"hii")); // bahubali

// console.log(movie.reverse()); // TypeError: movie.reverse is not a function 


// movie = movie.replace("b","kh")
console.log(movie.replace("hu","li"));


console.log(movie.includes("Bahu"));
