function disemvowel(str) {
//vowel array
var vowels = ['A','a','E','e','I','i','O','o','U','u'];
console.log(str);

//compare vowels and element
function compare(thing){
  for(var i = 0; i < vowels.length; i++){
    if(vowels[i] == thing){
      return true;
    }
  }
}

//make string array
var makeArray = str.split("");

//remove vowels
for(var i = makeArray.length-1; i >=0; i--){
  if(compare(makeArray[i])){
    //console.log(makeArray[i]);
    makeArray.splice(i, 1);
  }
}

//console.log(makeArray);

//make array string
var newStr = makeArray.join("");
//console.log(newStr);

  return newStr;
}
disemvowel("Let's try it with some other words, huh aaeeiioouu?");
