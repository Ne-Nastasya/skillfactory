//Задание 2 юнит 10.3
let x='';
if (typeof x==="boolean"){
  alert ("Х — относится к логическому типу")
} else {
  if (typeof x==="string"){
    alert ("Х — строка")
  } else {
    if (typeof x==="number"){
      alert ("Х — число")
    } else {
      alert ("Тип Х не определен")
    }
  }
}