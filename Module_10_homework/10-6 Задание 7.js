let myArr=[1,2, 4, 8, null,6,3, 'hghg',0];
const resNumb = function amountNumb (arr){
  return arr.filter(item => (item !== 0 && item === +item));
  
}
console.log(resNumb(myArr).filter(item=> item%2===0).length);
console.log(resNumb(myArr).filter(item=> item%2!==0).length);
myArr.forEach(function(item, index){
  if(item === 0) {
    console.log('Нулевой элемент №' + index)
  }
});

// Не совсем верно поняли задание. Нулевые элементы нужно было считать точно так же, как четные и нечетные и выводить в консоль их количество. Кроме того, задание выполнено не оптимально. В вашем варианте решения массив перебирается 4 раза, это избыточное использование ресурсов. Для подсчета четных, нечетных чисел и нулей достаточно один раз перебрать массив (в данном случае лучше всего подойдет обычный цикл или же метод forEach) и с помощью условных циклов отсеять и подсчитать нужные значения.
// Ниже написала правильный вариант решения

let even = 0, odd = 0, zero = 0;

myArr.forEach(item => {
  if (typeof item === 'number' && !isNaN(item)) {
    if (item === 0) {
      zero++;
    } else if (item % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
})

console.log(`Четных элементов - ${even}`);
console.log(`Нечетных элементов - ${odd}`);
console.log(`Нулей - ${zero}`);