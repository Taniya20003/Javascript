//function expression
//making names of function by taking const,let,var
//mostly we use const

const singhappybday = function() {
    console.log("Happy Birthday To You!");
}

singhappybday();

const addtwonum = function(a,b){
    return a+b;
}

var returnedval=addtwonum(4,5);
console.log(returnedval);

const isEven = function(num){
    console.log(num%2 === 0);  // strict comparison gives true nad false
}

isEven(5);

const linearsearch = function(array,target){
    for(var i=0;i<array.length;i++){
        if(array[i]===target)
            return i;    
    }
    return -1;
}

console.log(linearsearch([6,8,9,4,15],8));

const alpha = function (alpa){ 
    console.log(alpa[0]);
}
alpha("taniya");