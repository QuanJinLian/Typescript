"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(arr, callback) {
    const newAr = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newAr.push(n);
        }
    });
    return newAr;
}
const numsF = [55, 47, 484, 5, 0, 6, 648];
const newNumsF = filter(numsF, (n, i) => n % 2 === 0);
console.log("newNumsF", newNumsF);
const strsF = ["55", "47", "484", "5", "0", "6", "648"];
const newStrsF = filter(strsF, (n) => n.includes("4"));
console.log("newStrsF", newStrsF);
const pers = ["홍", 33, true, "김", 25, false];
const firstPer = filter(pers, (n, i) => i <= 3);
