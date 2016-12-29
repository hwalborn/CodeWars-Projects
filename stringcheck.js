function isMerge(s, part1, part2) {
console.log("s is: " + s + " part 1 is: " + part1 + " part 2 is: " + part2);
if(arguments.length != 3){
  return false;
}
  var sArr = s.split("");
  function loopPart (str){
    for(var i = 0; i < str.length; i++){
      var index = sArr.indexOf(str[i], oldI);
      if(index != -1){
        sArr.splice(index, 1);
        var oldI = index;
      }
    }
  }
  loopPart(part1);
  console.log(sArr);
  loopPart(part2);
  if(sArr.length == 0){
    return true
  }
  else{
  return false;
}
}

console.log(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'));
