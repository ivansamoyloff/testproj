var result;
 result = prompt('Enter the string');
function Lucas() {
    result = result.toLowerCase();
    result = result.match(/[a-z]|[а-я]/g);
    result.sort();
    console.log(result);


}
var obj = {};
function Count(){
    for(var i=0;i<result.length;i++) {
        var key = result[i];
        if(obj[key]==undefined){
            obj[key]=0;
            obj[key]+=1;
        } else {
            obj[key]+=1;
        }
    }
    console.log(obj);
}
Lucas();
Count();
