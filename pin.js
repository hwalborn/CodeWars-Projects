function validatePIN (pin) {
  if(((pin.length == 4) || (pin.length == 6)) && !(isNaN(pin))){
    return true;
  }
  else{
    return false;
  }
  console.log
}
