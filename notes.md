# 📒 JavaScript Learning Notes  
**By Rishabh Umredkar**  

---

## 📌 Topics Covered So Far

1. var / let / const
2. null vs undefined
3. What is NaN?
4. Symbol
5. BigInt – Range and use
6. Which variables get hoisted?
7. Truthy / Falsy values

---

## 🧠 Backup Class

### 📅 Day 1 – Introduction to JavaScript

**What is JavaScript?**  
- Scripting Language, High-level, Object-Oriented  
- Object-Based, Single-threaded, Synchronous  
- Interpreted and compiled language  

**Execution of JS:**  
- JS code goes to the JS engine  
- JS engine divides code into small parts, sends to compiler, then interpreter  
- Requires JS engine – available in browsers or via Node.js  

**Ways to Write JS:**  
1. Internal (in HTML using `<script>` tag)  
2. External (`.js` file)  

**Declaration & Initialization:**  
- Declaring without datatype makes it a global variable  

**Tokens:** Smallest part of programming language  
- Types: Keyword, Identifier, Operator, Separator, Literal  

**Datatypes (8 total):**  
1. Number  2. Boolean  3. String  4. Symbol 5. Null    6. Undefined  7. NaN   8. BigInt  

**String Declaration:**  
- Single quotes `''`, Double quotes `""`, Backticks ``` ```

---

### 📅 Day 2 – Variables

| Variable | Declaration | Initialization | Decl. + Init. | Updation | Redecl. + Reinit. | Default Value            |
|----------|-------------|----------------|----------------|----------|--------------------|--------------------------|
| var      | YES         | YES            | YES            | YES      | YES                | Window Object            |
| let      | YES         | YES            | YES            | YES      | NO                 | Temporal Dead Zone       |
| const    | NO          | NO             | YES            | NO       | NO                 | Temporal Dead Zone       |

- Undeclared variables default to `undefined`

**Examples:**  
```js
console.log("The sum of " + a1 + " and " + b + " is " + (a1 + b)); // Double quotes  
console.log(`The sum of ${a1} and ${b} is ${a1 + b}`); // Backticks  
```

---

### 📅 Day 3

**Lexical Scope:** Accessing the members outside the function.  
**Closure:** A special memory allocation in the window object.

---

### 📅 Day 4 – Functions

1. `=>` is called fat function / arrow function  
2. Prime number check example  
3. Function Expression (Anonymous functions)  
4. Immediate Invoked Function Expression (IIFE)  
5. Higher Order Function (accepts function as argument)  
6. Callback Function (passed as an argument)  

---

### 📅 Day 5 – Function Types

1. **Arrow Function:** `let func = () => {}`  
2. **Regular Function:**  
```js
function demo() { }
```  
3. **Function Expression:**  
- Arrow: `let f = () => {}`  
- Regular: `let f2 = function() {}`  

4. **First-class functions:**  
```js
let func = () => {}
```  

5. **IIFE Example:**  
```js
((a) => console.log(a))(10);  
console.log("start");  
((a) => { console.log(a) })(10);  
console.log("end");  
```

6. **HOF and CBF:**  
```js
let hof = (cbf_function) => { cbf_function(); };  
let cbf_function = () => { console.log("cbf_function"); };  
hof(cbf_function);
```

---

### 📅 Day 6

- AST: Abstract Syntax Tree

---

### 📅 Day 8 – Hoisting & Temporal Dead Zone

1. **Temporal Dead Zone (TDZ):**  
   Time between variable declaration and initialization  

2. **Hoisting:**  
   Variable/function lifted to top of execution scope  

3. **`this`:** Refers to the current object  

**Behavior:**  
- `let` / `const` in TDZ ➔ Error  
- `var` ➔ Hoisted to window object ➔ `undefined`  

---

### 📅 Day 9 – Hoisting (Advanced)

1. Regular Function ➔ Hoisted as function  
2. Arrow Function ➔ Hoisted as variable ➔ Error  
3. Function Expression ➔ Hoisted as variable ➔ Error  

---

### 📅 Day 11 – Strings

** String ***

