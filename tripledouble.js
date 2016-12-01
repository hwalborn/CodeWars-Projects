function tripledouble(num1, num2) {
  //code me
  console.log(num1, num2);
  //make array of first number
  var newArray1 = [];
  while(num1 > 0){
    var temp = num1%10;
    newArray1.push(temp);
    num1 = Math.floor(num1 /= 10);
  }

  //Make array of second number
  var newArray2 = [];
  while(num2 > 0){
    var temp = num2%10;
    newArray2.push(temp);
    num2 = Math.floor(num2 /= 10);
  }
console.log(newArray1, newArray2);
  //Loop through second array
  function loop(thing){
    for(var i = 0; i < newArray2.length; i++){
        var temp3 = newArray2[(i-1)];
        var temp4 = newArray2[(i+1)];
      if((newArray2[i] == thing) && ((temp3 == thing)||(temp4 == thing))){
        return true;
      }
    }
  }
  //loop through first array
  for(var i = 0; i < newArray1.length; i++){
    var temp = newArray1[(i-1)];
    var temp2 = newArray1[(i+1)];
    if((newArray1[i] == temp) && (newArray1[i] == temp2)){
      if(loop(newArray1[i])){
        console.log(1);
        return 1;
      }
    }
  }
  console.log(0);
  return 0;
}
tripledouble(666789, 12345667)
