const fs = require('fs');
const xmlJs = require('xml-js');

var employees = [] ;

employees.push({
    id : 1 ,
    name : 'Ilyass',
    salary : 10000
});
employees.push({
    id : 2 ,
    name : 'Mohammed',
    salary : 9000
});
employees.push({
    id : 3 ,
    name : 'Ali',
    salary : 15000
});

var employeeList = {employee: employees}

var jsonData = JSON.stringify(employees);
var options = {compact : true , spaces : 0}
var xmlData ="<root>\n"+xmlJs.js2xml(employeeList,options)+"\n<\/root>";
console.log(jsonData);
fs.writeFileSync('data.json',jsonData);
fs.writeFileSync('data.xml',xmlData);