Theere are 4 way to create String
Declaration of String
      we can declare String  
            in Single Qoutes ('')
            in Double Qoutes (" ")
            in Backticks (``)
            By new Keyword let String = new String("hello);

| No. | Method                    | Syntax                        |
|-----|---------------------------|-------------------------------|
|  1  | toLowerCase()             | str.toLowerCase()             |
|  2  | toUpperCase()             | str.toUpperCase()             |
|  3  | charAt(index)             | str.charAt(index)             |
|  4  | charCodeAt(index)         | str.charCodeAt(index)         |
|  5  | startsWith("text")        | str.startsWith("text")        |
|  6  | endsWith("text")          | str.endsWith("text")          |
|  7  | padStart(length, char)    | str.padStart(length, "char")  |
|  8  | padEnd(length, char)      | str.padEnd(length, "char")    |
|  9  | indexOf("char")           | str.indexOf("char")           |
| 10  | replace("a", "b")         | str.replace("a", "b")         |
| 11  | replaceAll("a", "b")      | str.replaceAll("a", "b")      |
| 12  | replace(/pattern/g, "b")  | str.replace(/pattern/g, "b")  |
| 13  | includes("text")          | str.includes("text")          |

---

### 📅 Day 12 – Arrays

**1. What is Array?**  
An Array is a data structure that can hold multiple values of same or different types.

**2. How to Declare Arrays?**
```js
let arr = [1, 2, 3];        // Using literals
let arr2 = new Array(3);    // Using constructor
```

**3. Array Methods**

| No. | Method          | Description                                           | Syntax                         |
|-----|------------------|-------------------------------------------------------|--------------------------------|
|  1  | push()           | Adds element at the end                               | arr.push(value)                |
|  2  | pop()            | Removes last element                                  | arr.pop()                      |
|  3  | unshift()        | Adds element at the beginning                         | arr.unshift(value)             |
|  4  | shift()          | Removes first element                                 | arr.shift()                    |
|  5  | splice()         | Adds/Removes items                                    | arr.splice(start, deleteCount, item1, ...) |
|  6  | slice()          | Returns a portion of the array                        | arr.slice(start, end)          |
|  7  | indexOf()        | Returns first index of element                        | arr.indexOf(value)             |
|  8  | lastIndexOf()    | Returns last index of element                         | arr.lastIndexOf(value)         |
|  9  | includes()       | Checks if value exists                                | arr.includes(value)            |
| 10  | join()           | Joins all elements into string                        | arr.join(separator)            |
| 11  | reverse()        | Reverses the array                                    | arr.reverse()                  |
| 12  | sort()           | Sorts elements                                        | arr.sort()                     |
| 13  | concat()         | Merges two arrays                                     | arr1.concat(arr2)              |
| 14  | flat()           | Flattens nested arrays                                | arr.flat(depth)                |

---




### 📅 Day 13 - JavaScript Array Methods

Today’s focus: mastering common array methods for data handling.


## 🔁 1. `forEach()`
Used for looping through elements.

```js
["JS", "HTML", "CSS"].forEach(val => console.log(val));
```

🧠 Doesn’t return anything.

---

## 🔍 2. `filter()`
Returns elements that match a condition.

```js
[10, 20, 30, 40].filter(num => num <= 30); // [10, 20, 30]
```

---

## ➕ 3. `reduce()`
Combines all values into one (like sum).

```js
[10, 20, 30].reduce((acc, val) => acc + val, 0); // 60
```

---

## 🔄 4. `map()`
Transforms elements.

```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

---

## 🔎 5. `find()`
Gets the first matching item.

```js
[10, 20, 30, 40].find(val => val > 25); // 30
```

---

## 🔃 6. `sort()`, `reverse()`

```js
[3, 1, 2].sort();        // [1, 2, 3]
[3, 1, 2].reverse();     // [2, 1, 3]
```

---

## 🔁 7. `for...of` Loop

```js
for (const val of [1, 2, 3]) console.log(val);
```

---

## 🛠️ 8. Modify Arrays

```js
let arr = [10];
arr.push(20);  // Add end
arr.pop();     // Remove end
arr.unshift(5); // Add start
arr.shift();    // Remove start
```

---

## 🧰 9. Other Methods

```js
arr.includes(10); arr.indexOf(20);
arr.slice(0, 2); arr.toString();
arr.at(0);
```

---

## 📦 10. Nested Data

```js
let userData = [[{ id: 1, first_name: "Fitz", gender: "Male" }, ...]];
```

---

## 🚀 Mini Challenges

1. Use `filter()` to get only female users.
2. Use `map()` to list full names.
3. Use `reduce()` to count users.
4. Use `find()` to get first Male user.

---

## ✅ Summary

| Method      | Use              |
|-------------|------------------|
| forEach     | Loop             |
| filter      | Condition-based  |
| reduce      | Aggregation      |
| map         | Modify           |
| find        | First match      |
| sort/reverse| Order/flip       |
| push/pop    | Modify ends      |

----

### 📅 Day 14 – Array Methods Overview

| 🔢 Method Name | 🧪 Syntax                                                                  | 🎯 Use                                                   | 🔁 Returns Something | 📦 Return Value      | ♻️ Modifies Original Array |
|---------------|---------------------------------------------------------------------------|----------------------------------------------------------|----------------------|----------------------|-----------------------------|
| **map()**     | `arr.map((val, i, arr) => { return val })`                                | Creates a new array by applying a function to each item  | ✅ Yes               | 🆕 New Array          | ❌ No                      |
| **filter()**  | `arr.filter((val, i, arr) => condition)`                                  | Filters elements based on condition                      | ✅ Yes               | 🧹 Filtered Array     | ❌ No                      |
| **reduce()**  | `arr.reduce((acc, val, i, arr) => acc + val, initialValue)`               | Reduces array to a single value                          | ✅ Yes               | 🔢 Single Value       | ❌ No                      |
| **sort()**    | `arr.sort((a, b) => b - a)`                                               | Sorts array (e.g., descending order using b - a)         | ✅ Yes               | 🆕 Sorted Array       | ✅ Yes                     |
| **forEach()** | `arr.forEach((val, i, arr) => { console.log(val) })`                      | Iterates over array without returning a new array        | ❌ No                | ❌ Undefined          | ❌ No                      |
| **reverse()** | `arr.reverse()`                                                           | Reverses the array in-place                              | ✅ Yes               | 🔄 Reversed Array     | ✅ Yes                     |

---
### 📅 Day 15 – Array Slice Method

**1. `slice()` Syntax:**  
```js
arr.slice(startIndex, endIndex);
```

- **Behavior:**  
   - Extracts elements from `startIndex` up to (but not including) `endIndex`.  
   - Does **not** modify the original array.  

**Example:**  
```js
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] (original array remains unchanged)
```

**2. `splice()` Syntax:**  
```js
arr.splice(startIndex, deleteCount, item1, item2, ...);
```

- **Behavior:**  
   - Modifies the original array by removing `deleteCount` elements starting from `startIndex`.  
   - Optionally, adds new elements (`item1`, `item2`, ...) at the removed positions.  

**Example:**  
```js
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 10, 20); // Removes 2 elements starting at index 1 and adds 10, 20
console.log(arr); // [1, 10, 20, 4, 5]
```


### 🆕 Creating Arrays from Iterables

**Using `Array.from()`**  
The `Array.from()` method creates a new array from an iterable object.

**Example:**  
```js
let str2 = Array.from("Terminator");
console.log(str2); // ['T', 'e', 'r', 'm', 'i', 'n', 'a', 't', 'o', 'r']
```
- Converts a string into an array of characters.
- Works with other iterable objects like NodeLists or Sets.
- Syntax: `Array.from(iterable)`




| 🔢 Method Name   | 🧪 Syntax                                      | 🎯 Use                                                                 | 🔁 Returns Something | 📦 Return Value         | ♻️ Modifies Original Array |
|------------------|-----------------------------------------------|------------------------------------------------------------------------|----------------------|--------------------------|-----------------------------|
| **map()**        | `arr.map((val, i, arr) => { return val })`    | Creates a new array by applying a function to each item                | ✅ Yes               | 🆕 New Array            | ❌ No                      |
| **filter()**     | `arr.filter((val, i, arr) => condition)`      | Filters elements based on a condition                                 | ✅ Yes               | 🧹 Filtered Array       | ❌ No                      |
| **reduce()**     | `arr.reduce((acc, val, i, arr) => acc + val)` | Reduces the array to a single value by applying a function             | ✅ Yes               | 🔢 Single Value         | ❌ No                      |
| **find()**       | `arr.find((val, i, arr) => condition)`        | Finds the first element that satisfies the condition                   | ✅ Yes               | 🎯 First Matching Value | ❌ No                      |
| **sort()**       | `arr.sort((a, b) => a - b)`                   | Sorts the array in ascending or descending order                       | ✅ Yes               | 🆕 Sorted Array         | ✅ Yes                     |
| **reverse()**    | `arr.reverse()`                               | Reverses the array in place                                            | ✅ Yes               | 🔄 Reversed Array       | ✅ Yes                     |
| **forEach()**    | `arr.forEach((val, i, arr) => { console.log(val) })` | Iterates over the array without returning a new array                  | ❌ No                | ❌ Undefined            | ❌ No                      |
| **push()**       | `arr.push(element)`                           | Adds one or more elements to the end of the array                      | ✅ Yes               | 🔢 New Length of Array  | ✅ Yes                     |
| **pop()**        | `arr.pop()`                                   | Removes the last element from the array                                | ✅ Yes               | 🎯 Removed Element      | ✅ Yes                     |
| **shift()**      | `arr.shift()`                                 | Removes the first element from the array                               | ✅ Yes               | 🎯 Removed Element      | ✅ Yes                     |
| **unshift()**    | `arr.unshift(element)`                        | Adds one or more elements to the beginning of the array                | ✅ Yes               | 🔢 New Length of Array  | ✅ Yes                     |
| **indexOf()**    | `arr.indexOf(element)`                        | Returns the first index of the specified element                       | ✅ Yes               | 🔢 Index or -1          | ❌ No                      |
| **lastIndexOf()**| `arr.lastIndexOf(element)`                    | Returns the last index of the specified element                        | ✅ Yes               | 🔢 Index or -1          | ❌ No                      |
| **at()**         | `arr.at(index)`                               | Returns the element at the specified index (supports negative indices) | ✅ Yes               | 🎯 Element              | ❌ No                      |
| **slice()**      | `arr.slice(start, end)`                       | Extracts a portion of the array without modifying the original array    | ✅ Yes               | 🆕 New Array            | ❌ No                      |
| **splice()**     | `arr.splice(start, deleteCount, ...items)`    | Adds/removes elements from the array                                   | ✅ Yes               | 🆕 Modified Array       | ✅ Yes                     |
| **join()**       | `arr.join(separator)`                         | Joins all elements of the array into a string                          | ✅ Yes               | 📝 String               | ❌ No                      |
| **Array.from()** | `Array.from(iterable)`                        | Creates a new array from an iterable object                            | ✅ Yes               | 🆕 New Array            | ❌ No                      |




---


### 📅  Day 16 – Objects in JavaScript

**What is an Object?**  
An object is a real-world entity that represents properties (attributes) and behaviors (methods). Objects in JavaScript can also contain other objects, enabling nested structures.


#### 🛠️ Ways to Create an Object

1. **Using Object Literals:**
   ```js
   let obj = {
       key: value
   };
   ```

2. **Using `new Object()`:**
   ```js
   let obj = new Object();
   obj.key = value;
   ```

3. **Using Classes or Constructor Functions:**
   ```js
   class Person {
       constructor(name, age) {
           this.name = name;
           this.age = age;
       }
   }
   let person = new Person("Rishabh", 22);
   ```

4. **Using `Object.create()`:**
   ```js
   let obj = Object.create(null);
   obj.key = value;
   ```

---

#### 🧩 Nested Objects

Objects can contain other objects as properties.  
Example:
```js
let person = {
    name: "Rishabh",
    age: 22,
    address: {
        city: "Nagpur",
        pincode: 440018,
        state: "Maharashtra"
    }
};
console.log(person.address.city); // Output: Nagpur
```

---

#### 🔄 CRUD Operations on Objects

1. **Create:**
   ```js
   let car = {
       name: "Maruti 800",
       brand: "Maruti Suzuki",
       price: 80000
   };
   ```

2. **Read:**
   ```js
   console.log(car.name); // Output: Maruti 800
   ```

3. **Update:**
   ```js
   car.price = 85000; // Updates the price
   ```

4. **Delete:**
   ```js
   delete car.price; // Removes the price property
   ```

---

#### 📋 Object Methods

1. **`Object.keys(obj)`** – Returns an array of keys.
   ```js
   console.log(Object.keys(car)); // ["name", "brand"]
   ```

2. **`Object.values(obj)`** – Returns an array of values.
   ```js
   console.log(Object.values(car)); // ["Maruti 800", "Maruti Suzuki"]
   ```

3. **`Object.entries(obj)`** – Returns an array of key-value pairs.
   ```js
   console.log(Object.entries(car)); // [["name", "Maruti 800"], ["brand", "Maruti Suzuki"]]
   ```

4. **`Object.fromEntries(arr)`** – Converts an array of key-value pairs back to an object.
   ```js
   let arr = [["name", "Maruti 800"], ["brand", "Maruti Suzuki"]];
   console.log(Object.fromEntries(arr)); // { name: "Maruti 800", brand: "Maruti Suzuki" }
   ```

---

#### 🧠 `this` Keyword in Objects

- **Regular Function:**
   ```js
   let obj = {
       fun: function() {
           console.log(this); // Refers to the object
       }
   };
   obj.fun();
   ```

- **Arrow Function:**
   ```js
   let obj = {
       fun: () => {
           console.log(this); // Refers to the global object
       }
   };
   obj.fun();
   ```

---

#### 🔗 Call, Apply, and Bind Methods

1. **`call()`** – Calls a function with a given `this` value and arguments.
   ```js
   function greet(greeting) {
       console.log(`${greeting}, ${this.name}`);
   }
   let person = { name: "Rishabh" };
   greet.call(person, "Hello"); // Output: Hello, Rishabh
   ```

2. **`apply()`** – Similar to `call()`, but arguments are passed as an array.
   ```js
   greet.apply(person, ["Hi"]); // Output: Hi, Rishabh
   ```

3. **`bind()`** – Returns a new function with `this` bound to the specified object.
   ```js
   let boundGreet = greet.bind(person);
   boundGreet("Hey"); // Output: Hey, Rishabh
   ```

---

#### 🧑‍💻 Example: Nested Object with Methods

```js
let student = {
    name: "Rishabh",
    age: 22,
    hobbies: ["Cycling", "Gym"],
    education: {
        degree: "B.Tech",
        stream: "CSE",
        college: {
            name: "KDK College",
            city: "Nagpur"
        }
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
student.greet(); // Output: Hello, my name is Rishabh
console.log(student.education.college.city); // Output: Nagpur
```

---
#### 📝 Questions for Practice with Answers

1. **What are the different ways to create an object in JavaScript?**  
   - Using Object Literals:  
     ```js
     let obj = { key: value };
     ```
   - Using `new Object()`:  
     ```js
     let obj = new Object();
     obj.key = value;
     ```
   
   - Using `Object.create()`:  
     ```js
     let obj = Object.create(null);
     obj.key = value;
     ```

2. **How can you perform CRUD operations on an object?**  
   - **Create:**  
     ```js
     let car = { name: "Maruti 800", brand: "Maruti Suzuki", price: 80000 };
     ```
   - **Read:**  
     ```js
     console.log(car.name); // Output: Maruti 800
     ```
   - **Update:**  
     ```js
     car.price = 85000; // Updates the price
     ```
   - **Delete:**  
     ```js
     delete car.price; // Removes the price property
     ```

3. **What is the difference between `Object.keys()` and `Object.entries()`?**  
   - `Object.keys(obj)` returns an array of the object's keys.  
     Example:  
     ```js
     let car = { name: "Maruti 800", brand: "Maruti Suzuki" };
     console.log(Object.keys(car)); // ["name", "brand"]
     ```
   - `Object.entries(obj)` returns an array of key-value pairs.  
     Example:  
     ```js
     console.log(Object.entries(car)); // [["name", "Maruti 800"], ["brand", "Maruti Suzuki"]]
     ```

4. **Explain the behavior of the `this` keyword in regular and arrow functions.**  
   - In **regular functions**, `this` refers to the object that calls the function.  
     Example:  
     ```js
     let obj = {
         fun: function() {
             console.log(this); // Refers to the object
         }
     };
     obj.fun();
     ```
   - In **arrow functions**, `this` refers to the surrounding lexical scope (usually the global object).  
     Example:  
     ```js
     let obj = {
         fun: () => {
             console.log(this); // Refers to the global object
         }
     };
     obj.fun();
     ```

5. **Write an example using `call`, `apply`, and `bind` methods.**  
   - **`call()`**:  
     ```js
     function greet(greeting) {
         console.log(`${greeting}, ${this.name}`);
     }
     let person = { name: "Rishabh" };
     greet.call(person, "Hello"); // Output: Hello, Rishabh
     ```
   - **`apply()`**:  
     ```js
     greet.apply(person, ["Hi"]); // Output: Hi, Rishabh
     ```
   - **`bind()`**:  
     ```js
     let boundGreet = greet.bind(person);
     boundGreet("Hey"); // Output: Hey, Rishabh
     ```

---

#### ✅ Summary

- Objects can be created using literals, constructors, classes, or `Object.create()`.
- CRUD operations include creating, reading, updating, and deleting object properties.
- `Object.keys()` returns an array of keys, while `Object.entries()` returns key-value pairs.
- The `this` keyword behaves differently in regular and arrow functions.
- `call`, `apply`, and `bind` are used to control the `this` context of a function.

| Method                | Description                                      |
|-----------------------|--------------------------------------------------|
| `Object.keys(obj)`    | Returns an array of keys                         |
| `Object.values(obj)`  | Returns an array of values                       |
| `Object.entries(obj)` | Returns an array of key-value pairs              |
| `Object.fromEntries()`| Converts key-value pairs array to an object      |
| `call()`              | Calls a function with a specific `this` context |
| `apply()`             | Similar to `call()`, but arguments are in array |
| `bind()`              | Returns a new function with bound `this`        |




---

### 📅 Day 17 – Destructuring in JavaScript

**What is Destructuring?**  
Destructuring is a convenient way of extracting values from objects or arrays and assigning them to variables. It simplifies the process of accessing and using data.

#### 🧩 Destructuring Objects

**Example:**
```js
let student = {
   name: "Rishabh",
   age: 22,
   address: "Nagpur",
   hobbies: ["Reading", "Travelling"]
};

// Accessing properties without destructuring
console.log(student.name); // Rishabh
console.log(student.age);  // 22

// Using destructuring
let { name, age, address } = student;
console.log(name);    // Rishabh
console.log(age);     // 22
console.log(address); // Nagpur
```

**Nested Object Destructuring:**
```js
let backPack = {
   item1: "Camera",
   item2: "Tiffin",
   item3: "Charger",
   myStuff: {
      myitem1: "Blanket",
      myitem2: "Towel",
      myitem3: "Socks",
      myitem4: "Shampoo"
   }
};

// Destructuring nested objects
let { item1, item2, item3, myStuff: { myitem1, myitem2 } } = backPack;
console.log(item1);   // Camera
console.log(myitem1); // Blanket
console.log(myitem2); // Towel
```

---

#### 🧩 Destructuring Arrays

**Example:**
```js
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements without destructuring
console.log(fruits[0]); // Apple

// Using destructuring
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1); // Apple
console.log(fruit2); // Banana
console.log(fruit3); // Cherry
```

**Skipping Elements:**
```js
let colors = ["Red", "Green", "Blue"];
let [, secondColor] = colors; // Skipping the first element
console.log(secondColor); // Green
```

---

#### 🔗 Call, Apply, and Bind with `this`

**1. `call()` Method:**  
Calls a function with a specific `this` context and arguments passed individually.
```js
function collectFees(fees) {
   console.log(`${this.name} has paid ${fees} fees`);
}

let student = { name: "Rishabh" };
collectFees.call(student, 1000); // Rishabh has paid 1000 fees
```

**2. `apply()` Method:**  
Similar to `call()`, but arguments are passed as an array.
```js
collectFees.apply(student, [1000]); // Rishabh has paid 1000 fees
```

**3. `bind()` Method:**  
Returns a new function with `this` bound to the specified object.
```js
let bindFunc = collectFees.bind(student, 5000);
bindFunc(); // Rishabh has paid 5000 fees
```

---

#### 📝 Questions for Practice with Answers

1. **What is destructuring in JavaScript?**  
   Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.

2. **How do you destructure an object?**  
   Example:
   ```js
   let obj = { a: 1, b: 2 };
   let { a, b } = obj;
   console.log(a, b); // 1, 2
   ```

3. **How do you destructure a nested object?**  
   Example:
   ```js
   let obj = { a: { b: 2 } };
   let { a: { b } } = obj;
   console.log(b); // 2
   ```

4. **What is the difference between `call`, `apply`, and `bind`?**  
   - `call`: Invokes a function with a specific `this` and arguments passed individually.  
   - `apply`: Similar to `call`, but arguments are passed as an array.  
   - `bind`: Returns a new function with `this` bound to the specified object.

5. **Write an example using `bind` to create a new function.**  
   ```js
   function greet(greeting) {
      console.log(`${greeting}, ${this.name}`);
   }
   let person = { name: "Rishabh" };
   let boundGreet = greet.bind(person, "Hello");
   boundGreet(); // Hello, Rishabh
   ```

---

#### ✅ Summary

- **Destructuring** simplifies extracting values from objects and arrays.
- **Object Destructuring** allows unpacking properties into variables.
- **Array Destructuring** allows unpacking elements into variables.
- **Call, Apply, and Bind** are used to control the `this` context of a function.

| Method      | Description                                      | Syntax Example                              |
|-------------|--------------------------------------------------|--------------------------------------------|
| `call()`    | Calls a function with specific `this` and args   | `func.call(obj, arg1, arg2)`               |
| `apply()`   | Calls a function with specific `this` and args   | `func.apply(obj, [arg1, arg2])`            |
| `bind()`    | Returns a new function with bound `this`         | `let newFunc = func.bind(obj, arg1, arg2)` |

- Destructuring is especially useful for working with APIs or nested data structures.



----
### 📅 Day 18 – Rest and Spread Operators

#### 🧩 Rest and Spread Operators Overview

- **Rest (`...`)**: Collects multiple elements into a single container (e.g., array or object).  
- **Spread (`...`)**: Spreads elements from an array or object into individual elements.

| **Operator** | **LHS (Rest)**                     | **RHS (Spread)**                  |
|--------------|------------------------------------|------------------------------------|
| `...`        | Collects remaining elements        | Spreads elements into individual items |

---

#### 🧠 Destructuring with Rest and Spread

**1. Object Destructuring:**
Extracting values from objects and assigning them to variables.

```js
let backPack = {
   item1: "Camera",
   item2: "Tiffin",
   item3: "Charger",
   myStuff: {
      myitem1: "Blanket",
      myitem2: "Towel",
      myitem3: "Socks",
      myitem4: "Shampoo"
   }
};

// Accessing properties directly
console.log(backPack.item1); // Camera

// Destructuring
let { item1, item2, item3 } = backPack;
console.log(item1); // Camera
console.log(item2); // Tiffin
console.log(item3); // Charger

// Accessing nested properties
console.log(backPack.myStuff.myitem1); // Blanket
```

---

**2. Array Destructuring:**
Extracting values from arrays and assigning them to variables.

```js
let backPack2 = ["Tent", "Compass", "Torch", "Rope", "Lighter", ["X", "Y", "Z"]];

// Destructuring with skipping elements
let [a, b, , , c, [p, , r]] = backPack2;
console.log(a); // Tent
console.log(b); // Compass
console.log(c); // Lighter
console.log(p); // X
console.log(r); // Z
```

---

#### 🔄 Rest Operator

The **Rest Operator** collects the remaining elements into a single container (e.g., array).

```js
let backPack3 = ["Tent", "Compass", "Torch", "Rope", "Lighter", "Tshirt", "Pants", "Towel"];

// Using Rest to collect remaining elements
let [g, h, i, ...cloths] = backPack3;
console.log(cloths); // ["Rope", "Lighter", "Tshirt", "Pants", "Towel"]
```

**Rest in Functions:**
The **Rest Operator** can collect all arguments into a single array.

```js
let add = (...container) => {
   // All arguments are stored in the `container` array
   console.log(container); // [1000, 2000, 3000, 4000, 1000]
   let addition = container.reduce((acc, amt) => acc + amt, 5000);
   console.log(addition); // 16000
};
add(1000, 2000, 3000, 4000, 1000);
```

---

#### 🔄 Spread Operator

The **Spread Operator** spreads elements from an array or object into individual items.

```js
let backPack3 = ["Tent", "Compass", "Torch", "Rope", "Lighter", "Tshirt", "Pants", "Towel"];

// Using Spread to expand elements
console.log(...backPack3); // Tent Compass Torch Rope Lighter Tshirt Pants Towel
```

**Combining Arrays with Spread:**
```js
let arr1 = [10, 20, 30];
let arr2 = [40, 10, 30];
let newArr = [...arr1, ...arr2];
console.log(newArr); // [10, 20, 30, 40, 10, 30]
```

---

#### 📝 Questions for Practice with Answers

1. **What is the difference between Rest and Spread operators?**  
   - **Rest (`...`)**: Collects multiple elements into a single container (e.g., array or object).  
   - **Spread (`...`)**: Spreads elements from an array or object into individual elements.

2. **How can you use the Rest operator in a function?**  
   Example:
   ```js
   let multiply = (...nums) => nums.reduce((acc, num) => acc * num, 1);
   console.log(multiply(2, 3, 4)); // 24
   ```

3. **How can you combine two arrays using the Spread operator?**  
   Example:
   ```js
   let arr1 = [1, 2, 3];
   let arr2 = [4, 5, 6];
   let combined = [...arr1, ...arr2];
   console.log(combined); // [1, 2, 3, 4, 5, 6]
   ```

4. **What happens if you use Rest in array destructuring?**  
   Example:
   ```js
   let arr = [1, 2, 3, 4, 5];
   let [first, second, ...rest] = arr;
   console.log(rest); // [3, 4, 5]
   ```

5. **Write a function that uses Rest to calculate the sum of all arguments.**  
   Example:
   ```js
   let sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);
   console.log(sum(1, 2, 3, 4)); // 10
   ```

---

#### ✅ Summary

| **Operator** | **Use**                                                                 |
|--------------|-------------------------------------------------------------------------|
| **Rest**     | Collects multiple elements into a single container (e.g., array/object) |
| **Spread**   | Spreads elements from an array or object into individual items          |

| **Scenario**           | **Example**                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Rest in Arrays**      | `let [a, ...rest] = [1, 2, 3];` ➔ `rest = [2, 3]`                          |
| **Rest in Functions**   | `let sum = (...nums) => nums.reduce((a, b) => a + b);`                     |
| **Spread in Arrays**    | `let arr = [...arr1, ...arr2];` ➔ Combines two arrays                      |
| **Spread in Objects**   | `let obj = { ...obj1, ...obj2 };` ➔ Combines two objects                   |

- **Rest** is used to collect remaining elements.  
- **Spread** is used to expand elements.  
- Both are powerful tools for working with arrays, objects, and functions.

----


### 📅 Day 19 – Rest, Spread, and JSON in JavaScript

#### 🧩 Rest and Spread Operators

**Rest (`...`)**: Collects multiple elements into a single container (e.g., array or object).  
**Spread (`...`)**: Spreads elements from an array or object into individual items.

---

#### 🔄 Using Spread to Merge Objects

```js
let student = { name: "Rishabh", age: 23 };
let studentAdd = { city: "Nagpur", state: "Maharashtra", pincode: 440018 };

