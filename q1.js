var sum = 0;
function getSum(number){
  for(var i = 0; i < number.length; i++){
    if(isNaN(number[i])){
      getSum(number[i]);
    }
    else{
      sum += number[i];
    }
  }
  return sum;
}
console.log(getSum([[2,3], 3, [5,8,9]]));
