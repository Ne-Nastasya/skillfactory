const firstFunction = function (firstNumber){
  return function(secondNumber){
    return firstNumber + secondNumber;
  }
}
console.log(firstFunction(2)(3));