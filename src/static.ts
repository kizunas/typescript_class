class Department {
  static fiscalYear = 2020;

  protected employees: string[] = []; // privateをprotectedに変えると継承からオーバーライド可能になる。

  static createEmployee(name: string) { // staticを使うとインスタンス化せずに使えるようになる。
    return {name: name}
  }

  constructor(private id: string, public name: string) {
    // console.log(this.fiscalYear) // エラーになる。this（インスタンスを示すから）を使ってstaticプロパティへアクセスはできない。
    // もしアクセスしたい場合は、console.log(Department.fiscalYear)とする必要がある。
    // つまりstaticはインスタンスと切り離されているため
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
  private lastReport: string;

  get mostRecentReport() { // getterを使うことによって外部からlastReportにアクセスできるようにする
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません。');
  }

  set mostRecentReport(value: string) { // addReportを呼び出す際に処理を入れることができる。
    if (!value) {
      throw new Error('正しい値を設定してください。');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

const employee1 = Department.createEmployee('Max'); // インスタンス化せずにcreateEmployeeを呼び出している。
console.log(employee1); // name: Maxとコンソールログに表示される。
console.log(Department.fiscalYear);


const it = new ITDepartment('d1', ['Max']);

// Math.PI // MathはJavaScriptが用意している数学の様式。PIは円周率を表す。
//  Math.pow() // これはべき乗を表す

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

// accounting.mostRecentReport = ''; // setは値を代入する方法で呼び出す。setのif文によってエラーが表示される。
accounting.mostRecentReport = '通期会計レポート';

// addReportに値がないのでthrow new Errorが返される
// console.log(accounting.mostRecentReport); // getを呼び出すときはmostRecentReportの後ろに()はいらない。

accounting.addReport('Something')

console.log(accounting.mostRecentReport); // Somethingが表示される(get)。

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInformation()