class Department {
  // private readonly id: string; // こちらにreadonlyをつけても良い
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) { // 初期化後に値を変えたくない場合、readonlyを用いる
  }

  describe() { // methods
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

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.name = 'NEW NAME'

accounting.describe();
accounting.printEmployeeInformation();