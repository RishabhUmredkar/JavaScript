let div = document.querySelector('div')

// //We cannot write more than one html tag using String but.....
// div.innerHTML = "<h1>Hello1</h1>
// <h1>Hello1</h1>
// <h1>Hello1</h1>
// "

// //We can write more than one html tag using Backticks but.....
div.innerHTML = 
`<h1>Hello1</h1>
<h1>Hello2</h1>
<h1>Hello3</h1>
<h1>Hello4</h1>`                                                         



let h1 = document.createElement('h1')
let h2 = document.createElement('h1')
let h3 = document.createElement('h1')
let h4 = document.createElement('h1')

h1.innerText = "Hello"
h2.innerText = "Hello"
h3.innerText = "Hello"
h4.innerText = "Hello"
div.append(h1, h2, h3, h4);


let h5 = document.querySelector("h5")
console.log(h5);

h5.remove();
console.log(h5);




// ----------------------------------------------------------------

// Events


let button = document.querySelector('button')
let head1 = document.querySelector('h1')

button.onclick = () =>{
    head1.innerText = "Rishabh"
    head1.innerText = ""
    
}