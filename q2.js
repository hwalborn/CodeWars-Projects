function crazy_sum(number){
  var total = 0;
  for(var i = 0; i < number.length; i++){
    total += (number[i] * i);
  }
  console.log(total);
}
crazy_sum([2,3,5,2])
