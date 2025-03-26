
let heading = document.querySelector("h1");
let cartItemCount = 0;
heading.innerText = cartItemCount;

function addToCart()
{
    cartItemCount--;
    heading.innerText = cartItemCount;
} 
function originalValue()
{
    console.log(cartItemCount);
}

function reset()
{
    cartItemCount = 0;
    heading.innerText = cartItemCount;
}


// let add => (a,b)
// {
//     console.log(a+b);
// }

// add(10,20);