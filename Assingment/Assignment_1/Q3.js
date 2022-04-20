var arr = [];
 
for(var i=0; i<5; i++) 
{
    arr[i] = prompt('Enter array Element ' + (i+1));
}

var min = Number.MIN_VALUE;
for(var i=0; i<5; i++){
    if(min<arr[i]){
        min = arr[i];
    }
}

console.log(min);
 