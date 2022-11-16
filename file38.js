//rest parameters

//use of spread operator in variables

function myfunc(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);

}

myfunc(8,7,4,6,78,9,0,3,4);

//addition infinite values

function summ(...nums){
    var tot=0;

    for(let x of nums){
        tot+=x;
    }

    return tot;
}

console.log(summ(9,7,1));