student = { ...student, ...studentAdd };
console.log(student);
```

**Example: Combining Two Objects**
```js
const RishabhOBJ1 = { name: "Rishabh", age: 21, school: "Adarsh Vidya Mandir" };
const RishabhOBJ2 = { age: 22, college: "K.D.K.", mobile: 7418529630 };

const finalRishabh = { ...RishabhOBJ1, ...RishabhOBJ2 };
console.log(finalRishabh);
```

---

#### 🧠 JSON (JavaScript Object Notation)

- **JSON.stringify()**: Converts a JavaScript object into a JSON string.  
- **JSON.parse()**: Converts a JSON string back into a JavaScript object.  

**Example:**
```js
let jsonObj = JSON.stringify(finalRishabh);
console.log(jsonObj);

let jsonObj1 = JSON.parse(jsonObj);
console.table(jsonObj1);
```

---

#### 🛠️ Working with JSON Data

**Displaying JSON in a Table:**
```js
let jsonObj2 = [
   { login: "mojombo", id: 1, type: "User" },
   { login: "defunkt", id: 2, type: "User" },
   { login: "pjhyett", id: 3, type: "User" }
];

// Convert JSON to string and back to object for table display
let jsonString = JSON.stringify(jsonObj2);
let jsonParsed = JSON.parse(jsonString);
console.table(jsonParsed);
```

---

#### 📝 Questions for Practice

1. **What is the difference between Rest and Spread operators?**  
    - **Rest** collects multiple elements into a single container.  
    - **Spread** expands elements into individual items.

2. **How can you merge two objects using Spread?**  
    Example:  
    ```js
    let obj1 = { a: 1 };
    let obj2 = { b: 2 };
    let merged = { ...obj1, ...obj2 };
    console.log(merged); // { a: 1, b: 2 }
    ```

3. **What is the purpose of JSON.stringify and JSON.parse?**  
    - `JSON.stringify`: Converts an object to a JSON string.  
    - `JSON.parse`: Converts a JSON string back to an object.

4. **How can you display JSON data in a table format?**  
    Example:  
    ```js
    let jsonData = [{ id: 1, name: "Rishabh" }];
    let jsonString = JSON.stringify(jsonData);
    let jsonParsed = JSON.parse(jsonString);
    console.table(jsonParsed);
    ```

---

#### ✅ Summary

| **Concept**          | **Description**                                      |
|-----------------------|------------------------------------------------------|
| **Rest Operator**     | Collects remaining elements into an array/object     |
| **Spread Operator**   | Expands elements from an array/object                |
| **JSON.stringify()**  | Converts an object to a JSON string                  |
| **JSON.parse()**      | Converts a JSON string back to an object             |

- Rest and Spread simplify working with arrays and objects.  
- JSON is essential for data exchange and storage.



---


### 📅 Day 20 – Advanced Object Methods and Exception Handling

### 🧩 Object Methods: `assign` and Property Checks

#### 1. **`Object.assign()`**
The `Object.assign()` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

**Example:**
```js
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }
```

---

#### 2. **Checking if a Property Exists**
You can check if a property exists in an object using the `in` operator.

**Example:**
```js
let obj = {
   name: "Rishabh",
   age: 22,
   address: {
      city: "Nagpur",
      state: "Maharashtra",
      pincode: 440018
   }
};

