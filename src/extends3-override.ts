class Department {
  protected employees: string[] = []; // privateをprotectedに変えると継承からオーバーライド可能になる。
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

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AcountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name) // employeesはDepartment classでprivateになっているため変更できない。
    // 継承しているクラスからベースのクラスの値を変えたい時はprivateではなくprotectedを使う
  }
}

const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max')
it.addEmployee('Manu')

// accounting.name = 'NEW NAME'

it.describe();
it.printEmployeeInformation();

console.log(it);
// id: "d1"
// name: "IT"
// employees: [Max, Manu]
// admins:[Max]
// と出力

const accounting = new AcountingDepartment('d2', [])
accounting.addReport()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInformation()