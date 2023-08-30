function arraySlice(arr, n) {
    if (n < 0 || n >= arr.length)
        return arr;
    const newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
const nums = arraySlice([4, 44, 55, 74, 15, 41, 5], 2);
const strings = arraySlice(["55", "dfg", "aa", "bb", "cc", "dd"], 2);
const h1 = {
    name: "a",
    age: 1,
};
const h2 = {
    name: "b",
    age: 2,
};
const h3 = {
    name: "c",
    age: 3,
};
const h4 = {
    name: "d",
    age: 4,
};
const hus = arraySlice([h1, h2, h3, h4], 1);