console.log("name" in obj); // true
console.log("name1" in obj); // false
console.log("city" in obj); // false
console.log("city" in obj.address); // true
```

---

### 🛠️ Ways to Declare Objects

1. **Object Literal:**
   ```js
   let object1 = {};
   ```

2. **Using `new Object()`:**
   ```js
   let object2 = new Object();
   ```

3. **Using Classes:**
   ```js
   class Demo {
      constructor(name, age) {
         this.name = name;
         this.age = age;
      }
   }
   let obj = new Demo("Rishabh", 22);
   console.log(obj); // { name: "Rishabh", age: 22 }
   ```

---

### 🔄 Shallow Copy vs Deep Copy

#### 1. **Shallow Copy**
A shallow copy means that the new object points to the same memory address as the original object. Changes to one object will affect the other.

**Example:**
```js
let newObj = { name: "Rishabh", age: 22 };
let copy = newObj; // Shallow copy
copy.mobile = 7418529630;
console.log(newObj); // { name: "Rishabh", age: 22, mobile: 7418529630 }
console.log(copy);   // { name: "Rishabh", age: 22, mobile: 7418529630 }
```

#### 2. **Deep Copy**
A deep copy creates a completely independent copy of the object. Changes to one object will not affect the other.

**Example:**
```js
let newObj = { name: "Rishabh", age: 22 };
let deepCopy = JSON.parse(JSON.stringify(newObj)); // Deep copy
deepCopy.mobile = 7418529630;
console.log(newObj);   // { name: "Rishabh", age: 22 }
console.log(deepCopy); // { name: "Rishabh", age: 22, mobile: 7418529630 }
```

---

### 🛠️ Exception Handling in JavaScript

Exception handling is used to handle runtime errors gracefully without crashing the program.

#### **Structure of Exception Handling**
1. **`try` Block:** Code that may throw an error.
2. **`catch` Block:** Code to handle the error.
3. **`finally` Block:** Code that will always execute, regardless of whether an error occurred.

**Example:**
```js
console.log("Tinku left home");

