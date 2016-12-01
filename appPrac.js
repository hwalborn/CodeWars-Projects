function lucky_sevens(number){
  var ph = 0;
  for(var i = 1; i < number.length; i++){
    ph = number[i] + number[(i-1)] + number[(i+1)];
    if(ph == 7){
      console.log(ph);
    }
  }
}

lucky_sevens([1,2,4,8])
