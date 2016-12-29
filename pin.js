function validatePIN (pin) {
  if(((pin.length == 4) || (pin.length == 6)) && ((!(isNaN(pin))) && ((Math.floor(pin)) == pin))){
    return true;
  }
  else{
    return false;
  }
}
console.log(Math.floor(.234));
