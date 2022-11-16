//use const for creating array

//Its is safer to use const to makre an array so developer can protect their project from destroyers

const games = ["cricket","tennis","badminton","chess"];

//games = [] can't use 
//we can use other operations like pop(),push(),shift(),unshift() etc

games.push("Basketball");
 
console.log(games);

//we have to use spread operator in this 

var arr=games;
console.log(arr);
console.log(arr===games); //same address

arr.push("Hello");

console.log(arr);
console.log(games);