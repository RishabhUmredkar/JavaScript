let number = document.getElementById('number')
let name = document.getElementById('name')
let nameError = document.getElementById('nameError')
let numberError = document.getElementById('numberError')

let displayTable = document.getElementById('tablebody')



let handleSubmit = (e)=>{
    e.preventDefault() 
    // console.log("inside handleSubmit");
    // console.log(name);
    // console.log(number.value);
    if(name.value != '' && number.value != '' && number.value.length == 10  && name.value.length >=3){
    let tableRow = document.createElement('tr')
    let nameData = document.createElement('td')
    let numberData = document.createElement('td')

    displayTable.appendChild(tableRow)
    tableRow.appendChild(nameData)
    tableRow.appendChild(numberData)
    
    nameData.innerHTML = name.value;
    numberData.innerHTML = number.value;

    name.value = ''
    number.value = ''
    }
    else if(name.value.length <= 2){
        nameError.style.display = "block"
    }
    else if(number.value.length != 10){
        numberError.style.display = "block"
    }
   
  

}


