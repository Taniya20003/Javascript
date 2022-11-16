//while loop

const age=[2,56,42,23,45];
var i=0;

while(i<age.length){
    console.log(age[i]);
    i++;
}

//for of loop (most used)

const food=["Honey Chilli Potatoes","Chilli Paneer","Chilli potatoes","Momos","Noodles"];
for(var item of food){
    console.log(item);
}

//for in loop => gives index

const foods=["Manchurian","Chilli Paneer","Chilli potatoes","Momos","Noodles"];
for(var i in foods){
    //console.log(i); 0 1 2 3 4
    console.log(foods[i]);
}