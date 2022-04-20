
function checkSum(arr,target){

    var mini = Number.MAX_VALUE;
    console.log("Pairs whose sum is 10 are");
    for(var i=0; i<arr.length-1; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==target){
                console.log(arr[i]+ "+" + arr[j] + "=" + target);
            }
        }
    }
}

var arr = [4,6,5,-10,8,5,20];
var target = 10;
checkSum(arr,target);