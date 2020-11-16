const jsonString=`
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const data=JSON.parse(jsonString);
const studentList=data.list;
let result=[];
studentList.forEach(studentObject=>{
  const student={
    name: studentObject.name,
    age: studentObject.age,
    prof: studentObject.prof,
  };
  result.push(student);
});
console.log(result);