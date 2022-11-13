//typeof operator

//data types (primitive data types)
//string "taniya"
//number 2 3 4 5
//booleans
//undefined
//null
//bigint
//symbol

var age=10;
var firstName="taniya";

console.log(typeof age);
console.log(typeof firstName);

//convert number to string
     //10+""="10"
console.log(typeof (age+""));

//convert string to number
  //add + before string

var myname = +"25";
console.log(typeof myname);


//alternate
    //number to string
    var num="45";
    console.log(typeof num);
    num=Number(num);
    console.log(typeof num);

    //string to number
    var num1=45;
    console.log(typeof num1);
    num1=String(num1);
    console.log(typeof num1);