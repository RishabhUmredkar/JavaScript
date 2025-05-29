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





let str = "Rishabh";
console.log(str.slice(3, -2));  // "ha"
console.log(str.slice(-4, -1));  // "hab"
console.log(str.slice(1));  // "ishabh"


console.log(str.slice(-1, -4));  // "" (empty string)
console.log(str.slice(-6, -3));  // "ish"
console.log(str.slice(-3));      // "abh"
console.log(str.slice(-5, -2));  // "sha"

console.log("--------------------");

console.log(str.slice(0, 4)); // "Rish"
console.log(str.slice(2, 5)); // "sha"
console.log(str.slice(3));    // "habh"
console.log(str.slice(0, -1)); // "Rishab"

console.log("-Splic");



let number = 1234567890;
let strnum  = number.toString();
let lastDigit = strnum.slice(-4).split("").reverse().join("");
console.log(lastDigit); // "6789"




let arr = ["Rishabh", "is", "learning", "JavaScript"];

let alpha = ["a", "b", "c", "d", "e", "f"];
alpha.splice(-2,2); 
console.log(alpha); // ["a", "b", "c", "d"]

// arr.splice(-3, 1, "loves", "coding");
// console.log(arr);  // ["Rishabh", "loves", "coding", "JavaScript"]



const candidates = [
    {
      name: "Rishabh",
      age: 22,
      gender: "Male",
      languages: ["Java", "JavaScript", "HTML"]
    },
    {
      name: "Amit",
      age: 25,
      gender: "Male",
      languages: ["Python", "C++"]
    },
    {
      name: "Priya",
      age: 23,
      gender: "Female",
      languages: ["Java", "CSS", "JavaScript"]
    }
  ];

  
  const filteredCandidates = candidates.filter(candidate =>
    candidate.gender === "Male" && candidate.languages.includes("HTML")
  );
  
  console.log(filteredCandidates);
  

  const candidate = candidates.find(candidate =>
    candidate.gender === "Male" && candidate.languages.includes("HTML")
  );
  
  console.log(candidate);
  
  console.log(Object.keys(candidate)); // ["name", 
console.log(Object.values(candidate)); // ["Rishabh", 22, "
console.log(Object.entries(candidate)); // [["name", "Rishabh"], ["age", 22], 

  


const people = [
    { name: "Amit", age: 25 },
    { name: "Parthiban", age: 30 },
    { name: "Ramesh", age: 22 },
    { name: "Pooja", age: 28 }
  ];
  
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().startsWith("p")
  );
  
  console.log("Original Array:", people);
  console.log("Filtered People (names starting with 'P'):", filteredPeople);
  console.log(Object.entries(filteredPeople));
  

  let jsonData = [{ id: 1, name: "Rishabh" }];
let jsonString = JSON.stringify(jsonData);
let jsonParsed = JSON.parse(jsonString);
console.table(jsonParsed);
console.table(jsonData);

let count = 0;
let x = setTimeout(() => {
    if (count <= 10) {
        console.log("Rishabh");
        count += 1;
    } else {
        clearTimeout(x);
    }
}, 6000);


let y = setInterval(()=>{
  if(count<=10)
  {
    console.log("timer");
    count+=1;
  }
  else{
    clearInterval(y)
  }

},1000)