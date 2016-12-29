function arithmetic(a, b, operator){
  switch(operator[0].toUpperCase()){
    case "A":
      return a + b;
      break;
    case "S":
      return a - b;
      break;
    case "M":
      return a * b;
      break;
    case "D":
      return a / b;
      break;
    default:
      console.log("That is not a correct input");
  }
}

console.log(arithmetic(5, 2, "add"));
