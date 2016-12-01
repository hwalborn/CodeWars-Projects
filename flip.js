function spinWords(str){
  //make string array
  var makeArray = str.split("");
  var word = [];
  var wordArray = [];
  var test = [];
  var letterCount = 0;

  /*//compare string
  function compare(thing){
    for(var i = 0; i < makeArray.length; i++){
      if(thing == " "){
        return false;
      }
      else{
        return true;
      }
    }
  }*/

  //find lengths of words make 2d array with length and position
  function findWords(stuff){
    for(var i = 0; i < stuff.length; i++){
      if(stuff[i] !== " "){
        letterCount += 1;

      }
      else{
        wordArray.push([letterCount, (i-letterCount)]);
        letterCount = 0;
      }
    }
    wordArray.push([letterCount, (i-letterCount)]);
  }

  //access words
  function access(thing){
    for(i = 0; i < thing.length; i++){
      return thing[i];
    }
  }

  //flip 5 digit words
  function flipWords(thing){
    for(var i = 0; i < thing.length; i++){
      if(thing[i][0] >= 5){
        var position = thing[i][1];
        var length1 = thing[i][0];
        //add word to word array backworkds
        for(var i = position; i < length1.length; i++){
          word.unshift(makeArray[i]);
        }
        makeArray.splice(position, length1, access(word));
      }
      word = [];
    }
  }

  /*//remove spaces
  function findSpace(stuff){
    for(var i = 0; i < makeArray.length; i++){
      if(stuff[i] !== " "){
        word.unshift(stuff[i]);
      }
    }
  }
  findSpace(str);*/

  findWords(str);
  flipWords(wordArray);
  console.log(str);
  //console.log(makeArray);
  //console.log(wordLeng);
  console.log(test);
  console.log(wordArray);
  console.log(makeArray);
}

spinWords("This is a test better put in some longer wordthings")
