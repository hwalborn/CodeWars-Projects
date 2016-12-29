function spinWords(string){
  var chunk = string.split(" ");
  for(var i = 0; i < chunk.length; i++){
    if((chunk[i]).length >= 5){
      var spin = chunk[i].split("").reverse();
      spin = spin.join("");
      chunk.splice(i, 1, spin);
    }
  }
  return chunk.join(" ");
}

console.log(spinWords("Welcome"));
