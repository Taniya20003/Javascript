//primitive type(immutable)
//values store  in stack
//always assign new space to new variable which doesn't affect original value

var a=7;
var b=a;
console.log(a);
console.log(b);
a++;
console.log(a);
console.log(b);

//reference type(mutual)
//shares addresses
var arr1=["Smile","Laugh","Fun"];
var arr2=arr1;
console.log(arr1);
console.log(arr2);
arr1.push("Enjoy");
console.log(arr1);
console.log(arr2);
//arr1 and arr2 are sharing same address therefore original changes are affected
arr2.push("Travel");
console.log(arr1);
console.log(arr2); 
