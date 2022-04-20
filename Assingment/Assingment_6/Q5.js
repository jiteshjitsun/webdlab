
var a = [1,5,10,7,8,6];
var b = [2,4,9];
a.sort(function(a,b){
    return a-b;
});

var res = new Array();
var i=0,j=0;
for(var i=0;i<a.length;i++)
{
    res.push(a[i]);
}
for(var i=0;i<b.length;i++)
{
    res.push(b[i]);
}
res.sort(function(a,b){
    return a-b;
})
var k = 0;
for(var i=0;i<a.length;i++)
{
    a[i] = res[k];
    k++;
}
for(var i=0;i<b.length;i++)
{
    b[i] = res[k];
    k++;
}
console.log(a);
console.log(b);