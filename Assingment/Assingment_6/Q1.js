
function zigZag(arr, n)
{

    var flag = 1;
 
    for(var i = 0; i < arr.length-1; i++)
    {
        if (flag)
        {
            if (arr[i] > arr[i + 1])
                {var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;}
        }

        else
        {
            if (arr[i] < arr[i + 1])
                {var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;}
        }
         
        flag = 1-flag;
    }

    for(let i = 0; i < n; i++)
        console.log(arr[i] + " ");
}
 

let arr = [ 4, 3, 7, 8, 6, 2, 1 ];
let n = arr.length;
zigZag(arr, n);
 