try {
   console.log("Tinku was walking on the road");
   console.log(abc); // This will throw an error because `abc` is not defined
   throw new Error("Cycle got punctured");
} catch (err) {
   console.log(err); // Handle the error
} finally {
   console.log("Tinku reached school");
}
```

---

### 📝 Questions for Practice

1. **What is the difference between `Object.assign()` and a shallow copy?**  
   - `Object.assign()` creates a shallow copy of the object but can also merge multiple objects into one.  
   - A shallow copy simply points to the same memory address as the original object.

2. **How can you check if a property exists in an object?**  
   Example:
   ```js
   let obj = { name: "Rishabh" };
   console.log("name" in obj); // true
   console.log("age" in obj);  // false
   ```

3. **What is the difference between shallow copy and deep copy?**  
   - **Shallow Copy:** Both objects share the same memory address. Changes to one affect the other.  
   - **Deep Copy:** Both objects have different memory addresses. Changes to one do not affect the other.

4. **Write an example of exception handling in JavaScript.**  
   Example:
   ```js
   try {
      console.log(abc); // Throws an error
   } catch (err) {
      console.log("An error occurred:", err.message);
   } finally {
      console.log("Execution completed");
   }
   ```

5. **What is the purpose of the `finally` block in exception handling?**  
   The `finally` block contains code that will always execute, regardless of whether an error occurred in the `try` block.

---

### ✅ Summary

| **Concept**               | **Description**                                                                 |
|----------------------------|-------------------------------------------------------------------------------|
| **`Object.assign()`**      | Copies properties from one or more source objects to a target object          |
| **`in` Operator**          | Checks if a property exists in an object                                      |
| **Shallow Copy**           | Both objects share the same memory address                                    |
| **Deep Copy**              | Both objects have different memory addresses                                  |
| **Exception Handling**     | Handles runtime errors using `try`, `catch`, and `finally` blocks             |

- Use `Object.assign()` for merging objects or creating shallow copies.  
- Use JSON methods for creating deep copies.  
- Exception handling ensures that your program can recover gracefully from runtime errors.




### 📅 Day 21 – Promises and Asynchronous JavaScript

#### 🧩 What is a Promise?

A **Promise** is an object in JavaScript used to handle asynchronous operations. It represents a value that may be available now, or in the future, or never. Promises help avoid callback hell and make asynchronous code easier to read and maintain.

#### 🛠️ States of a Promise

1. **Pending:** The initial state, neither fulfilled nor rejected.
2. **Resolved (Fulfilled):** The operation completed successfully.
3. **Rejected:** The operation failed.

---

#### 🧠 Syntax of a Promise

```js
let promise = new Promise((resolve, reject) => {
   // Perform some asynchronous operation
   if (/* success condition */) {
      resolve("Success message");
   } else {
      reject("Error message");
   }
});
```

---

#### 🛠️ Example: Creating and Using a Promise

```js
let a = 10;

