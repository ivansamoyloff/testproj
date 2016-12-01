var result;
result = prompt('Enter the string');
function Lucas() {
    result = result.match(/[a-z]|[а-я]/gi);
    result.sort();
    return result;
}
function Count(){
    var obj={};
    for(var i=0;i<result.length;i++) {
        var key = result[i];
        if(!obj[key]){
            obj[key]=0;
        }
        obj[key]+=1;
    }
    return obj;
}
Lucas(result);
Count(result);
