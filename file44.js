//reduce method
//there are two things in reduce 
//accumulator and currentvalue
//we can set accumulator acc to our needs 
//currentvalue is something which points the arrays' elements

const values=[3,5,6,7,9,1];

const sum=values.reduce((accumulator,currentvalue)=>
{
    return accumulator+currentvalue;
});

console.log(sum);

//accumulator    currentvalue     return
//   3              5                8
//   8              6                14
//   14             7                21
//   21             9                30
//   30             1                31

//we can also initalise accumulator value

const product=[{id:1,pname:"tv",price:12000},
{id:2,pname:"Machine",price:22000},
{id:3,pname:"Phone",price:34000}
];

const tot=product.reduce((accumulator,currentvalue)=>
{
    return accumulator+currentvalue.price;
},0); //here accumulator starting value is zero

console.log(tot);

//accumulator   currentvalue    return
// 0              12000          12000
// 12000          22000          34000
// 34000          34000          68000   