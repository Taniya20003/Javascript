//loops in objects

  //1. for in loop
  //2.object.keys


//1. for in loop
const student = {name:"Alia",
              age:11,marks:"60%",
              hobbies:["playing","dancing","cooking"]
};

console.log("First");
for(let info in student){
    console.log(info);
}
console.log("Second");
for(let info in student){
    console.log(student[info]);
}
console.log("Third");
for(let info in student){
    console.log(info , student[info]);
}
console.log("Fourth");
for(let info in student){
    console.log(`${info} : ${student[info]}`);
}
console.log("Fivth");
for(let info in student){
    console.log(info,":",student[info]);
}

