function order(words){
  //make string array
  var makeArray = words.split("");
  var wordsArray = [];
  var finalArray = [];
  console.log(makeArray);
  //find word
  for(var i = 0; i < makeArray.length; i++){
    if(makeArray[i] != " "){
      wordsArray.push(makeArray[i]);
      //console.log(makeArray);
    }
    else{
      for(var i = 0; i < wordsArray.length; i++){
        console.log(!(isNaN(wordsArray[i])));
        //console.log(wordsArray);
      }
        /*if(!(isNaN(wordsArray[i]))){
          var newWord = wordsArray.join("")
          var position = wordsArray[i] - 1;
          finalArray.splice(position, 0, newWord);
          wordsArray = [];
        }*/
        /*if(wordsArray[i] = 1){
          var newWord = wordsArray.join("");
          finalArray.splice(0, 0, newWord);
          wordsArray = [];
        }
        if(wordsArray[i] = 2){
          var newWord = wordsArray.join("");
          finalArray.splice(1, 0, newWord);
          wordsArray = [];
        }
        if(wordsArray[i] = 3){
          var newWord = wordsArray.join("");
          finalArray.splice(2, 0, newWord);
          wordsArray = [];
        }
        if(wordsArray[i] = 4){
          var newWord = wordsArray.join("");
          finalArray.splice(3, 0, newWord);
          wordsArray = [];
        }
        if(wordsArray[i] = 5){
          var newWord = wordsArray.join("");
          finalArray.splice(4, 0, newWord);
          wordsArray = [];
        }
        if(wordsArray[i] = 6){
          var newWord = wordsArray.join("");
          finalArray.splice(5, 0, newWord);
          wordsArray = [];
        }
        if(wordsArray[i] = 7){
          var newWord = wordsArray.join("");
          finalArray.splice(6, 0, newWord);
          wordsArray = [];
        }
        if(wordsArray[i] = 8){
          finalArray.splice(7, 0, (wordsArray.join("")));
          wordsArray = [];
        }
        if(wordsArray[i] = 9){
          finalArray.splice(8, 0, (wordsArray.join("")));
          wordsArray = [];
        }
      }*/
    }
  //console.log(wordsArray);
  //console.log(finalArray);
}
order("Thi1s i2s a4 tes3t")
