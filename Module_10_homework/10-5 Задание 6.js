myArr=[1,1,1,1];
let res = false;
myArr.forEach((item, index, array) => {
  if (item !== array[0]) res = true;
 });
console.log(!res);