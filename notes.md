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




# 🌟 Day 13 - JavaScript Array Methods

Today’s focus: mastering common array methods for data handling.

---

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
