//function returning function

function myfunc(){
    function hello(){
        return "hello bhai";
    }
    return hello;
}

const ans=myfunc();

console.log(myfunc());

console.log(ans());