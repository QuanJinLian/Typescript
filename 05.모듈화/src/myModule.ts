// export const name = "kevin";

// export function sum(a: number, b: number) {
//     return a + b;
// }

// export default function(){
//     console.log("hello my module!");
// }

// export function sayHello() {
//   console.log("hello my module!");
// }

// export default {
//   name: "kevin",
//   sum(a: number, b: number) {
//     return a + b;
//   },
// };

// // 기존에 commonjs 의 내보내기
// module.exports = {
//   name: "kevin",
//   sum(a: number, b: number) {
//     return a + b;
//   },
// };

// ts에서 commonjs로 내보내기
export = {
  name: "kevin",
  sum(a: number, b: number) {
    return a + b;
  },
};
