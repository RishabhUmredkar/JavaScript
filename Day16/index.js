// object

let p = new Promise(() =>{})        //way to create Object
console.log(typeof p);
console.log(p);



let obj = {
//  key  : value            //Value can be anything
    name : "Rishabh",       //-- represent property
    age  : 22,              //-- represent property
    whiteboard : ()=>{      //-- represent behaviour

    },
    address : {
        city : "Nagpur",
        pincode : 440018,
        state : "Maharashtra",
        Area : "Goliabaar sq."
    }
}

console.log(obj.name  + "\n"+obj.age + "\n"+obj.whiteboard);
console.log(obj.address.city);



let person = {
    "my name" : "Rishabh",
    age : 22,
    hobbies : ["Solving Sudoku", "Travelling", "Cycling", "Gym"],
    education : {
        degree : "B.tech",
        stream : "Computer science and Engineering",
        cgpa : 8.9,
        yop : 2024,
        college : {
            name : "KDK College Of engineering",
            university : "Nagpur University",
            address : {
                city : "Nagpur",
                pincode : 440052,
                dist : "Nagpur",
                state : "Maharashtra"
            }
        }
    }
}

// console.log(person.education.college.address.city);
// person.hobbies.map((val ,i , arr) =>{
//     console.log(val);
    
// })


// console.table(person.education.college);



let car = {
    name : "maruti 800",
    brand : "Maruti Suzuki",
    price : 80000,
    color : "Red" ,
    wheels : 4,
    capacity : 5
} //! We perform the creation

// console.log(car); //! We perform the Read operation
// console.log(car.name);  //! We perform the Read operation
// car.wheels = 5; //! we perform the update operation in exiting property
// car.engine = 800;   //! we perform the add new property (update)
// delete car.capacity //! we perform the delete operation

// console.log(car);


let User = [
    {id : 1,
        name : "Tinku",
        age : 23,
        add : "PUNE"
    },
    {id : 2,
        name : "Tinku",
        age : 23,
        add : "PUNE"
    },
    {id : 3,
        name : "Tinku",
        age : 23,
        add : "PUNE"
    },
    {id : 4,
        name : "Tinku",
        age : 23,
        add : "PUNE"
    },
    {id : 5,
        name : "Tinku",
        age : 23,
        add : "PUNE"
    },
    {id : 6,
        name : "Tinku",
        age : 23,
        add : "PUNE"
    },
    {id : 7,
        name : "Tinku",
        age : 23,
        add : "PUNE"
    },
    {id : 8,
        name : "Tinku",
        age : 23,
        add : "PUNE"
    },
    {id : 9,
        name : "Tinku",
        age : 23,
        add : "PUNE",
        yop : 2024
    },
]


// User.map((val , i , arr)=>{
//     console.log(val.yop);
    
// })






// console.log(Object.keys(User));
// console.log(Object.values(User));
console.log(Object.entries(User));

let obj1 = {
    name : "Tinku",
    age : 23
}
console.log(obj1["name"]);
console.log(Object.entries(obj1));

       
let arr = [
    ["name",  "Tinku"],
    ["ge",23]
]

console.log(Object.fromEntries(arr));


let wind = {
    fun : function()
    {
        console.log(this);    
    },
    fun2 : function(){
     console.log(this);
        let inernal = () =>{
            console.log(this);            
        }
        inernal();
        let arrow = () =>{
            console.log(this);            
        }
        arrow();       
    }
}
wind.fun(); // window object
wind.fun2(); // window object



//Call apply bind method
// Call method is used to call the function with a given this value and arguments provided individually.    

let student = {
    nme :"Rinku",
    age : 23,
    add : "Nagpur",
    attend : 34
}

let student1 = {
    nme :"Tinku",
    age : 23,
    add : "Nagpur",
    attend : 34
}

function checAt(leave ,percentage){
    console.log(this.nme + " has " + leave + " leaves and percentage is " + percentage);
}

checAt.call(student , 5 , 80); // call method
checAt.call(student1 , 2 , 90); // call method
