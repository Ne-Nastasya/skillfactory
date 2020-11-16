const product = {
  id: 1,
  collection: 'summer',
}
const clothes = Object.create(product);
  clothes.model = 'dress';
  clothes.color = 'mahogany';
  clothes.material = 'silk';
  clothes.size = 'S';
    
const showKeys = function (obj){
  for (let key in obj){
    if (obj.hasOwnProperty(key)){
      console.log(key, obj[key]);
    }
  }
}

showKeys(clothes);