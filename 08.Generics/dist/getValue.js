const person = {
    name: "홍길동",
    age: 20,
};
const food = {
    color: "yellow",
    tast: "sweety",
    features: ["good", "monkey"],
};
function commonGetValue(obj, key) {
    return obj[key];
}
const personAge = commonGetValue(person, "age");
const foodColor = commonGetValue(food, "color");
function genericGetValue(obj, key) {
    return obj[key];
}
const personAge_g = genericGetValue(person, "age");
const foodColor_g = genericGetValue(food, "color");
const foodFeatures_g = genericGetValue(food, "features");
