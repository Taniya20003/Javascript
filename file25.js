//objects (reference type) or object literal

   //1. arrays are good but not sufficient for real worls data
   //2. objects store key value pairs
   //3. objects don't have index

//how to create objects

const info = {
    name:"Ayan",
    age:10,
    hobbies:["playing","sleeping","eating","repeat"]
}

console.log(info);
console.log(typeof info);

//how to access data from objects

console.log(info.name);
console.log(info.age);
console.log(info.hobbies);

//how to add key value pair to objects

info.gender = "male";

console.log(info);
