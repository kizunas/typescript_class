class Department {
  // name: string; // defaultでpublicが当てられるので記述しなくても良い。クラス外部から変更できる。
  private employees: string[] = []; // privateをつけるとクラスと外から変更ができない。すなわちクラス内からの変更のみを許可
  // private id: string;
  constructor(private id: string, public name: string) { // この記述ではpublicは省略できない。また、引数とプロパティの名前を一致させる必要がる。nではなくnameのように。
    // this.id = id // このように毎回宣言するのは大変なので上記のようにきじゅつできる。
    // this.name = n;
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

const accounting = new Department('d1', 'Accounting'); // constructorでidが追加されたのでidを渡そう

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.name = 'NEW NAME'

accounting.describe();
accounting.printEmployeeInformation();