let apnapromise = new Promise((resolve, reject) => {
   if (a === 10) {
      resolve("a is 10");
   } else {
      reject("a is not 10");
   }
});

console.log(apnapromise);

apnapromise
   .then((msg) => {
      console.log(msg); // Output: a is 10
   })
   .catch((msg) => {
      console.log(msg); // Output if rejected
   })
   .finally(() => {
      console.log("Promise execution completed");
   });

console.log("end");
```

---

#### 🛠️ Fetch API with Promises

The **Fetch API** is used to make HTTP requests. It returns a Promise that resolves to the response of the request.

**Example: Fetching Data from an API**

```js
fetch("https://api.github.com/users")
   .then((response) => response.json()) // Convert response to JSON
   .then((data) => console.log(data)) // Log the data
   .catch((error) => console.log(error)); // Handle errors
```

---

#### 🛠️ Using `async` and `await`

The `async` keyword is used to declare a function that returns a Promise. The `await` keyword is used to wait for a Promise to resolve.

**Example: Fetching Data with `async`/`await`**

```js
let fetching = async () => {
   try {
      let respObj = await fetch("https://api.github.com/users");
      console.log(respObj); // Response object
      let data = await respObj.json();
      console.log(data); // Array of user objects
   } catch (error) {
      console.log(error); // Handle errors
   }
};

// fetching();
```

---

#### 🛠️ Example: Conditional Promise

```js
let api = true;
let data = [{}, {}, {}];

let p5 = new Promise((resolve, reject) => {
   if (api) {
      resolve(data);
   } else {
      reject("Something went wrong");
   }
});

p5.then((res) => {
   console.log(res); // Output: Array of objects
}).catch((err) => {
   console.log(err); // Output: Error message
});
```

---

#### 🔑 Keywords and Definitions

1. **Promise:** An object representing the eventual completion or failure of an asynchronous operation.
2. **resolve:** A function used to mark a Promise as fulfilled.
3. **reject:** A function used to mark a Promise as rejected.
4. **then():** A method to handle the resolved state of a Promise.
5. **catch():** A method to handle the rejected state of a Promise.
6. **finally():** A method that executes regardless of the Promise's outcome.
7. **async:** Declares a function that returns a Promise.
8. **await:** Pauses the execution of an `async` function until the Promise resolves.
9. **Fetch API:** A modern interface for making HTTP requests.

---

#### 📝 Questions for Practice

1. **What is a Promise in JavaScript?**  
   A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

2. **What are the three states of a Promise?**  
   - Pending  
   - Resolved (Fulfilled)  
   - Rejected  

3. **Write an example of a Promise that resolves if a variable equals 10.**  
   ```js
   let a = 10;
   let promise = new Promise((resolve, reject) => {
      if (a === 10) {
         resolve("a is 10");
      } else {
         reject("a is not 10");
      }
   });
   ```

4. **What is the difference between `then()` and `catch()`?**  
   - `then()`: Handles the resolved state of a Promise.  
   - `catch()`: Handles the rejected state of a Promise.

5. **How does `async`/`await` simplify working with Promises?**  
   - `async`/`await` makes asynchronous code look synchronous, improving readability and maintainability.

6. **Write an example of fetching data from an API using `async`/`await`.**  
   ```js
   let fetchData = async () => {
      try {
         let response = await fetch("https://api.github.com/users");
         let data = await response.json();
         console.log(data);
      } catch (error) {
         console.log(error);
      }
   };
   ```

---

#### ✅ Summary

| **Concept**         | **Description**                                                                 |
|----------------------|-------------------------------------------------------------------------------|
| **Promise**          | Represents the eventual result of an asynchronous operation                  |
| **resolve**          | Marks a Promise as fulfilled                                                 |
| **reject**           | Marks a Promise as rejected                                                 |
| **then()**           | Handles the resolved state of a Promise                                      |
| **catch()**          | Handles the rejected state of a Promise                                      |
| **finally()**        | Executes code regardless of the Promise's outcome                           |
| **async/await**      | Simplifies working with Promises by making code look synchronous             |
| **Fetch API**        | Used to make HTTP requests and returns a Promise                             |

- Promises are essential for handling asynchronous operations in JavaScript.
- Use `async`/`await` for cleaner and more readable asynchronous code.
- The Fetch API is a powerful tool for making HTTP requests.

-----

### 📅 Day 22 – Advanced Asynchronous JavaScript: `async`, `await`, and Timers

#### 🧩 `async` and `await`

**What are `async` and `await`?**  
`async` and `await` are advanced ways to handle Promises in JavaScript. They make asynchronous code easier to read and write by avoiding the need for chaining `.then()` and `.catch()`.

---

#### 🛠️ Key Points

1. **`async` Keyword:**
   - Declares a function that always returns a Promise.
   - If the function explicitly returns a value, it is wrapped in a resolved Promise.

2. **`await` Keyword:**
   - Pauses the execution of an `async` function until the Promise is resolved.
   - Can only be used inside an `async` function.

3. **Why Use `async`/`await`?**
   - Simplifies working with Promises.
   - Avoids callback hell and makes code more readable.

---

#### 🛠️ Example: Using `async` and `await`

```js
let fetching = async () => {
    let respObj = await fetch("https://api.github.com/users");
    console.log(respObj);  
    let data = await respObj.json();
    console.log(data);  // data is an array of objects
};
// fetching();
```

---

#### 🧠 What is Callback Hell?

**Callback Hell** refers to a complex situation where multiple or nested callback functions are used, making the code difficult to read and maintain.

**Example of Callback Hell:**
```js
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);
```

**Solution:** Use Promises or `async`/`await` to simplify the code.

---

#### 🛠️ Timers in JavaScript

1. **`setTimeout`:**
   - Executes a function once after a specified delay.
   - Syntax: `setTimeout(callback, delay)`

   **Example:**
   ```js
   let count = 0;
   let x = setTimeout(() => {
       if (count <= 10) {
           console.log("Rishabh");
           count += 1;
       } else {
           clearTimeout(x);
       }
   }, 6000);
   ```

2. **`setInterval`:**
   - Executes a function repeatedly at specified intervals.
   - Syntax: `setInterval(callback, interval)`

   **Example:**
   ```js
   let timecount = 0;
   let y = setInterval(() => {
       if (timecount <= 10) {
           console.log(timecount);
           timecount += 1;
       } else {
           clearInterval(y);
       }
   }, 1000);
   ```

3. **`clearTimeout` and `clearInterval`:**
   - `clearTimeout(timerId)`: Stops a `setTimeout` timer.
   - `clearInterval(timerId)`: Stops a `setInterval` timer.

---

#### 📝 Questions for Practice

1. **What is the purpose of `async` and `await` in JavaScript?**  
   - `async` declares a function that returns a Promise.  
   - `await` pauses the execution of an `async` function until the Promise resolves.

2. **Why is `async` important when using `await`?**  
   - `await` can only be used inside an `async` function. Without `async`, `await` will throw an error.

3. **What is Callback Hell, and how can it be avoided?**  
   - Callback Hell occurs when multiple nested callbacks make the code difficult to read.  
   - It can be avoided using Promises or `async`/`await`.

4. **What is the difference between `setTimeout` and `setInterval`?**  
   - `setTimeout`: Executes a function once after a delay.  
   - `setInterval`: Executes a function repeatedly at specified intervals.

5. **Write an example of using `setTimeout` to print "Hello" after 3 seconds.**  
   ```js
   setTimeout(() => {
       console.log("Hello");
   }, 3000);
   ```

6. **Write an example of using `setInterval` to print numbers from 1 to 5.**  
   ```js
   let count = 1;
   let interval = setInterval(() => {
       console.log(count);
       if (count === 5) {
           clearInterval(interval);
       }
       count++;
   }, 1000);
   ```

---

#### ✅ Summary

| **Concept**         | **Description**                                                                 |
|----------------------|-------------------------------------------------------------------------------|
| **`async`**          | Declares a function that returns a Promise                                    |
| **`await`**          | Pauses execution of an `async` function until the Promise resolves            |
| **Callback Hell**    | Complex nested callbacks; solved using Promises or `async`/`await`            |
| **`setTimeout`**     | Executes a function once after a delay                                        |
| **`setInterval`**    | Executes a function repeatedly at specified intervals                         |
| **`clearTimeout`**   | Stops a `setTimeout` timer                                                    |
| **`clearInterval`**  | Stops a `setInterval` timer                                                   |

- Use `async`/`await` for cleaner asynchronous code.  
- Timers like `setTimeout` and `setInterval` are useful for scheduling tasks.  
- Always handle errors in asynchronous code using `try`/`catch` or `.catch()`.

----

## 📅 Day 23 – DOM and Math in JavaScript

### 🧩 What is DOM?

The **Document Object Model (DOM)** is a tree-like structure that represents the HTML document. It allows JavaScript to interact with and manipulate the structure, style, and content of a webpage.

---

### 🛠️ DOM Manipulation Example

**Changing the Background Color of All `<h1>` Elements:**
```js
let headings = document.getElementsByTagName('h1');

for (let i = 0; i < headings.length; i++) {
   headings[i].style.backgroundColor = "red";
}
```

---

### 🧩 Math Object in JavaScript

The **Math** object provides mathematical constants and functions for performing calculations.

#### 🛠️ Common Math Methods

1. **`Math.round(x)`**  
   Rounds `x` to the nearest integer.  
   Example:  
   ```js
   console.log(Math.round(10.156)); // Output: 10
   ```

2. **`Math.floor(x)`**  
   Rounds `x` down to the nearest integer.  
   Example:  
   ```js
   console.log(Math.floor(10.156)); // Output: 10
   ```

3. **`Math.ceil(x)`**  
   Rounds `x` up to the nearest integer.  
   Example:  
   ```js
   console.log(Math.ceil(10.156)); // Output: 11
   ```

4. **`Math.random()`**  
   Generates a random number between 0 (inclusive) and 1 (exclusive).  
   Example:  
   ```js
   console.log(Math.random()); // Example output: 0.123456
   ```

5. **Generating Random Integers:**  
   Example:  
   ```js
   console.log(Math.round(10000 * Math.random())); // Example output: 1234
   ```

---

### 🛠️ Converting Numbers to Words

**Function to Convert Numbers to Words:**
```js
let tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
let ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
let teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

let numberToWords = (num) => {
   if (num === 0) return "Zero";
   if (num < 0) return "Negative " + numberToWords(-num);
   if (num > 9999) return "Number too large";

   let words = "";

   if (Math.floor(num / 1000) > 0) {
      words += ones[Math.floor(num / 1000)] + " Thousand ";
      num %= 1000;
   }

   if (Math.floor(num / 100) > 0) {
      words += ones[Math.floor(num / 100)] + " Hundred ";
      num %= 100;
   }

   if (num > 10 && num < 20) {
      words += teens[num - 10] + " ";
   } else {
      words += tens[Math.floor(num / 10)] + " ";
      num %= 10;
      words += ones[num] + " ";
   }

   return words.trim();
};

console.log(numberToWords(Math.round(10000 * Math.random()))); // Example output: "One Thousand Two Hundred Thirty Four"
```

---

### 📝 Questions for Practice

1. **What is the DOM in JavaScript?**  
   The DOM is a tree-like structure that represents the HTML document, allowing JavaScript to interact with and manipulate it.

2. **How can you change the background color of all `<h1>` elements using JavaScript?**  
   Example:  
   ```js
   let headings = document.getElementsByTagName('h1');
   for (let i = 0; i < headings.length; i++) {
      headings[i].style.backgroundColor = "red";
   }
   ```

3. **What is the difference between `Math.floor()` and `Math.ceil()`?**  
   - `Math.floor()`: Rounds a number down to the nearest integer.  
   - `Math.ceil()`: Rounds a number up to the nearest integer.

4. **How can you generate a random integer between 0 and 10000?**  
   Example:  
   ```js
   console.log(Math.round(10000 * Math.random()));
   ```

5. **Write a function to convert a number into words (e.g., 1234 ➔ "One Thousand Two Hundred Thirty Four").**  
   Example:  
   ```js
   let numberToWords = (num) => {
      // Function logic here
   };
   console.log(numberToWords(1234)); // Output: "One Thousand Two Hundred Thirty Four"
   ```

---

### ✅ Summary

| **Concept**         | **Description**                                                                 |
|----------------------|-------------------------------------------------------------------------------|
| **DOM**             | Tree-like structure representing the HTML document                             |
| **Math.round(x)**   | Rounds `x` to the nearest integer                                              |
| **Math.floor(x)**   | Rounds `x` down to the nearest integer                                         |
| **Math.ceil(x)**    | Rounds `x` up to the nearest integer                                           |
| **Math.random()**   | Generates a random number between 0 and 1                                      |
| **Number to Words** | Converts a number into its word representation                                 |

- The DOM allows JavaScript to manipulate HTML elements dynamically.  
- The Math object provides useful methods for mathematical operations.  
- Functions like `numberToWords` can be used to convert numbers into readable text.
---


#### 🧩 Script Loading: `defer`

**What is `defer`?**  
The `defer` attribute is used to load a script after the HTML document has been completely parsed. It ensures that the script does not block the rendering of the HTML document, allowing the page to load faster.

**Key Points:**
- Scripts with `defer` are executed in the order they appear in the document.
- The script is executed only after the entire HTML document has been parsed.
- It is used to prevent blocking of the HTML document while loading the script.

**Example:**
```html
<script src="script.js" defer></script>
```

---

#### 🧩 DOM Selection Methods

1. **`getElementById`:**
   - Returns the first element with the specified `id`.
   - If there are multiple elements with the same `id` (which is invalid in HTML), it will prioritize the first one.
   - **Note:** In HTML, `id` should always be unique.

   **Example:**
   ```js
   let element = document.getElementById("heading1");
   console.log(element);
   ```

2. **`getElementsByClassName`:**
   - Returns a collection (HTMLCollection) of all elements with the specified class name.
   - The returned collection is array-like but not a true array.

   **Example:**
   ```js
   let elements = document.getElementsByClassName("heading4");
   console.log(elements); // HTMLCollection of elements
   ```

3. **`querySelector`:**
   - Returns the first element that matches the specified CSS selector.
   - It is more versatile than `getElementById` or `getElementsByClassName`.

   **Example:**
   ```js
   let element = document.querySelector(".h1");
   console.log(element); // First element with class "h1"
   ```

4. **`querySelectorAll`:**
   - Returns a collection (NodeList) of all elements that match the specified CSS selector.
   - The returned collection is array-like and can be iterated using `forEach`.

   **Example:**
   ```js
   let elements = document.querySelectorAll(".h1");
   console.log(elements); // NodeList of elements with class "h1"
   ```

**Why Use `querySelector` Over `getElementById`?**
- `querySelector` is more flexible as it supports CSS selectors.
- It returns a single element directly, not an HTMLCollection, so there is no need to extract individual elements.

---

#### 🧩 Adding Elements: `append` vs `appendChild`

1. **`append`:**
   - Used to add multiple elements or text nodes to a parent element.
   - Can accept strings and Node objects.

   **Example:**
   ```js
   let parent = document.getElementById("parent");
   parent.append("Hello", " World");
   ```

2. **`appendChild`:**
   - Used to add a single Node object (element or text node) to a parent element.
   - Does not accept strings directly.

   **Example:**
   ```js
   let parent = document.getElementById("parent");
   let child = document.createElement("div");
   child.textContent = "Hello World";
   parent.appendChild(child);
   ```

---

#### 📝 Questions for Practice

1. **What is the purpose of the `defer` attribute in a `<script>` tag?**  
   The `defer` attribute ensures that the script is executed only after the HTML document has been completely parsed, preventing it from blocking the rendering of the page.

2. **What is the difference between `getElementById` and `querySelector`?**  
   - `getElementById`: Selects an element by its `id`.  
   - `querySelector`: Selects the first element that matches a CSS selector.

3. **How does `getElementsByClassName` differ from `querySelectorAll`?**  
   - `getElementsByClassName`: Returns an HTMLCollection (live collection).  
   - `querySelectorAll`: Returns a NodeList (static collection).

4. **What is the difference between `append` and `appendChild`?**  
   - `append`: Can add multiple elements or text nodes.  
   - `appendChild`: Can add only a single Node object.

5. **Write an example of using `querySelectorAll` to change the background color of all elements with the class `box`.**  
   ```js
   let boxes = document.querySelectorAll(".box");
   boxes.forEach((box) => {
       box.style.backgroundColor = "blue";
   });
   ```

---

#### ✅ Summary

| **Method**               | **Description**                                                                 |
|---------------------------|-------------------------------------------------------------------------------|
| **`defer`**              | Loads the script after the HTML document has been parsed                      |
| **`getElementById`**     | Selects an element by its `id`                                                |
| **`getElementsByClassName`** | Selects all elements with a specific class name (returns HTMLCollection)     |
| **`querySelector`**      | Selects the first element matching a CSS selector                             |
| **`querySelectorAll`**   | Selects all elements matching a CSS selector (returns NodeList)               |
| **`append`**             | Adds multiple elements or text nodes to a parent element                     |
| **`appendChild`**        | Adds a single Node object to a parent element                                 |

- Use `defer` to improve page load performance.  
- Prefer `querySelector` and `querySelectorAll` for more flexibility in DOM selection.  
- Use `append` for adding multiple elements and `appendChild` for adding a single element.

---
