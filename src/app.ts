//頭文字を大文字にする。名前は任意
// class Department {
//   name: string; // キーの名前を定義しているだけ。イコールで初期値を設定できる。

//   constructor(n: string) {
//     this.name = n;
//   }

//   describe() { // methods
//     console.log('Department: ' + this.name); // thisが必要な点に注意
    
//   }
// }

// const accounting = new Department('Accounting'); // この初期化の処理のときのみconstructorが呼ばれる。
// console.log(accounting);
// 出力では　name: 'Accounting'と出力される。

// accounting.describe(); // クラス内のdescribeメソッドを呼び出している。
// 出力では　name: 'Department: Accounting'と出力される。


class Department {
  name: string; // キーの名前を定義しているだけ。イコールで初期値を設定できる。

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) { // methods
    console.log('Department: ' + this.name); // thisが必要な点に注意
    
  }
}

const accounting = new Department('Accounting');

accounting.describe();

const accountingCopy = { describe: accounting.describe };
// describeキーはaccounting.describe()のdescribeを指している。
// そしてaccounting.describeは()がないのでただのダミーである。関数の実行結果を渡していない

accountingCopy.describe(); 
// Department: undefinedが表示される。
// **thisは基本的にその関数を呼び出す責任のあるオブジェクトを指す。
// すなわち今回はaccountingCopy.describe()のaccountingCopyを示す
// accountingCopyはnameプロパティを持っていないのでundefinedとなる。

// このエラーを解消するためにclass内のdiscribe関数の引数にthisを記述する。
// これはTypeScriptが理解する特別なパラメーターとなる。
// なのでthisと記述しても引数を渡す必要はない
// thisが何を参照すべきかをヒントとして渡すためのもの
// 重要なのは型を渡すこと。今回はDepartmentを渡す
// Departmentクラスをベースにしたインスタンスを参照するという意味
// このままだとaccountingCopyのdescribeにエラーが出る。
// 理由はDepartmentクラスのname: stringという形にaccountingCopyが対応していないため
// したがってaccountingCopyオブジェクトにname: stringの形の引数が必要。
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// これでエラーがなくなり、コンソールにDepartment: DUMMYが表示される。