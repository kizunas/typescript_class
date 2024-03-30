interface Named {
  readonly name: string;
}

// extendsを使うことでGreetableとNamedという二つのインターフェースを持たせられる。
// クラスのextends(継承)ではできないかったが、interfaceではコンマ区切って二つ以上のインターフェースをextendsできる。
// Greetableのインターフェースを実装するとgreetというメソッドとNamedのインターフェースを実装していなければならない。
interface Greetable extends Named {
  greet(phrase: string): void;
}


class Person implements Greetable {
 name: string
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