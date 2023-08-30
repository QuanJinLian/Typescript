class Person {
  name: string;
  age: number;
  gender: "남" | "여" = "남";
  pid?: string;
  private _publishNumber: number = 3;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Person2 {
  age: number;

  constructor(public name: string, age: number) {
    this.age = age;
  }
}

const p2 = new Person2("홍길동", 55);
console.log("name", p2.name);
console.log("age", p2.age);
