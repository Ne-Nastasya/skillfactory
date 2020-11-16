const product = {
  id: 1,
  collection: 'summer',
}
const clothes = Object.create(product);
  clothes.model = 'dress';
  clothes.color = 'mahogany';
  clothes.material = 'silk';
  clothes.size = 'S';
    
const isObjectProperty = function (obj, str){
  return str in obj;
}

console.log(isObjectProperty(clothes, 'size'));