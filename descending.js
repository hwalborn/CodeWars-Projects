function descendingOrder(n){
console.log(n);
//make array of number
var newArray = [];
while(n > 0){
  var temp = n%10;
  newArray.push(temp);
  n = Math.floor(n /= 10);
}


var finalArray = [];
//make new Array
  function compare(thing){
    if(finalArray.length == 0){
      finalArray.push(thing);
    }
    else{
    for(var i = 0; i < finalArray.length; i++){
      if(thing >= finalArray[i]){
        finalArray.splice(i,0, thing);
        break;
      }
      if(thing < finalArray[finalArray.length - 1]){
        finalArray.push(thing);
        break;
      }
    }
  }
  }

  //Cycle through number
  function cycle(){
    for(var i = 0; i < newArray.length; i++){
      compare(newArray[i]);
    }
  }
  cycle();
  var int = 0;
  for(var i = 0; i < finalArray.length; i++){
    int = (int * 10) + finalArray[i];
  }
  return int;
}
descendingOrder()
