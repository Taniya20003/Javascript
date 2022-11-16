//nested destructuring


const info=[{id:1,pname:"Yugizen",gender:"Male"},
    {id:2,pname:"Himani",gender:"Female"},
    {id:3,pname:"Ayu",gender:"Male"}
];

let [{pname:name,id}, ,{gender:gen}]=info;
console.log(name);
console.log(id);
console.log(gen);
