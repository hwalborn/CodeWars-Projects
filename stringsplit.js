function solution(str){
  var arr = [];
     if((str.length % 2) == 0){
        for(var i = 0; i < str.length; i += 2){
          arr.push(str[i] + str[(i+1)]);
        }
      }
     else{
       for(var i = 0; i < (str.length - 1); i += 2){
         arr.push(str[i] + str[(i+1)]);
       }
       arr.push(str[(str.length - 1)] + "_");
     }
  return arr;
}

console.log(solution("abc"));
