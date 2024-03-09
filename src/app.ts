//頭文字を大文字にする。名前は任意
class Department {
  name: string; // キーの名前を定義しているだけ。イコールで初期値を設定できる。

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department('Accounting'); // この初期化の処理のときのみconstructorが呼ばれる。
console.log(accounting);
// 出力では　name: 'Accounting'と出力される。