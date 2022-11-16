//function

function singhappybday(){
    console.log("Happy Birthday To You!");
}

singhappybday();

function addtwonum(a,b){
    return a+b;
}

var returnedval=addtwonum(4,5);
console.log(returnedval);

function isEven(num){
    console.log(num%2 === 0);  // strict comparison gives true nad false
}

isEven(5);

function linearsearch(array,target){
    for(var i=0;i<array.length;i++){
        if(array[i]===target)
            return i;    
    }
    return -1;
}

console.log(linearsearch([6,8,9,4,15],8));

function alpha(alpa){
    console.log(alpa[0]);
}
alpha("taniya");