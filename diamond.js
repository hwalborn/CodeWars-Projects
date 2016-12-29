function diamond(n){
  var counter = 1;
  var diam = "";
  if(((n % 2) == 0) || n < 0){
    return null;
  }
  else if(n == 1){
  }
  else{
    for(var i = 0; i < n; i++){
      diam = diam + "*";
    }
      diam = diam + "\n";
    function findAss(number){
      var ph = ""
      for(var i = 0; i < counter; i++){
        ph = ph + " ";
      }
      for(var i = 0; i < number; i++){
        ph = ph + "*";
      }
      return (ph + "\n");
    }
    for(var i = n - 2; i >= 0; i -= 2){
      var thing = findAss(i);
      diam = thing + diam + thing;
      counter++;
    }
  }
return diam
}
console.log(diamond(21));
