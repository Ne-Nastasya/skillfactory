const getTaskFitMsg = function (number){
  if (number >= 1000){
    return 'Это неподходящее число';
  }
  return isPrimeNumber(number) ? 'Это простое число' : 'Это число не является простым';
}

const isPrimeNumber = function (anyNumber){
  if (anyNumber < 2) {
    return false;
  }
  
  if ([2, 3].includes(anyNumber)){
    return true;
  }
  
  return squareMethod(anyNumber);
}

const squareMethod = function (anyNumber){
  let sqRoot = Math.floor(Math.sqrt(anyNumber));
  let isPrime = true;
  for (let i = 2; i <= sqRoot; i++) {
    if (anyNumber%i === 0) {
      isPrime = false; 
    }
  }
  
  return isPrime;
}

console.log(getTaskFitMsg(10));