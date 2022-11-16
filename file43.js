//filter method
//always make new array of true values

const numbers=[1,4,5,2,7,8,6];

const filtering=numbers.filter((num)=>
   {
    return num%2===0;
   }
);

console.log(filtering);