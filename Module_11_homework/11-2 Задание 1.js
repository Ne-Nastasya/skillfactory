let myArr=[1,2, 4, 8, null,6,3, 'hghg',0, 'djkhj', 4, undefined];
const evenOddCounter = function (arr){
  let zeroIndexes = [];
  arr.forEach(function(item, index){
    if(item === 0) {
      zeroIndexes.push(index);
    }
  }); 
  
  let filteredArr = arr.filter(item => (item !== 0 && item === +item));
 return {
   evenCount: filteredArr.filter(item=> item%2 === 0).length,
   oddCount: filteredArr.filter(item=> item%2 !== 0).length,
   zeroIndexes: zeroIndexes
 };
}
console.log(evenOddCounter(myArr));
