function oddball(number){
  var total = 0;
  for(var i = 0; i < number.length; i++){
    if((number[i] % 2) !== 0){
      total += number[i];
    }
  }
  console.log(total);
}
oddball([1,2,3,4,5])
