var t = prompt("Enter 1 to convert temp into celcius else 2 for F");

if(t==1){
    var f = prompt("Enter temp in Farenheit");
    var c = 5*((f-32)/9);
    console.log(c);
}
else{
    var c = prompt("Enter temp in Celcius");
    var f = 9*(c/5) + 32;
    console.log(f);
}
