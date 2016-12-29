function order(words){
  var arr = words.split(" ");
  var newArr = words.split(" ");
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(!(isNaN(arr[i][j]))){
        newArr.splice((arr[i][j]-1), 1, arr[i]);
      }
    }
  }
  newArr = newArr.join(" ");
  return newArr;
}
order("4of Fo1r pe6ople g3ood th5e the2")
