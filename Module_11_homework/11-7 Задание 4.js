let counter = 0;
const showItem = function (firstNumber, secondNumber){
  let min = Math.min (firstNumber, secondNumber);
  let max = Math.max (firstNumber, secondNumber);
    if (max >= min + counter){
    console.log(min + counter);
    counter = counter + 1;
    } else {
      console.log('stop');
      clearInterval(intervalId);
    }
}

const intervalId = setInterval(showItem, 1000, 0, 6);