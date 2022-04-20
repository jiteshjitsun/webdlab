console.log("regular expression");
let a = /jitsun/; //
a = /jitsun/g; // g ka matlab h global flag meri puri string ko dekna 
a = /jitsun/i; // i ka matlab h case insensitive 
console.log(a);
console.log(a.source);

// functions to match expression 
// we use exec() function to find the string 

let s = "This is jitsUn and jitsun bhai";

let res = a.exec(s);
console.log(res);


