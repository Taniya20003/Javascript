//Spread Operator in objects

var student = { name:"Aman",age:10,weight:50,marks:"90%"};
var fav = {food : "Chilli Paneer",song: "Krishna",color : "Red"};

var details={...student,...fav};
console.log(details);

//student.hrs=5;


details.age=20;

student.age=11;
console.log(student);
console.log(details);