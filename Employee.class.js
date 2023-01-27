class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }
    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
  employeesThatMakeOver(amount) {
    let employees = []; // 1
    if (this.salary > amount) {
      employees.push(this); // 2
    }
    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }
    return employees;
  }

  get totalEmployeesUnder() {
    let totalEmployees = 0; // 1
    if (this.subordinates.length) {
      totalEmployees += this.subordinates.length; // = totalEmployees + 1;
    }
    // Use depth first traversal to calculate the total employees
    for (const subordinate of this.subordinates) {

      const subordinatesUnder = subordinate.totalEmployeesUnder;
      totalEmployees += subordinatesUnder;
      console.log('totalEmployees:', totalEmployees);
    }
    return totalEmployees;
  }
}

module.exports = Employee;