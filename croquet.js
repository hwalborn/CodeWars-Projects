function openOrSenior(data){
  var category = [];
  for(var i = 0; i < data.length; i++){
    //console.log(data[i][1]);
    if((data[i][0] >= 55) && (data[i][1] > 7)){
      category.push("Senior");
    }
    else{
      category.push("Open");
    }
  }
  return category;
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])
