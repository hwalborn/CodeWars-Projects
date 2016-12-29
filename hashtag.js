function generateHashtag (str) {
  if((str.length == 0) || (str.length > 140)){
    return false;
  }
  else{
    var arr = str.split("");
    var spaces = [];
    arr.splice(0, 1, arr[0].toUpperCase());
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == " "){
        if(i != arr.length-1){
          arr.splice(i+1, 1, arr[(i+1)].toUpperCase());
        }
        spaces.push(i);
      }
    }
    for(var i = (spaces.length - 1); i >= 0; i--){
      arr.splice(spaces[i], 1);
    }
    var newStr = arr.join("");
  }
  return "#" + newStr;
}

console.log(generateHashtag(" Codewars      "));
