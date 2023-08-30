class Person {
    constructor(name, age) {
        this.gender = "남";
        this._publishNumber = 3;
        this.name = name;
        this.age = age;
    }
}
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p2 = new Person2("홍길동", 55);
console.log("name", p2.name);
console.log("age", p2.age);
