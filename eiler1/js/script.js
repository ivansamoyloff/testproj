var arr = [];
var sum = 0;

for(var i=0;i<1000;i++){
    arr[i]= i+1;
}
for (var  j=0; j<1000; j++){
    if(arr[j]%3===0||arr[j]%5===0){
        sum+= arr[j];
    }
}
console.log(sum);

