function arraySliceAny(arr, n) {
    if (n < 0 || n >= arr.length)
        return arr;
    const newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
const numsa = arraySliceAny([4, 44, 55, 74, 15, 41, 5], 2);
const stringsa = arraySliceAny(["55", "dfg", "aa", "bb", "cc", "dd"], 2);
const ha1 = {
    name: "a",
    age: 1,
};
const ha2 = {
    name: "b",
    age: 2,
};
const ha3 = {
    name: "c",
    age: 3,
};
const ha4 = {
    name: "d",
    age: 4,
};
const husa = arraySliceAny([h1, h2, h3, h4], 1);
