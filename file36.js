//function inside function

//let's make a calculator

function calc(){
    const addtwonum = (a,b) => console.log(a+b);
    const subtwonum = (c,d) => console.log(c-d);
    const multwonum = (e,f) => console.log(e*f);
    const divtwonum = (g,h) => console.log(g/h);

    addtwonum(4,6);
    subtwonum(9,2);
    multwonum(2,4);
    divtwonum(9,3);
}

calc();

//we cannot call them ouside

//default parameter

function sumthree(a=0,b=0,c=0){
    console.log(a+b+c);
}

sumthree(9,7);