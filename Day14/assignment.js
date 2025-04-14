//1.
const cities = ["Mumbai", "Pune", "Indore", "Kolkata"];
cities.forEach(city => {
    return console.log("City visited : ", city)
});
    
//2.
const pinCodes = [110001, 560034, 400001, 700019, 600005];
for(const pin of pinCodes){
    if(pin % 2 === 0) console.log(pin);
}

//3.
const players = ["Dhoni", "Kohli", "Rohit", "Pandya"];
players.forEach((play, index) =>{
    return console.log(index + " - " + play);
})

//4.
const items = ["Dahi", "Pani Puri", "Lassi", "Aloo Paratha"];
for(const itm of items){
     console.log("Item mil gaya : ",itm);
}

//5.
const prices = [100, 250, 500, 750];
const gstprices = prices.map(price => price + price * 0.18);
console.log(gstprices);
console.log(prices);

//6.
const names1 = ["Sachin Tendulkar", "Rahul Dravid", "MS Dhoni"];
const shortNames = names1.map(name =>{
    const [first , last] = name.split(" ");
    return first[0]+ ". " + last;
})
console.log(shortNames);


//7.
const cityNames = ["Delhi", "Jaipur", "Chandigarh", "Mumbai"];
const lenghts = cityNames.map(name => name.length);
console.log(lenghts);


//8.
const foodItems = ["biryani", "paneer", "samosa", "jalebi"];
const upperFOODS = foodItems.map(item => item.toUpperCase());
console.log(upperFOODS);

//9.
const rollNumbers = [101, 102, 103, 104];
const labeledRolls = rollNumbers.map(num => "Roll No. "+num );
console.log(labeledRolls);


//10.
const numbers = [2, 5, 8, 11, 14, 17];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//11.
const ages = [12, 22, 17, 30, 19];
const adults = ages.filter(age => age > 18);
console.log(adults);


//12.
const names2 = ["Amit", "Abhishek", "Parthiban", "Ramesh"];
const longNames = names2.filter(name =>name.length > 6);
console.log(longNames);

//13.
const snacks = ["Chips", "Samosa", "Dhokla", "Pani Puri"];
const pSnacks = snacks.filter(item => item.toLowerCase().startsWith("p"));
console.log(pSnacks);

//14.
const prices2 = [50, 150, 200, 80, 300];
const cheapItems = prices2.filter(price => price < 100);
console.log(cheapItems);


//15.
const itemPrices = [40, 80, 60, 30, 100];
const total = itemPrices.reduce((acc,curr) => acc + curr, 0)
console.log("Total : ", total);

//16.
const words = ["Hello", "world", "this", "is", "JavaScript"];
const sentence = words.reduce((acc, curr) => acc + " " + curr, "");
console.log(sentence.trim()); // "Hello world this is JavaScript"

//17.
const states = ["Goa", "Kerala", "Punjab", "Gujarat"];
const totalLength = states.reduce((acc, curr) => acc + curr.length, 0);
console.log(totalLength); // 22 (length of all state names combined)


//18.
const name3 = ["Amit", "Manish", "Vikas", "Mehul"];
const mName = name3.find(name => name.startsWith("M"));
console.log(mName); // "Manish"


//19.
const prices3 = [120, 300, 550, 800];
const bigPrice = prices3.find(price => price > 500);
console.log(bigPrice); // 550   


//20.
const marks = [88, 45, 76, 90, 69];
marks.sort((a, b) => a - b);
// marks.sort();
console.log(marks); // [45, 69, 76, 88, 90]


//21.
const words2 = ["apple", "banana", "cherry", "date"];
const reversedWords = words2.reverse();
console.log(reversedWords); // ["date", "cherry", "banana", "apple"]


//22.
const sweets = ["Jalebi", "Barfi", "Rasgulla", "Gulab Jamun"];
sweets.sort();
console.log(sweets); // ["Barfi", "Gulab Jamun", "Jalebi", "Rasgulla"]


//23.
const dates = ["2023-10-01", "2022-05-15", "2021-12-31"];
dates.sort();
console.log(dates); // ["2021-12-31", "2022-05-15", "2023-10-01"]

//24.
const names4 = ["Ankita", "Bhavesh", "Chandan", "Divya"];
names4.forEach(name => console.log(name[0]));

//25.
const bigCities = ["DELHI", "MUMBAI", "CHENNAI"];
const lowerCities = bigCities.map(city => city.toLowerCase());
console.log(lowerCities); // ["delhi", "mumbai", "chennai"]


//26.
const names5 = ["Ravi", "Sneha", "Arjun"];
const titles = names5.map(name => "Mr./Ms. " + name);
console.log(titles); // ["Mr./Ms. Ravi", "Mr./Ms. Sneha", "Mr./Ms. Arjun"]

//27.
const names6 = [" Raju ", "  Meena", "Tarun   "];
const cleanNames = names6.map(name => name.trim());
console.log(cleanNames); // ["Raju", "Meena", "Tarun"]

//28.
const surnames = ["Ram Singh", "Ajay", "Rohit Singh"];
const singhSurnames = surnames.filter(name => name.endsWith("Singh"));
console.log(singhSurnames); // ["Ram Singh", "Rohit Singh"]

//29.
const nums = ["45", "6", "123", "9999"];
const paddedNums = nums.map(n => n.padStart(10, "0"));
console.log(paddedNums); // ["0000000045", "0000000006", "0000000123", "0000009999"]


//30.
const city = "Delhi";
console.log(city.replace("Delhi", "New Delhi")); // "New Delhi"


//31.
const actors = ["Amitabh", "Shahrukh", "Salman"];
const subNames = actors.map(name => name.slice(0,3));
console.log(subNames); // ["Ami", "Sha", "Sal"]

//32.

const food  = ["Poha", "Upma", "Idli", "Dosa"];
food.forEach(food => console.log(food[food.length - 1]));


//33.
const sentence2 = "Chai peene chalein?";
const wordArray = sentence2.split(" ");
console.log(wordArray); // ["Chai", "peene", "chalein?"]

const backToSentence = wordArray.join(" ");
console.log(backToSentence); // "Chai peene chalein?"
