function array_diff(a, b) {
console.log(a);
console.log(b);

//check to see if b = a
  function loop(thing){
    for(var i = 0; i < b.length; i++){
      if(b[i] == thing){
        return true;
      }
    }
  }

  for(var i = a.length-1; i >= 0; i--){
    if(loop(a[i])){
      a.splice(i, 1);
    }
  }
  console.log(a);
}

array_diff([1, 2, 3, 3, 4], [2])
