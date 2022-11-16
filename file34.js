//Arrow functions
//no need of return in one line code

const singhappybday = () => console.log("Happy Birthday To You!");

singhappybday();

const addtwonum = (a,b) => a+b;

var returnedval = addtwonum(4,5);
console.log(returnedval);

const isEven = (num)=>console.log(num%2 === 0);  // strict comparison gives true nad false


isEven(5);

const linearsearch = (array,target)=>{
    for(var i=0;i<array.length;i++){
        if(array[i]===target)
            return i;    
    }
    return -1;
}

console.log(linearsearch([6,8,9,4,15],8));

const alpha = (alpa) => console.log(alpa[0]);

alpha("taniya");