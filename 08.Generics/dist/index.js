"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mixinArray(arr1, arr2) {
    if (arr1.length != arr2.length) {
        throw new Error("두 배열의 길이가 다름");
    }
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}
const result = mixinArray([1, 3, 4], ["a", "b", "c"]);
result.forEach((r) => console.log(r));
