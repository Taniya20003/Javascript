//important array methods

//forEach
//map
//filter
//reduce

//forEach

const numbers=[2,4,5,6,7];

function print(number,index){
    console.log(`number is ${2*number},index is ${index}`);
}
//for(let i=0;i<numbers.length;i++){
//    print(numbers[i],i);
//}

numbers.forEach(print);

//object

const users = [{id:1,name:"Aman",gender:"male"},
    {id:2,name:"Ruhi",gender:"female"},
    {id:3,name:"Sach",gender:"male"}
];

users.forEach( (users,index)=>
      console.log(users.name,index)
)