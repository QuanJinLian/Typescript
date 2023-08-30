"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
class ArrayHelper {
    constructor(arr) {
        this.arr = arr;
    }
    take(n) {
        if (n >= this.arr.length) {
            return this.arr;
        }
        const newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr;
    }
    shuffle() {
        for (let i = 0; i < this.arr.length; i++) {
            const targetIndex = this.getRandom(0, this.arr.length);
            const temp = this.arr[i];
            this.arr[i] = this.arr[targetIndex];
            this.arr[targetIndex] = temp;
        }
    }
    getRandom(min, max) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + max);
    }
}
exports.ArrayHelper = ArrayHelper;
