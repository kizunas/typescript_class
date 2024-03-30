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
  readonly name: string;
}

interface Greetable {
  greet(phrase: string): void;
}


class Person implements Greetable, Named { // 二つのインスタンスを実装
 name: string;
 age = 30;
 constructor(n: string) {
  this.name = n;
 }

 greet(phrase: string) {
  console.log(phrase + ' ' + this.name); 
 }

 
}
let user1: Greetable
user1 = new Person('Max');

user1.greet('Hello I am');