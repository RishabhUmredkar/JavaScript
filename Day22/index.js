let fetching = async () =>{
    let respObj = await fetch("https://api.github.com/users");
    console.log(respObj);  
    let data = await respObj.json()
    console.log(data);  // data is an array of objects
    
}
// fetching();



let count = 0;

let x = setTimeout(()=>{
    if(count <= 10)
    {
        console.log("Rishabh");
        count+= 1; 
    }
    else{
        clearTimeout(x);
    }
},6000);

 

let timecount = 0;

let y = setInterval(()=>{
    if(timecount <= 10)
    {
        console.log(timecount);
        timecount+= 1; 
    }
    else{
        clearTimeout(y);
    }
},1000);

 