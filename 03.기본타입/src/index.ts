// function isOdd(n: number) {
//     return n % 2 === 0;
// }

import { type } from "os";
import { sum } from "./test";

// let nums: [] = [3, 4, 5]; //Error

// let nums1: number[] = [3, 4, 5];
// nums1 = ["ㄴㄹㄴ"]; //Error

// let nums: Array<number> = [3, 4, 5];

// function printValues(obj: object) {
//     const vals = Object.values(obj)
//     vals.forEach(v => console.log(v));
// }

// printValues({
//     name:"afd",
//     age:33
// })

// let s: string = null;
// let n:string = undefined;

// n.toUpperCase();

// let name: string | undefined;

// let name1: string = undefined; // Error

// let name2: string | undefined = "dd";

// // name2.toUpperCase() //Error

// if (typeof name2 === "string") {
//   name2.toUpperCase();
// }

// function printMenu(){
//     console.log("1. 로그인")
//     console.log("2. 회원가입");
// }

// function throwError(msg: string): never {
//     throw new Error(msg);
// }

// function alwaysDoSomething(): never {
//     while (true) {
//         //...
//     }
// }

// type Method = "GET" | "POST" | "PUT";
// function request(method: Method, url: string) {
//   switch (method) {
//     case "GET":
//       return "GET 완료";
//     case "POST":
//       return "POST 완료";
//     default:
//       const n: never = method;
//       return "default 완료";
//   }
// }

// function log<T>(x: T extends number ? never : T) {}
// log("string");
// log({});
// log(88);

// // 위에 코드 고급지게
// type BanType<T, K> = T extends K ? never : T;
// function log2<T>(x: BanType<T, string>) {}
// log2("string");
// log2({});
// log2(88);

// let gender: "남" | "여";

// gender = "남";

// gender = "woman"; // Error

// let arr: []; //arr영원히 빈배열이여야 함

// arr = []; // 정상
// arr = ["sss"]; // Error

// let user: {
//     name:string
//     age:number
// }

// user = {
//     name:"34",
//     age:33
// }

// let tu: [string, number];

// tu = ["3", 4];
// tu = ["3"]; //Error
// tu = ["3", "st"]; //Error
// tu = ["3", 0, 9]; //Error

// let data:any = "sfdsdf";

// let num: number = data;
// type Gender = "남" | "여";
// type User = {
//   name: string;
//   age: number;
//   gender: Gender;
// };

// let u: User;

// u = {
//   name: "sdfd",
//   gender: "남",
//   age: 34,
// };

// function getUsers(g: Gender): User[] {
//   return [];
// }

// // 요구 사항
// // 함수는 a 와 b 라는 두개의 인자를 받게 되며 둘은 무조건 같은 타입이여야 함.
// // a 와 b가 number일 경우 a*b 리턴하고
// // a 와 b가 string일 경우 문자열 결합을 리턴하는 함수를 선언하라.

// // 함수 선언
// function combine(a: number | string, b: number | string): number | string {
//   if (typeof a === "number" && typeof b === "number") {
//     return a * b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   }
//   throw new Error("a와 b는 같은 타입이여야 합니다.");
// }

// // 함수 사용
// combine("3", 4); // Error 없음
// const result = combine(3, 4); // 타입 추론이 애매함

// // 위와 같이 타입 정의를 하면 예제와 같이 첫번째 두번째 인자가 타입이 다르더라도 TS는 에러를 내지않습니다.
// // 또한 설사 같은 타입을 쓴다고 해도 result는 정확한 타입 추론을 하지 못하는 것을 확인하게 된다.
// // 이러한 결과는 우리가 원하는게 아닙니다.
// // 우리는 첫번째 인자가 넘버 타입이면 두번째 인자가 다른 타입일 경우 에러가 발생하기를 원합니다.

// // 함수의 타입 정의

// /**
//  * a*b 결과 값 리턴
//  * @param a
//  * @param b
//  */
// function combine1(a: number, b: number): number;
// /**
//  * a와 b의 결합 결과 값 리턴
//  * @param a
//  * @param b
//  */
// function combine1(a: string, b: string): string;
// function combine1(a: number | string, b: number | string): number | string {
//   if (typeof a === "number" && typeof b === "number") {
//     return a * b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   }
//   throw new Error("a와 b는 같은 타입이여야 합니다.");
// }

// // 함수 사용
// combine1(); // hint 보기
// combine1("3", 4); // Error
// const result1 = combine1(3, 4); // 타입 추론이 정확함
// const result2 = combine1("a", "b"); // 타입 추론이 정확함

// function sum_1(a: number, b: number, c: number) {
//   if (c) {
//     return a + b + c;
//   } else {
//     return a + b;
//   }
// }

// sum_1(3, 4); // Error

// sum_1(3, 4, 5);

// function sum_2(a: number, b: number, c?: number) {
//   if (c) {
//     return a + b + c;
//   } else {
//     return a + b;
//   }
// }

// sum_2(3, 4); // 정상

// sum_2(3, 4, 5);

// function sum_3(a: number, b: number, c: number = 0) {
//   return a + b + c;
// }

// sum_3(3, 4); // 정상

// sum_3(3, 4, 5); 
 

const Direction = {
    Top: "top",
    Bottom: "bottom",
    Left: "left",
    Right: "right",
  } as const;

  type DirectionV = (typeof Direction)[keyof typeof Direction]
  
  function getDirection(d: DirectionV) {
    return "something";
  }
  
  getDirection("top"); //  ✓
  getDirection(Direction.Top); // ✓