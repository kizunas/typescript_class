class Department {
  name: string; // defaultでpublicが当てられるので記述しなくても良い。クラス外部から変更できる。
  private employees: string[] = []; // privateをつけるとクラスと外から変更ができない。すなわちクラス内からの変更のみを許可

  constructor(n: string) {
    this.name = n;
  }

  describe() { // methods
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe();
accounting.printEmployeeInformation();