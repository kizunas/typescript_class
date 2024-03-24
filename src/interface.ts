// interfaceというキーワードはtypescriptにしか存在しない
// objectがどのような形であるかを定義するためのもの
// オリジナルの型を定義するもの
// interfaceはオブジェクトだけ。typeは他にも定義が可能である。
interface Greetable {
  readonly name: string; // public, privateは使えない。readonlyにより初期化の時に一度だけ実行される。
  // カスタム型(Type)でもreadonlyは使える。

  greet(phrase: string): void;
}

// Greetableというインターフェースに従って実装されるということを伝える(これをインターっフェースを実装するという)
class Person implements Greetable { // 一つのクラスには複数のインターフェースを実装できる（継承との違い）。カンマ(,)でつなげてインターフェースを記述すればよい
 name: string;
 age = 30;
 constructor(n: string) {
  this.name = n;
 }

 greet(phrase: string) {
  console.log(phrase + ' ' + this.name); 
 }

 // インターフェース以外の項目を追加することも可能。
}
let user1: Greetable // インターフェースは型として利用することが可能

user1 = new Person('Max'); // PersonクラスはGreetableのインターフェースを実装しているため。

user1.greet('Hello I am');