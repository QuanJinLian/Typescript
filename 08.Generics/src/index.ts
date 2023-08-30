// interface hasNameProperty {
//   name: string;
// }

import { type } from "os";

// /**
//  * 객체의 name 속성에 있는 각 단어의 첫 글자를 대문자로 바꾸고 해당 객체를 반환함
//  */
// function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
//   obj.name = obj.name
//     .split(" ")
//     .map((s) => s[0].toUpperCase() + s.substr(1))
//     .join(" ");
//   return obj;
// }

// const o = {
//   name: "gildong hong",
//   age: 22,
//   gender: "남",
// };

// const newO = nameToUpperCase(o);
// console.log(newO.name); //Gildong Hong

// const o2 = {
//   age: 22,
//   gender: "남",
// };
// const newO2 = nameToUpperCase(o2); // o2에는 name 속성이 없어 에러남

// 두 배열 머지
//[1,3,4] + ["a","b","c"] = [1, "a", 3, "b", 4, "c"]
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
  if (arr1.length != arr2.length) {
    throw new Error("두 배열의 길이가 다름");
  }
  let result: (T | K)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}

const result = mixinArray([1, 3, 4], ["a", "b", "c"]);

result.forEach((r) => console.log(r));

// // 재귀
// type Obj = {
//   a: String;
//   b: number;
//   c: string;
// };

// let objReadOnly: Readonly<Obj> = {
//   a: "ss",
//   b: 5,
//   c: "55",
// };

// objReadOnly.c = "sss"; // readonly에 값을 할당 할 수 없으므로 에러 납니다.

// type Obj2 = {
//   a: String;
//   b: number;
//   c: {
//     d: boolean;
//   };
// };

// let objReadOnly2: Readonly<Obj2> = {
//   a: "ss",
//   b: 5,
//   c: {
//     d: true,
//   },
// };
// objReadOnly2.c.d = false; //할당 가능 에러 안남
// // 앑은 프로퍼티만 readonly로 규약을 했기에 깊은 값인 obj.c.d는 readonly가 아닙니다.

// // Readonly code
// type ReadonlyC<T> = {
//   readonly [K in keyof T]: T[K];
// };

// // 깊은 프로퍼티도 readonly 시키기
// type DeepReadOnly<T extends Record<string | symbol, any>> = {
//   readonly [K in keyof T]: DeepReadOnly<T[K]>;
// };

// let objReadOnly3: DeepReadOnly<Obj2> = {
//   a: "ss",
//   b: 5,
//   c: {
//     d: true,
//   },
// };
// objReadOnly3.c.d = false; // c.d 는 readonly이기에 값이 할당 불가하여 에러남

  