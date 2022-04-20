function sentenceCase(str){

    str = str.toLowerCase();
    var arr = str.split(' ');
    var res = [];
    arr.forEach(element => {
       res.push(element[0].toUpperCase() + element.slice(1,element.length));
    });

    return res.join(' ');
}


console.log(sentenceCase('hoW aRe YOU'));
