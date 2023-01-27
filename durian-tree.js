const Employee = require('./Employee.class');

const ada = new Employee("Ada", "CEO", 3000000.00);

const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const karla = new Employee("Karla", "Retail", 1000000);
const chandler = new Employee("Chandler", "Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const florida = new Employee("Florida", "Marketing", 1000000);
const david = new Employee("David", "Marketing", 1000000);
const emma = new Employee("Emma", "Marketing", 1000000);
const jeremy = new Employee("Jeremy", "Marketing", 1000000);
const brian = new Employee("Brian", "Marketing", 1000000);
const simone = new Employee("Simone", "Software", 1000000);
const ali = new Employee("Ali", "Software", 1000000);
const sarah = new Employee("Sarah", "Software", 1000000);
const andrew = new Employee("Andrew", "Software", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
craig.addSubordinate(simone);
craig.addSubordinate(ali);
ali.addSubordinate(sarah);
ali.addSubordinate(andrew);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);
david.addSubordinate(emma);
david.addSubordinate(jeremy);
angela.addSubordinate(karla);
karla.addSubordinate(chandler);

console.log(ada.totalEmployeesUnder);
