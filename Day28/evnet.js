let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let form = document.querySelector('form')
let h1 = document.querySelector('h1')

let obj = {
    username : null,
    password : null
}

let user = [];

input1.addEventListener('focus', (e)=>{
    e.target.style.borderBottomColor = 'green';
    e.target.style.backgroundColor = 'grey';
})
input1.addEventListener('input',(e)=>{
    username = e.target.value
    obj.username = username;
})
input2.addEventListener('focus', (e)=>{
    e.target.style.borderBottomColor = 'green';
    e.target.style.backgroundColor = 'grey';
})
input2.addEventListener('input',(e)=>{
    password = e.target.value
    obj.password = password;
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    user.push({...obj});
    input1.value = ""
    input2.value = ""
    h1.innerText = obj.username;
    console.log(user);
    
})