function isTriangle(a,b,c){
  /*var counter = 0;
  var arr = [a,b,c];
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      if(i != j){
        console.log(arr[i]);
        console.log(arr[j]);
        counter = arr[i] + arr[j]

      for(var x = 0; x < 3; x++){
        if((arr[i] != arr[x]) && (arr[j] != arr[x])){
          if(counter <= arr[x]){
            console.log(counter);
            console.log(arr[x]);
            console.log(false);
            return false;
          }
        }
      }
    }
    }
  }
    console.log(true);
   return true;*/

   //does the same thing
   [a, b, c] = [a, b, c].sort((x, y) => x-y);
   var thing = a+b > c;
   //a + b > c && a + c > b && c + b > a;
   console.log(thing);
}
isTriangle(1, 2, 3);
