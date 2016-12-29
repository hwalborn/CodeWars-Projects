function whoIsNext(names, r){
  //your code here
  if(r < names.length){
    return names[r-1];
}
else{
return names[r % names.length];
}
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 5));
