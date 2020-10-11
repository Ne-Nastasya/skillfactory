/*не знаю, что имелось в виду под формулировкой "произвольный массив", поэтому генерирую массив рандомной длины в заданном диапазоне и с рандомными элементами в заданном диапазоне*/
function getRandomIntInclusive (min, max) {
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max-min+1))+min;
}
const arr=[];
for (i=0; i<=getRandomIntInclusive(10, 20); i=i+1){
 arr[i]=getRandomIntInclusive(0, 100);
 console.log(`Элемент массива №${i}`, arr[i]);
}
/*console.log(arr); — не совсем поняла, как именно нужно по задаче вывести элементы массива, поэтому вывела все супер-отдельно прямо в цикле, но можно и просто одним разом за циклом это сделать*/
console.log(`Количество элементов массива: ${arr.length}`);