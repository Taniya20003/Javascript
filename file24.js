//array destructuring

const myArray=["val1","val2","val3","val4"];

var[myvar1,myvar2,...myvalues]=myArray;

console.log(myvar1);
console.log(myvar2);
console.log(myvalues);

//myvalues will store the rest of the values