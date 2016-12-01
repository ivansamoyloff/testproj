var result;
 result = prompt('Enter the string');
function Lucas() {
    result = result.toLowerCase();
    console.log(result);
    result = result.match(/[a-z]|[а-я]/g);
    result.sort();
    console.log(result);


}
var obj = {};
function Count(){
    for(var i=0; result.length<i;i++){
        var key = result[i];
        obj[key] = 0;
        while(result[i]==result[i+1]){
            obj[key]+=1;}
    }
    console.log(obj);
}
Lucas();
Count();
