

console.log("start");
((a)=>{console.log(a)})(10);
console.log("end");



let hof = (cbf) =>{
    cbf();
};

let cbf = () => {
    console.log("cbf");
};

hof(cbf);


let operation = (type , a, b)=> {
    type(a,b);
};

let add = (a, b) => {
    console.log(a + b);    
}
let sub = (a, b) => {
    console.log(a - b);
}
operation(add,10,20);