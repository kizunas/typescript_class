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
  admins: string[]
  constructor(id: string, admins: string[]) { // adminsはITDepartment class特有のものなのでsuperに宣言しなくて良い
    super(id, 'IT'); // constructorの情報をベースに渡す必要があるためsuperを記述する
    this.admins = admins // superより後に書く必要がある。
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
}

// const accounting = new Department('d1', 'Accounting');
const it = new ITDepartment('d1', ['Max']); // このようにITDepartmentをインスタンス化すると
// class ITDepartment extends Department内に記述がなくても下記のようにDepartmentクラスを呼び出すことができる。
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

