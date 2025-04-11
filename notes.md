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

### 🗅 Day 1 – Introduction to JavaScript

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
1. Number  2. Boolean  3. String  4. Symbol  
5. Null    6. Undefined  7. NaN   8. BigInt  

**String Declaration:**  
- Single quotes `''`, Double quotes `""`, Backticks ``` ```

---

### 🗅 Day 2 – Variables

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

### 🗅 Day 3

**Lexical Scope:** Accessing the members outside the function.  
**Closure:** A special memory allocation in the window object.

---

### 🗅 Day 4 – Functions

1. `=>` is called fat function / arrow function  
2. Prime number check example  
3. Function Expression (Anonymous functions)  
4. Immediate Invoked Function Expression (IIFE)  
5. Higher Order Function (accepts function as argument)  
6. Callback Function (passed as an argument)  

---

### 🗅 Day 5 – Function Types

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

### 🗅 Day 6

- AST: Abstract Syntax Tree

---

### 🗅 Day 8 – Hoisting & Temporal Dead Zone

1. **Temporal Dead Zone (TDZ):**  
   Time between variable declaration and initialization  

2. **Hoisting:**  
   Variable/function lifted to top of execution scope  

3. **`this`:** Refers to the current object  

**Behavior:**  
- `let` / `const` in TDZ ➔ Error  
- `var` ➔ Hoisted to window object ➔ `undefined`  

---

### 🗅 Day 9 – Hoisting (Advanced)

1. Regular Function ➔ Hoisted as function  
2. Arrow Function ➔ Hoisted as variable ➔ Error  
3. Function Expression ➔ Hoisted as variable ➔ Error  

---

### 🗅 Day 11 – Strings

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

### 🗅 Day 12 – Arrays

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

