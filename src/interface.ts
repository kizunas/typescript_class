// interfaceというキーワードはtypescriptにしか存在しない
// objectがどのような形であるかを定義するためのもの
// オリジナルの型を定義するもの
interface Person {
  name: string; // 具体的な値やdefault値などを設定することはできない。
  age: number;

  greet(phrase: string): void;
}

let user1: Person // Personという型を適用することができる

user1 = { // user1はオブジェクトでなければならない。
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

user1.greet('Hello I am')