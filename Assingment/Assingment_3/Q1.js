function chop(str,pos){
    if(str==null) return [];

    return str.match(new RegExp('.{1,'+ pos + '}','g'));
}

console.log(chop("welcome"));
console.log(chop("welcome",1));
console.log(chop("welcome",2));