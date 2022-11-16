//callback functions
//we can pass func as parameter in another function call   

function myfun2(){
    console.log("inside func 2");
}

function myfunc(a){
    console.log(a);
}

myfunc(myfun2);

//here a is callback function