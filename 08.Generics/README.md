# 제너릭

특정 함수를 작성할 때 일부 타입 정보(일관성이 있거나 여러 위치에서 타입과 관련되어야 하는 정보)가 손실되는 경우가 있습니다.
`공용 함수 같은 경우 어떠한 인자를 받을지 모르는 함수 선을 할때 디테일한 타입 제약을 하지 못하는 상황이 있을 수 있기에 따라서 return 받는 값도 타입 제약을 못하기 마찬가지 입니다.`

```ts
type Person = {
  name: string;
  age: number;
};

type Food = {
  color: string;
  tast: string;
};

const person: Person = {
  name: "홍길동",
  age: 20,
};

const food: Food = {
  color: "yellow",
  tast: "sweety",
};

function commonGetValue(obj: Object, key: string): any;

function commonGetValue(obj, key) {
  return obj[key];
}

const personAge = commonGetValue(person, "name"); // personAge is any
const foodColor = commonGetValue(food, "color"); // foodColor is any
```

제네릭: 함수, 클래스, 인터페이스, 유형 별칭에 첨부된 유형입니다.

제네릭 타입은 타입 변수와 동일하며, 정의 시점에 특정 타입을 미리 알 수 없으며 대신 해당 변수를 사용할 수 있으며 호출 시점까지만 해당 타입을 결정할 수 있습니다.

대부분의 경우 TS는 전달된 파라미터를 기반으로 제네릭의 유형을 지능적으로 도출합니다.

인자중 제너릭 이름으로 선언된 인자가 없으면 유형 도출을 하지 못하므로 특정 유형이 전달되지 않으면 기본값은 unknown입니다.

제네릭은 기본값을 설정할 수 있습니다.

```ts
function arraySlice<T = number>() {}
```

# 함수에서 제네릭 타입 사용

함수 이름 뒤에 `<제너릭 이름>`을 입력합니다.

```ts
function arraySlice<T>() {}
```

# 유형 별칭, 인터페이스, 클래스에서 제네릭을 사용하는 방법

이름 바로 뒤에 `<제너릭 이름>`을 적습니다.

```ts
type Car<T> = {
  model: T;
};

interface Animal<T> {
  type: T;
}

class ArrayHelper<T> {}
```

# 제네릭 제약 조건

현실적인 제네릭 값을 위한 제네릭 제약 조건

```ts
interface hasNameProperty {
  name: string;
}

/**
 * 객체의 name 속성에 있는 각 단어의 첫 글자를 대문자로 바꾸고 해당 객체를 반환함
 */
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
  obj.name = obj.name
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.substr(1))
    .join(" ");
  return obj;
}

const o = {
  name: "gildong hong",
  age: 22,
  gender: "남",
};

const newO = nameToUpperCase(o);
console.log(newO.name); //Gildong Hong

const o2 = {
  age: 22,
  gender: "남",
};
const newO2 = nameToUpperCase(o2); // o2에는 name 속성이 없어 에러남
```

# 여러 제네릭 유형

```ts
// 두 배열 머지
//[1,3,4] + ["a","b","c"] = [1, "a", 3, "b", 4, "c"]
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
  if (arr1.length != arr2.length) {
    throw new Error("두 배열의 길이가 다름");
  }
  let result: (T | K)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}

const result = mixinArray([1, 3, 4], ["a", "b", "c"]);

result.forEach((r) => console.log(r));
```

```ts
function genericGetValue<T extends Object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personAge_g = genericGetValue(person, "age"); // const personAge_g: number
const foodColor_g = genericGetValue(food, "color"); // const foodColor_g: string
const foodFeatures_g = genericGetValue(food, "features"); // const foodFeatures_g: string[]
```

# [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## 타입의 재귀

```ts
type Obj = {
  a: String;
  b: number;
  c: string;
};

let objReadOnly: Readonly<Obj> = {
  a: "ss",
  b: 5,
  c: "55",
};

objReadOnly.c = "sss"; // readonly에 값을 할당 할 수 없으므로 에러 납니다.

type Obj2 = {
  a: String;
  b: number;
  c: {
    d: boolean;
  };
};

let objReadOnly2: Readonly<Obj2> = {
  a: "ss",
  b: 5,
  c: {
    d: true,
  },
};
objReadOnly2.c.d = false; //할당 가능 에러 안남
// 앑은 프로퍼티만 readonly로 규약을 했기에 깊은 값인 obj.c.d는 readonly가 아닙니다.

// Readonly code
type ReadonlyC<T> = {
  readonly [K in keyof T]: T[K];
};

// 깊은 프로퍼티도 readonly 시키기
type DeepReadOnly<T extends Record<string, any>> = {
  readonly [K in keyof T]: DeepReadOnly<T[K]>;
};

let objReadOnly3: DeepReadOnly<Obj2> = {
  a: "ss",
  b: 5,
  c: {
    d: true,
  },
};
objReadOnly3.c.d = false; // c.d 는 readonly이기에 값이 할당 불가하여 에러남
```
