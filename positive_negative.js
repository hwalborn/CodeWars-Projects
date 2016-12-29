function countPositivesSumNegatives(input) {
  if((input == null) || (input.length == 0)){
    var final = [];
  }
  else{
  var counter = 0;
  var sum = 0;
  for(var i = 0; i < input.length; i++){
    if(input[i] > 0 ){
      counter++;
    }
    else{
      sum += input[i];
    }
  }
  var final = [counter, sum];
}
return final;
}

console.log(countPositivesSumNegatives([]));
