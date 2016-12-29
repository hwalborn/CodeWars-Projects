function towerBuilder(nFloors) {
  // build here
  counter = nFloors - 1;
  var arr = [];
  var string = "*";
  function findSpace(number){
    var space = "";
    for(var i = 0; i < number; i++){
      space = space + " ";
    }
    return space;
  }
  for(var i = nFloors; i > 0; i--){
    var nSpace = findSpace(counter);
      arr.push(nSpace + string + nSpace);
    string = string + "**";
    counter--;
  }
  return arr;
}

console.log(towerBuilder(20));
