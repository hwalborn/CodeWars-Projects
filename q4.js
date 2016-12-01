function crazy_nums(number){
  var arr = [];
  for(var i = 0; i < number; i++){
    if(((i % 3) == 0) && ((i % 15) != 0)){
      arr.push(i);
    }
    else if(((i % 5) == 0) && ((i % 15) != 0)){
      arr.push(i);
    }
  }
  return arr;
}
crazy_nums(10);
