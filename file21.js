//for loop in array

var fruits=["apple","orange","banana","grapes"];

for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//uppercase
for(var i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
}

//to push in a new array
var myfruits=[];
for(var i=0;i<fruits.length;i++){
    myfruits.push(fruits[i].toUpperCase());
}
console.log(myfruits);