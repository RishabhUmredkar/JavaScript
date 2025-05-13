// let obj = {

// }
// console.log(obj.name); // undefined


// Defer : It is used to load the script after the HTML document has been completely loaded. It is used to prevent blocking of the HTML document while loading the script. It is used to load the script in a non-blocking way.

//IF there are same id heading1 in html then it will give prioity to the first one. And in html there is no duplucate id. So it will give the first one.
let heading = document.getElementById("heading1")
console.log(heading);
heading.style.backgroundColor = "red"



let classes = document.getElementsByClassName("heading4");
//It will return the collection of all the elements with the class name heading4. It will return an array of elements with the same class name.
console.log(classes); 

for(let i = 0; i < classes.length; i++)
{
    console.log(classes[i]);
    classes[i].style.backgroundColor = "grey"

}
// classes.style.backgroundColor = "red"


let ele = document.querySelector('.h1')
console.log(ele); // It will return the first element with the class name h1. It

let ele2 = document.querySelectorAll('.h1')
console.log(ele2); 
// It will return the collection of all the elements with the class name h1. It will return an array of elements with the same class name.




let ele3 = document.querySelector('#heading1')
console.log(ele3); // It will return the first element with the id name heading1.

let ele4 = document.querySelector('p')
console.log(ele4); // It will return the first element with the tag name p.


let head1 = document.createElement('h1')
console.log(head1); // It will create a new element with the tag name h1.

head1.innerText = "Hello"

let x = document.querySelector('body')
x.append(head1)
console.log(x); // It will return the first element with the tag name body.



/// ************************************************

let main1 = document.createElement('main')
let section1 = document.createElement('section')
let p1 = document.createElement('p')

main1.innerText = "This is main"
section1.innerText = "This is section"
p1.innerText = "This is paragraph"

let frame = document.querySelector('body')
frame.append(main1)

let main = document.querySelector('main')
main.append(section1)

let para = document.querySelector('section')
section1.append(p1)

console.log(main1);



/// ************************************************


let header = document.querySelector('h2')
header.setAttribute('title', "This is heading")

header.setAttribute('id' , "headId")


