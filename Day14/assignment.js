//1.
// Write a program to print the names of 4 cities using forEach loop.
const cities = ["Mumbai", "Pune", "Indore", "Kolkata"];
cities.forEach(city => {
    return console.log("City visited : ", city)
});
    
//2.
// Write a program to print the pin codes of 5 cities using for loop. Print only even pin codes.
const pinCodes = [110001, 560034, 400001, 700019, 600005];
for(const pin of pinCodes){
    if(pin % 2 === 0) console.log(pin);
}

//3.
// Write a program to print the names of 4 players using forEach loop. Print the index and name of each player.
const players = ["Dhoni", "Kohli", "Rohit", "Pandya"];
players.forEach((play, index) =>{
    return console.log(index + " - " + play);
})

//4.
// Write a program to print the names of 4 food items using for loop. Print "Item mil gaya" before each item.
const items = ["Dahi", "Pani Puri", "Lassi", "Aloo Paratha"];
for(const itm of items){
     console.log("Item mil gaya : ",itm);
}

//5.
// Write a program to calculate the GST of 4 prices using map function. Print the original prices and the GST prices.
const prices = [100, 250, 500, 750];
const gstprices = prices.map(price => price + price * 0.18);
console.log(gstprices);
console.log(prices);

//6.
// Write a program to convert the names of 3 players into short names using map function. Print the original names and the short names.
const names1 = ["Sachin Tendulkar", "Rahul Dravid", "MS Dhoni"];
const shortNames = names1.map(name =>{
    const [first , last] = name.split(" ");
    return first[0]+ ". " + last;
})
console.log(shortNames);


//7.
// Write a program to calculate the length of 4 city names using map function. Print the original names and the lengths.
const cityNames = ["Delhi", "Jaipur", "Chandigarh", "Mumbai"];
const lenghts = cityNames.map(name => name.length);
console.log(lenghts);


//8.
// Write a program to convert the names of 4 food items into uppercase using map function. Print the original names and the uppercase names.
const foodItems = ["biryani", "paneer", "samosa", "jalebi"];
const upperFOODS = foodItems.map(item => item.toUpperCase());
console.log(upperFOODS);

//9.
// Write a program to label the roll numbers of 4 students using map function. Print the original roll numbers and the labeled roll numbers.
const rollNumbers = [101, 102, 103, 104];
const labeledRolls = rollNumbers.map(num => "Roll No. "+num );
console.log(labeledRolls);


//10.
// Write a program to filter the odd numbers from an array of numbers using filter function. Print the original array and the filtered array.
const numbers = [2, 5, 8, 11, 14, 17];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//11.
// Write a program to filter the ages greater than 18 from an array of ages using filter function. Print the original array and the filtered array.
const ages = [12, 22, 17, 30, 19];
const adults = ages.filter(age => age > 18);
console.log(adults);


//12.
// Write a program to filter the names with more than 6 characters from an array of names using filter function. Print the original array and the filtered array.
const names2 = ["Amit", "Abhishek", "Parthiban", "Ramesh"];
const longNames = names2.filter(name =>name.length > 6);
console.log(longNames);

//13.
// Write a program to filter the snacks starting with "P" from an array of snacks using filter function. Print the original array and the filtered array.   
const snacks = ["Chips", "Samosa", "Dhokla", "Pani Puri"];
const pSnacks = snacks.filter(item => item.toLowerCase().startsWith("p"));
console.log(pSnacks);

//14.
// Write a program to filter the prices less than 100 from an array of prices using filter function. Print the original array and the filtered array.
const prices2 = [50, 150, 200, 80, 300];
const cheapItems = prices2.filter(price => price < 100);
console.log(cheapItems);


//15.
// Write a program to calculate the total price of 5 items using reduce function. Print the total price.
const itemPrices = [40, 80, 60, 30, 100];
const total = itemPrices.reduce((acc,curr) => acc + curr, 0)
console.log("Total : ", total);

//16.
// Write a program to concatenate the names of 5 words into a sentence using reduce function. Print the sentence.
const words = ["Hello", "world", "this", "is", "JavaScript"];
const sentence = words.reduce((acc, curr) => acc + " " + curr, "");
console.log(sentence.trim()); // "Hello world this is JavaScript"

//17.
// Write a program to calculate the total length of 4 state names using reduce function. Print the total length.
const states = ["Goa", "Kerala", "Punjab", "Gujarat"];
const totalLength = states.reduce((acc, curr) => acc + curr.length, 0);
console.log(totalLength); // 22 (length of all state names combined)


