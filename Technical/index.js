const users = [
    {
      id: 1,
      name: "Amit",
      age: 25,
      gender: "male",
      city: "Pune",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      name: "Priya",
      age: 22,
      gender: "female",
      city: "Nagpur",
      skills: ["Java", "Python", "HTML"]
    },
    {
      id: 3,
      name: "Parthiban",
      age: 30,
      gender: "male",
      city: "Mumbai",
      skills: ["C++", "HTML", "Java"]
    },
    {
      id: 4,
      name: "Sneha",
      age: 27,
      gender: "female",
      city: "Pune",
      skills: ["CSS", "JavaScript", "Python"]
    },
    {
      id: 5,
      name: "Ramesh",
      age: 28,
      gender: "male",
      city: "Nagpur",
      skills: ["JavaScript", "Java", "HTML", "CSS"]
    }
  ];

//   💻 Practice on These Tasks:
//   Get all users older than 25.
const filterusers = users.filter(user => user.age > 25)
  console.log(filterusers);
  
//   Extract names of users who live in Pune.
const filterCity = users.filter(user => user.city ==="Pune")
console.log(filterCity);

//   Filter users whose name starts with "P".
const filterName = users.filter(user => user.name.startsWith("P"))
console.log(filterName)
//   Find all female users who know Python.
  
//   Get users who know both JavaScript and HTML.
  
//   Return only male users who know Java.
  
//   Sort users by age (ascending).
  
//   Count how many users know CSS.
  
//   Group users by gender.
  
//   Transform the array into an object like {1: {...}, 2: {...}, ...} using id.  


// 2. Get All Names from an Array of Objects
const persons = [
  { name: "Amit", age: 25 },
  { name: "Sneha", age: 27 },
  { name: "Ramesh", age: 22 },
  { name: "Pooja", age: 30 }
];

const names = persons.map(person => person.name);
console.log(names);

// 3. Cars with Color "Red"
const cars = [
  { model: "Maruti 800", color: "Red", price: 200000 },
  { model: "Swift", color: "White", price: 500000 },
  { model: "i10", color: "Red", price: 450000 },
  { model: "City", color: "Black", price: 900000 }
];

const redcars = cars.filter(car => car.color === "Red");
console.log(redcars);



// 1. People whose name starts with "A" and age is less than 30
const people = [
  { name: "Amit", age: 25 },
  { name: "Ajay", age: 31 },
  { name: "Ankita", age: 28 },
  { name: "Rishabh", age: 23 },
  { name: "Arjun", age: 29 }
];

const filterPeople = people.filter(person => person.name.startsWith("A") && person.age < 30);
console.log(filterPeople);

// ✅ 2. Users who know "JavaScript"
const users5 = [
  { name: "Tanya", languages: ["HTML", "CSS"] },
  { name: "Rishabh", languages: ["HTML", "CSS", "JavaScript"] },
  { name: "Sneha", languages: ["Java", "C++"] },
  { name: "Amit", languages: ["JavaScript", "Python"] }
];

const JsUsers = users5.filter(user => user.languages.includes("JavaScript"));
console.log(JsUsers);


// ✅ 4. Colleges in "Nagpur" from nested object

const data = {
  universities: [
    {
      name: "RTMNU",
      colleges: [
        { name: "KDK College Of Engineering", city: "Nagpur" },
        { name: "PIET", city: "Wardha" }
      ]
    },
    {
      name: "SPPU",
      colleges: [
        { name: "MIT Pune", city: "Pune" },
        { name: "VIT", city: "Pune" }
      ]
    }
  ]
};

// const nagpurColleges = data.universities.colleges.filter(colleges => colleges.city === "Nagpur");
// console.log(nagpurColleges);


// ✅ 5. Convert Array of Objects to Object using id as key

const students = [
{ id: 101, name: "Amit", age: 21 },
{ id: 102, name: "Sneha", age: 22 },
{ id: 103, name: "Rishabh", age: 23 }
];

// console.log(Object.Entries(students));

const asscending = stundent.sor((a,b) => a.age - b.age);


// ✅ Demo Array of Users:
const Student = [
  { name: "Amit", age: 25, gender: "male", skills: ["HTML", "JS", "Java"] },
  { name: "Sneha", age: 28, gender: "female", skills: ["HTML", "CSS", "Python"] },
  { name: "Ravi", age: 22, gender: "male", skills: ["Java", "JS", "C++"] },
  { name: "Priya", age: 26, gender: "female", skills: ["Python", "JS", "C++"] },
  { name: "Neha", age: 24, gender: "female", skills: ["HTML", "CSS", "JS"] },
  { name: "Arjun", age: 30, gender: "male", skills: ["Java", "Python", "JS"] }
];
// 🧠 Questions You Can Solve Using This:
// ✅ Extract users who know both "JS" and "Java"
const jsJavaUsers = Student.filter(user => user.skills.includes("Js" && "Java"));
console.log(Object.entries(jsJavaUsers));



// ✅ Filter all female users who know "Python"
const FemalePy = Student.filter(user => user.skills.includes("Python") && user.gender === "female")
console.log(FemalePy);
console.log(Object.entries(FemalePy));

// ✅ Count how many users have "CSS" as a skill
const cssCount = Student.filter(user => user.skills.includes("CSS")).length
console.log(cssCount);




// ✅ Group users by gender → { male: [...], female: [...] }
const GroupByGender = students.reduce((acc, user) => {
    if (!acc[user.gender]) {
      acc[user.gender] = [];
    }
    acc[user.gender].push(user);
    return acc;
  }, {});
  
  console.log(GroupByGender);
  



// ✅ Sort array by age: ascending and descending