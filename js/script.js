var input;
var matches;
input = prompt('Enter the string');
function Lucas(b) {
    b = b.match(/[a-z]|[а-я]/gi);
    b.sort();
    matches = b;
    return b;
}
function Count(a){
    var obj={};
    for(var i=0;i<a.length;i++) {
        var key = a[i];
        if(!obj[key]){
            obj[key]=0;
        }
        obj[key]+=1;
    }
    return obj;

}
Lucas(input);
Count(matches);
