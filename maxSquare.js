function square_nums(number){
  var total = 1;
  for(var i = 0; i < number; i++){
    for(var j = 0; j < i; j++){
      if((j * j) == i){
        total += 1;
      }
    }
  }
  return total;
}

square_nums(10)
