function danspower(num, power) {
// code here now!
var finalNum = 1;
//find power
for(var i = 0; i < power; i++){
  finalNum *= num;
}

//round if number is odd
if((finalNum % 2) !== 0){
  finalNum /= 10;
  var temp = finalNum - (Math.floor(finalNum));
  if(temp < 0.5){
    temp *= 10;
    finalNum = (finalNum * 10) - temp;
  }
  else{
    temp *= 10;
    finalNum = (finalNum * 10) + (10 - temp);
  }
}
  return finalNum;
}

danspower(9, 2);
