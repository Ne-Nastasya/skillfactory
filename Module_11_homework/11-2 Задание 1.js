let myArr=[1,2, 4, 8, null,6,3, 'hghg',0, 'djkhj', 4, undefined];
const evenOddCounter = function (arr){
  let even = 0, odd = 0, zero = 0;
  arr.forEach(function(item){
    if (typeof item === 'number' && !isNaN(item)) {
      if (item === 0) {
        zero++;
      } else if (item % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  }); 
  
  console.log(`Четных - ${even}, нечетных - ${odd}, нулей - ${zero}`);
}
evenOddCounter(myArr);

// По заданию нулевые элементы нужно было посчитать, так же, как четные и нечетные. Вместо 4-х прохождений по массиву (метод forEach и 3 раза метод filter), можно обойтись только одним. Для отсеивания нужных значений лучше использовать условные операторы if, метод filter как правило применяется для более сложных операций. Исправила на более правильный вариант