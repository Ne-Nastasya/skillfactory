const NewObject = function (p1, p2){
 this.p1 = p1;
 this.p2 = p2;
}
const emptyObject = Object.create(null);
console.log (emptyObject);

// Задание выполнено не верно, т.к. нужно было создать объект без прототипа, а при создании объекта через new в качестве скрытого прототипа добавляется специальный объект-обертка Object. Чтобы этого не произошло, нужно создавать объект с помощью Object.create(prototype) и вместо прототипа явно передавать null. Выше исправила