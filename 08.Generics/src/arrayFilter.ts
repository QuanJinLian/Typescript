/**
 * callback function: 배열의 특정 값이 조건을 만족하는지 판단
 *
 */
type callbackFilter<T> = (n: T, i: number) => boolean;

/**
 * array filter 함수 와 비슷한 함수
 *
 */

function filter<T>(arr: T[], callback: callbackFilter<T>): T[] {
  const newAr: T[] = [];
  arr.forEach((n, i) => {
    if (callback(n, i)) {
      newAr.push(n);
    }
  });

  return newAr;
}

// 사용
const numsF = [55, 47, 484, 5, 0, 6, 648];
const newNumsF = filter(numsF, (n, i) => n % 2 === 0);

console.log("newNumsF", newNumsF);

const strsF = ["55", "47", "484", "5", "0", "6", "648"];
const newStrsF = filter(strsF, (n) => n.includes("4"));
console.log("newStrsF", newStrsF);

// tuple type filter
export type StringNumberBoolPair = [
  string,
  number,
  boolean,
  string,
  number,
  boolean
];

const pers: StringNumberBoolPair = ["홍", 33, true, "김", 25, false];

const firstPer = filter(pers, (n, i) => i <= 3);
