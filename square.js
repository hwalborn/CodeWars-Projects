function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  var root = Math.sqrt(sq);
  if(root % 1 != 0){
    return -1;
  }
  else{
  return Math.pow((root+1), 2);
}
}
