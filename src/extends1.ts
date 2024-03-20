class Department {
  private employees: string[] = [];
  constructor(private id: string, public name: string) {
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department { // 継承: extendsというキーワードの後ろに継承したいclass名を記載(継承は一つのクラスしかできない)

}

// const accounting = new Department('d1', 'Accounting');
const accounting = new ITDepartment('d1', 'Accounting'); // このようにITDepartmentをインスタンス化すると
// class ITDepartment extends Department内に記述がなくても下記のようにDepartmentクラスを呼び出すことができる。
accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.name = 'NEW NAME'

accounting.describe();
accounting.printEmployeeInformation();