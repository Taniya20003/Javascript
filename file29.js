 //object destructuring 
 //to make them variables

 const games={
    name:"Basketball",
    teamname: "Player01"
 }

 //use the same key name to treatment them as variable
 //in const we can't change name and teamname

 const{name,teamname} = games;
 console.log(name);

 //to change them acc to future needs use let or var

 let{name,teamname} = games;
 console.log(name);

 //to change variable name use colon(:)

 let{name:sname}=games;
 console.log(sname);

 //store rest stuff in a variable

 let{name,teamname,...reststuff}=games;
