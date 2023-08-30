type Person = {
  name: string;
  age: number;
};

type Food = {
  color: string;
  tast: string;
  features: string[];
};

const person: Person = {
  name: "홍길동",
  age: 20,
};

const food: Food = {
  color: "yellow",
  tast: "sweety",
  features: ["good", "monkey"],
};

function commonGetValue(obj: Object, key: string): any;

function commonGetValue(obj, key) {
  return obj[key];
}

const personAge = commonGetValue(person, "age");
const foodColor = commonGetValue(food, "color");

//
///
////
/////
////// Generic 으로 선언
function genericGetValue<T extends Object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personAge_g = genericGetValue(person, "age");
const foodColor_g = genericGetValue(food, "features");
const foodFeatures_g = genericGetValue(food, "features");
