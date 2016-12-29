function difference(a, b) {
for(var i = 0; i < a.length; i ++){
  for(var j = 0; j < b.length; j++){
    if(a[i] == b[j]){
      a.splice(i, 1);
    }
  }
}
return a;
}

console.log(difference([1, 2, 3, 3, 4], [2, 3]));
