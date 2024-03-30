// interfaceは関数の構造を定義するためにも使うことができる（基本的にはfanction型の代わりに使える）。
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string; // このNamedインターフェースを実装したクラスがこのプロパティをもっているかどうかはどちらでも良いとなる。
}

interface Greetable {
  greet(phrase: string): void;
}


class Person implements Greetable, Named { // 二つのインスタンスを実装
 name?: string;
 age = 30;
 constructor(n?: string) {
  if (n) {
    this.name = n;
  } else {
    console.log("Hi");
  }
 }

 greet(phrase: string) { 
  if (this.name) { // オプショナル(?)によりnが存在しないことがあり、this.nameがundefinedになるかもしれないためif文を追加
    console.log(phrase + ' ' + this.name); 
  }
 }

 
}
let user1: Greetable
user1 = new Person();

user1.greet('Hello I am');