/***
 * @param arr {Array}
 * @param n {number}
 *
 * @returns {Array} arr 의 0 부터 n 까지의 값을 새로운 배열에 담아서 반환
 *
 */
function arraySlice<T = number>(arr: T[], n: number): T[] {
  if (n < 0 || n >= arr.length) return arr;

  const newArr: T[] = [];
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

const nums = arraySlice([4, 44, 55, 74, 15, 41, 5], 2);
// const nums: number[]

const strings = arraySlice(["55", "dfg", "aa", "bb", "cc", "dd"], 2);
// const strings: string[]

type Human = {
  name: string;
  age: number;
};

const h1: Human = {
  name: "a",
  age: 1,
};
const h2: Human = {
  name: "b",
  age: 2,
};
const h3: Human = {
  name: "c",
  age: 3,
};
const h4: Human = {
  name: "d",
  age: 4,
};

const hus = arraySlice([h1, h2, h3, h4], 1);
// const hus: Human[]

type Car<T> = {
  model: T;
};

interface Animal<T> {
  type: T;
}
