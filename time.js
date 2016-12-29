function formatDuration (seconds) {
  console.log(seconds);
  console.log((seconds % 31535000)/86400);
  var year = Math.floor(seconds/31556952 );
  var day = Math.floor((seconds % 31540000)/86400);
  var hour = Math.floor((seconds % 86400)/ 3600);
  var min = Math.floor((seconds % 3600) / 60);
  var sec = Math.floor(seconds % 60);

  //add type
  var addType = function(index, time){
    var type = "";
    if(index == 4){
      type = time.toString() + " second";
    }
    else if(index == 3){
      type = time.toString() + " minute";
    }
    else if(index == 2){
      type = time.toString() + " hour";
    }
    else if(index == 1){
      type = time.toString() + " day";
    }
    else if(index == 0){
      type = time.toString() + " year";
    }
    if(time > 1){
      type = type + "s";
    }
    return type;
  }

  var arr = [year, day, hour, min, sec];
  var newArr = [];

  //add strings to newArr
  for(var i = 0; i < 5; i++){
    if(arr[i] != 0){
      newArr.push(addType(i, arr[i]));
    }
  }

  //make array ready for string
  var addCom = function(){
    newArr.splice((newArr.length - 1), 0, " and ");
    for(var i = (newArr.length - 3); i > 0; i--){
      newArr.splice(i, 0, ", ");
    }
  }

  var length = newArr.length;

  if(length == 0){
    return "now";
  }
  else if(length == 1){
    return newArr[0];
  }
  else if(length == 2){
    return newArr.join(" and ");
  }
  else if (length = 3){
    addCom();
  }
  else if (length = 4){
    addCom();
  }
  else if (length = 5){
    addCom();
  }

  return newArr.join("");
}

console.log(formatDuration(101956166));
