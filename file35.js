//hoisting
//we can call function before function declaration
//this is not applicable in function expression

hello();
function hello(){
    console.log("Hello jii");
}

console.log(hlo); //undefined
var hlo = "HELLO JII";
console.log(hlo);


//cannot use let and const in these cases
//console.log(hl); 
//let hl = "HELLO JII";
//console.log(hl);
