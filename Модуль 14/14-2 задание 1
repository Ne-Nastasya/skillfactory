const parser=new DOMParser();
const xmlString=`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDOM=parser.parseFromString(xmlString, "text/xml");
const listNode1=xmlDOM.querySelectorAll("student");
let result=[];
listNode1.forEach(studentNode=>{
  const student={ name: studentNode.querySelector("first").textContent+' '+studentNode.querySelector("second").textContent,
                 age: studentNode.querySelector("age").textContent, 
                 prof: studentNode.querySelector("prof").textContent, 
                 lang: studentNode.querySelector("name").getAttribute('lang'),
                };
  result.push(student);
});
console.log(result);