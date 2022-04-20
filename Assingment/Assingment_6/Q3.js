function count(bin){
    var c=0;
    var arr = bin.split("");
    for(var i=0; i<arr.length; i++){
        if(arr[i]=="0"){
            c+=1;
        }
    }
    c-=1;
    console.log(c);
}

var bin = "01101111010";
count(bin);

