/***
 * @param arr {Array}
 * @param n {number}
 *
 * @returns {Array} arr 의 0 부터 n 까지의 값을 새로운 배열에 담아서 반환
 *
 */
function arraySliceAny(arr: any[], n: number): any[] {
  if (n < 0 || n >= arr.length) return arr;

  const newArr: any[] = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

//
///
////
/////
////// 사용

const numsa = arraySliceAny([4, 44, 55, 74, 15, 41, 5], 2);
// const nums: number[]

const stringsa = arraySliceAny(["55", "dfg", "aa", "bb", "cc", "dd"], 2);
// const strings: string[]

type HumanAny = {
  name: string;
  age: number;
};

const ha1: HumanAny = {
  name: "a",
  age: 1,
};
const ha2: HumanAny = {
  name: "b",
  age: 2,
};
const ha3: HumanAny = {
  name: "c",
  age: 3,
};
const ha4: HumanAny = {
  name: "d",
  age: 4,
};

const husa = arraySliceAny([h1, h2, h3, h4], 1);
// const hus: HumanAny[]
