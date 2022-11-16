//how to clone array => Spread Operator

var arr1=["Enjoy","Play","Fun"];
var arr2=[...arr1];

arr1.push("Travel");

console.log(arr1);
console.log(arr2);


//doesn't share same address
//doesn't affect original values 

//two arrays clone

var arr3=[...arr1,...arr2];
console.log(arr3);