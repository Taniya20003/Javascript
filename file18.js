//arrays
//ordered collection of items
//reference type

var myfruits = ["Apple","Mango","Grapes"];


//push
myfruits.push("orange");
console.log(myfruits);

console.log(Array.isArray(myfruits));
console.log(typeof myfruits);
console.log(myfruits instanceof Array);

//pop
console.log(myfruits.pop());
console.log(myfruits);

//unshift()
myfruits.unshift('Orange');
console.log(myfruits);

//shift()
console.log(myfruits.shift());
console.log(myfruits);

