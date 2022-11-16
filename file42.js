//map method
//always use return in functions
//it makes a new array

const array=[2,4,1,6,7];

function myfun(num){
    return num*num;
}

const newarr=array.map(myfun);
console.log(newarr);

//--------------------------------
 
const newarr1=array.map((num)=>
       {return num*num;}
)
console.log(newarr1);