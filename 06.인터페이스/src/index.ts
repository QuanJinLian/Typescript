// interface User {
//     name: string
//     age: number
//     sayHello(): void
// }

// type User = {
//     name: string
//     age: number
//     sayHello: () => void
// }

// let u: User = {
//     name: "sdfds",
//     age: 33,
//     sayHello() {
//         console.log("asfadasfaf");
//     }
// }

// type Condition = (n: number) => boolean

interface Condition {
  (n: number): boolean;
}

// function sum(numbers: number[], callBack: Condition) {
//   let s = 0;
//   numbers.forEach((n) => {
//     if (callBack(n)) {
//       s += n;
//     }
//   });
//   return s;
// }

// const result = sum([3, 4, 5, 7, 11], (n) => n % 2 !== 0);
// console.log(result);

// interface A {
//   T1: string;
// }

// interface B {
//   T2: number;
// }

// interface C extends A, B {
//   T3: boolean;
// }

// type A = {
//   T1: number;
// };

// type B = {
//   T2: number;
// };

// type C = A &
//   B & {
//     T1: string;
//     T3: boolean;
//   };

// let u: C = {
//   T2: 33,
//   T1: "ii",
//   T3: true,
// };

// type Person = {
//   getPermission: (id: string) => string;
// };

// type Staff = Person & {
//   getPermission: (id: string[]) => string[];
// };

// const AdminStaff: Staff = {
//   getPermission: (id: string | string[]) => {
//     return (typeof id === "string" ? "admin" : ["admin"]) as string[] & string;
//   },
// };

// let arr: readonly number[] = [3, 4, 6];
// // arr = [3, 4, 6, 7]; // 가능
// // arr[0] = 9; // 불가능
// // arr.splice(1); // 불가능

// const arr: ReadonlyArray<number> = [3, 4, 6];

// type User = {
//   readonly id: string;
//   name: string;
//   age: number;
//   readonly arr: readonly string[];
// };

// let u: User = {
//   id: "123",
//   name: "Asdf",
//   age: 33,
//   arr: ["Sdf", "dfgdfg"],
// };

// u.id = "sfdjlsdjfl"; // Cannot assign to 'id' because it is a read-only property.ts(2540)

// interface Duck {
//   sound: "꽥꽥";
//   swin(): void;
// }

// let person = {
//   name: "오리인척하는 인간",
//   age: 11,
//   sound: "꽥꽥" as "꽥꽥",
//   swin() {
//     console.log(this.name + "수영중， 그리고" + this.sound + " 소리를 내였다");
//   },
// };

// let duck1: Duck = person; // 할당 가능

// let duck2: Duck = {
//   name: "오리인척하는 인간",
//   age: 11,
//   sound: "꽥꽥" as "꽥꽥",
//   swin() {
//     console.log(this.name + "수영중， 그리고" + this.sound + " 소리를 내였다");
//   },
// };

// let duck: Duck = {
//     sound: "꽥꽥" as "꽥꽥",
//     swin() {
//         console.log(this.name + "수영중， 그리고" + this.sound + " 소리를 내였다");
//     }
// };

// interface User {
//     name?: string
//     age: number
// }

// interface Condition {
//     (n: number, i: number): boolean
// }

// function sum(numbers: number[], callBack: Condition) {
//     let s = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const n = numbers[i];
//         if (callBack(n, i)) {
//             s += n;
//         }
//     }
//     return s;
// }

// const result = sum([3, 4, 5, 7, 11], n => n % 2 !== 0);
// console.log(result);

//(value: number, index: number, array: number[]) => void

[34, 4].forEach((it) => console.log(it));


 