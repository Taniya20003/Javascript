//objects inside array
//very useful in real world applications


//creating objects inside array
//const arr = [{},{},{}];

const info=[{id:1,pname:"Yugizen",gender:"Male"},
    {id:2,pname:"Himani",gender:"Female"},
    {id:3,pname:"Ayu",gender:"Male"}
];

for(var x of info){
    console.log(x);
}

for(var x of info){
    console.log(x.id);
}

