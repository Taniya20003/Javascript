//nested if else

var winningnum=50;

var guessnum = +prompt("Give a number");

if(winningnum === guessnum){
    console.log("Correct!!");
}
else{
    if(winningnum < guessnum){
        console.log("Too high");
    }
    else{
        console.log("Too Low");
    }
}