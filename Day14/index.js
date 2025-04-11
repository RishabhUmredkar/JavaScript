//Filter and reduce


// let userData=[
// [{"id":1,"first_name":"Fitz","last_name":"Feirn","email":"ffeirn0@sogou.com","gender":"Male","ip_address":"333-840-3991"},
//     {"id":2,"first_name":"Robbie","last_name":"Veschambre","email":"rveschambre1@myspace.com","gender":"Non-binary","ip_address":"202-660-7371"},
//     {"id":3,"first_name":"Sandye","last_name":"Blayd","email":"sblayd2@upenn.edu","gender":"Female","ip_address":"272-392-1460"},
//     {"id":4,"first_name":"Peggie","last_name":"Shave","email":"pshave3@yolasite.com","gender":"Female","ip_address":"314-363-5900"},
//     {"id":5,"first_name":"Gustie","last_name":"Huntington","email":"ghuntington4@hostgator.com","gender":"Female","ip_address":"730-614-0468"},
//     {"id":6,"first_name":"Dona","last_name":"De-Ville","email":"ddeville5@dion.ne.jp","gender":"Female","ip_address":"862-323-5292"},
//     {"id":7,"first_name":"Lina","last_name":"Godthaab","email":"lgodthaab6@flavors.me","gender":"Genderfluid","ip_address":"847-265-1339"},
//     {"id":8,"first_name":"Allianora","last_name":"Loffhead","email":"aloffhead7@boston.com","gender":"Female","ip_address":"424-250-2524"},
//     {"id":9,"first_name":"Chan","last_name":"Kleynen","email":"ckleynen8@ning.com","gender":"Male","ip_address":"825-721-4716"},
//     {"id":10,"first_name":"Rozamond","last_name":"Dommersen","email":"rdommersen9@pagesperso-orange.fr","gender":"Female","ip_address":"622-800-1668"}]
// ]



let arr = [10,20,30,40,50,60]

//USE FILTER METHOD 
let arr1 = arr.filter(num =>
    num <= 30);
console.log(arr1 );

//USE REDUCE METHOD
let arr2 = arr.reduce((acc, val) => {
    return acc + val;
}, 0);
console.log(arr2);

//USE MAP METHOD
let arr3 = arr.map((val)=>{
    return val * 2;
})
console.log(arr3);

//USE FIND METHOD
// The find() method returns the value of the first element that passes a test (provided as a function).
let finddata = arr.find((val)=>{
    return val > 30;
})
console.log(finddata);



let arrsort = [50, 20, 30, 10, 40, 60];
arrsort.sort((initial, final) => {
    return final - initial; // for descending order
})
console.log(arrsort);



let foreach = [50, 20, 10, 30, 40, 60];
for (const i of foreach)
{
        console.log(i);
}


let reverse = [50, 20, 10, 30, 40, 60];;
let reversesort = reverse.reverse();
console.log(reversesort);


let method = [50, 20, 10, 30, 40, 60];
method.push(100);  // add element at the end of array
// method.pop(); // remove last element of array
// method.unshift(200); // add element at the beginning of array
// method.shift(); // remove first element of array
console.log(method);

delete method[0]; // delete element at index 0
console.log(method.indexOf(20)); // find index of element 20
console.log(method.includes(20)); // check if element 20 is present in array
console.log(method.length); // length of array
console.log(method.lastIndexOf); // last index of element in array
console.log(method.toString()); // convert array to string
console.log(method.at(0)); // get element at index 0
console.log(method.slice(0, 3)); // get elements from index 0 to 2