//18.
// Write a program to find the first name starting with "M" from an array of names using find function. Print the name.
const name3 = ["Amit", "Manish", "Vikas", "Mehul"];
const mName = name3.find(name => name.startsWith("M"));
console.log(mName); // "Manish"


//19.
// Write a program to find the first price greater than 500 from an array of prices using find function. Print the price.
const prices3 = [120, 300, 550, 800];
const bigPrice = prices3.find(price => price > 500);
console.log(bigPrice); // 550   


//20.
// Write a program to sort the marks of 5 students in ascending order using sort function. Print the sorted marks.
const marks = [88, 45, 76, 90, 69];
marks.sort((a, b) => a - b);
// marks.sort();
console.log(marks); // [45, 69, 76, 88, 90]


//21.
// Write a program to reverse the names of 4 words using reverse function. Print the reversed names.
const words2 = ["apple", "banana", "cherry", "date"];
const reversedWords = words2.reverse();
console.log(reversedWords); // ["date", "cherry", "banana", "apple"]


//22.
// Write a program to sort the names of 4 sweets in alphabetical order using sort function. Print the sorted names.
const sweets = ["Jalebi", "Barfi", "Rasgulla", "Gulab Jamun"];
sweets.sort();
console.log(sweets); // ["Barfi", "Gulab Jamun", "Jalebi", "Rasgulla"]


//23.
// Write a program to sort the dates in ascending order using sort function. Print the sorted dates.
const dates = ["2023-10-01", "2022-05-15", "2021-12-31"];
dates.sort();
console.log(dates); // ["2021-12-31", "2022-05-15", "2023-10-01"]

//24.
// Write a program to print the first letter of each name from an array of names using forEach loop.
const names4 = ["Ankita", "Bhavesh", "Chandan", "Divya"];
names4.forEach(name => console.log(name[0]));

//25.
// Write a program to convert the names of 3 big cities into lowercase using map function. Print the original names and the lowercase names.
const bigCities = ["DELHI", "MUMBAI", "CHENNAI"];
const lowerCities = bigCities.map(city => city.toLowerCase());
console.log(lowerCities); // ["delhi", "mumbai", "chennai"]


//26.
// Write a program to add "Mr./Ms." before each name in an array of names using map function. Print the original names and the modified names.
const names5 = ["Ravi", "Sneha", "Arjun"];
const titles = names5.map(name => "Mr./Ms. " + name);
console.log(titles); // ["Mr./Ms. Ravi", "Mr./Ms. Sneha", "Mr./Ms. Arjun"]

//27.
// Write a program to remove extra spaces from the names of 3 people using map function. Print the original names and the cleaned names.
const names6 = [" Raju ", "  Meena", "Tarun   "];
const cleanNames = names6.map(name => name.trim());
console.log(cleanNames); // ["Raju", "Meena", "Tarun"]

//28.
// Write a program to filter the names ending with "Singh" from an array of names using filter function. Print the original array and the filtered array.
const surnames = ["Ram Singh", "Ajay", "Rohit Singh"];
const singhSurnames = surnames.filter(name => name.endsWith("Singh"));
console.log(singhSurnames); // ["Ram Singh", "Rohit Singh"]

//29.
const nums = ["45", "6", "123", "9999"];
// Convert to numbers and pad with zeros
const paddedNums = nums.map(n => n.padStart(10, "0"));
console.log(paddedNums); // ["0000000045", "0000000006", "0000000123", "0000009999"]


//30.
// Write a program to replace "Delhi" with "New Delhi" in a string using replace function. Print the original string and the modified string.
const city = "Delhi";
console.log(city.replace("Delhi", "New Delhi")); // "New Delhi"


//31.
// Write a program to extract the first 3 characters from the names of 3 actors using map function. Print the original names and the extracted names.
const actors = ["Amitabh", "Shahrukh", "Salman"];
const subNames = actors.map(name => name.slice(0,3));
console.log(subNames); // ["Ami", "Sha", "Sal"]

//32.

const food  = ["Poha", "Upma", "Idli", "Dosa"];
food.forEach(food => console.log(food[food.length - 1]));


//33.
// Write a program to convert the names of 3 countries into uppercase using map function. Print the original names and the uppercase names.
const sentence2 = "Chai peene chalein?";
const wordArray = sentence2.split(" ");
console.log(wordArray); // ["Chai", "peene", "chalein?"]

const backToSentence = wordArray.join(" ");
console.log(backToSentence); // "Chai peene chalein?"
