var num = prompt("enter no between 2 and 100");
var bin = [];

while(num){
    var rem = num%2;
    bin.push(rem);
    num = parseInt(num/2);
}

var eve=0;

bin.forEach(element => {
    if(element==1){
        eve+=1;
    }
});

console.log(eve);

if(eve%2==0) 
    console.log("Evil Number");
else
    console.log("Not an Evil Number");
