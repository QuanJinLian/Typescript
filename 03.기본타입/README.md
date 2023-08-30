# 기본 유형 타입 설정

> TS는 선택적 정적 타입 시스템입니다.

선택적: 원하는 기능에만 선택적으로 사용 가능합니다.
정적 : 코드가 실행되기 전에 실행되고(정적) 프로그램 유형이 올바른지 확인하는(유형 검사) 도구가 되는 것입니다. 코드가 버그가 있는 경우 컴파일 되지않습니다.

# 타입 설정 방법

변수, 함수의 인수, 함수의 반환값 위치에 `:type`을 추가하기만 하면 됩니다.

```ts
var a: string = "ddd";

a = 10; // Error

function sum(a: number, b: number): number {
  return a + b;
}

sum("0", 3); // Error

let num: string = sum(5, 3); // Error
```

- 막간 꿀팁: F2키 누른 후 함수 명 수정시 사용된것까지 같이 수정할 수 있다

### 타입 추론

TS는 코드를 해석하는 과정에서 타입 추론이 가능합니다.

```ts
var a = "ddd";

a = 10; // Error

function sum(a: number, b: number) {
  return a + b;
}

let num: string = sum(5, 3); // Error

let num2 = sum(5, 3); // 타입 설정 생략 가능

function isOdd(n: number) {
  // 반환값 타입 설정 생략 가능
  return n % 2 === 0;
}
```

그럼 TS는 언제 타입추론이 가능하고 언제 불가능한가?
![Alt text](assests/type%EC%B6%94%EB%A1%A0.png)
이처럼 변수명 밑에 하얀 점점점이 있는경우 TS는 어떠한 타입도 추론하지 못하여 자동 any타입으로 설정한것을 볼 수 있습니다.
따라서 변수명 밑에 해당 표시가 없는 변수는 타입 추론이 된다는 뜻입니다.

any: ts가 타입 검사를 하지 않는 임의의 타입을 나타냅니다.

# 소스 코드와 컴파일 결과의 차이점

컴파일 결과에 타입 설정 코드가 없음

```ts
function sum(a: number, b: number) {
  return a + b;
}

let num = sum(5, 3);
let name = "sfsf";
let age = 8;
```

```js
// 타입 선언했던 코드가 다 없어짐
function sum(a, b) {
  return a + b;
}
let num = sum(5, 3);
let name = "sfsf";
let age = 8;
```

※※런타임 코드에는 타입이 포함되지 않습니다.※※

# 기본 타입

- number: 숫자
- string：문자열
- boolean: true | false
- array : 배열

  ```ts
  let nums: [] = [3, 4, 5]; //Error

  let nums1: number[] = [3, 4, 5]; // 타입 추론 가능
  nums1 = ["ㄴㄹㄴ"]; //Error

  let nums2: Array<number> = [3, 4, 5]; // 타입 추론 가능
  ```

- object: 객체 (규약이 약해 잘 사용되지 않음)

  ```ts
  function printValues(obj: object) {
    const vals = Object.values(obj);
    vals.forEach((v) => console.log(v));
  }

  printValues({
    name: "afd",
    age: 33,
  });
  ```

- null 와 undefined

  null과 undefined는 다른 모든 타입의 하위 타입이며 모든 타입에 할당할 수 있습니다.

  ```ts
  let s: string = null; // 정상 코드, 에러 없음
  let n: number = undefined; // 정상 코드, 에러 없음

  s.toUpperCase(); // ts 버그 없는데 run time Error
  ```

  '`strictNullChecks:true`를 추가하면 더 엄격하게 null 타입을 검사할 수 있으며, null과 undefined은 자신에게만 할당할 수 있습니다.

# 기타 일반적인 타입 유형

- Union Types: 여러 타입 중 하나

  ```ts
  let name1: string = undefined; // Error

  function getUserName() {
    if (Math.random() < 0.5) {
      return "yuan jin";
    }
    return undefined;
  }
  let name2: string | undefined = getUserName();

  name2.toUpperCase(); //Error

  if (typeof name2 === "string") {
    name2.toUpperCase();
  }
  ```

  [타입 보호](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)와 연계한 판단([Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html))

  타입 보호: 변수가 타입 검사될 때 판단하는 블록에서 정확한 타입을 확인할 수 있으며, typeof는 타입 보호를 트리거할 수 있습니다.

  ```ts
  function _isString(str: any): str is string {
    return typeof str === "string";
  }

  function isString(str: any) {
    return typeof str === "string";
  }

  function getRandom() {
    if (Math.random() < 0.5) {
      return "string";
    } else {
      return 10;
    }
  }

  const result = getRandom();
  console.log("result -", result);

  if (isString(result)) {
    console.log("isString string 판단", result.split("r")); //Error
  }
  if (_isString(result)) {
    console.log("_isString string 판단", result.split("r"));
  }
  ```

- void 타입: 일반적으로 함수의 반환값을 제한하는 데 사용되며, 함수가 아무 것도 반환하지 않음을 나타냅니다.

  ```ts
  function printMenu(): void {
    console.log("1. 로그인");
    console.log("2. 회원가입");
  }

  // 물론 이 또한 타입 추론이 되기에 생략해도 됨
  function printMenu() {
    console.log("1. 로그인");
    console.log("2. 회원가입");
  }
  ```

- never: 일반적으로 함수의 반환값을 제한하는 데 사용되며, 함수가 절대로 종료될 수 없음을 나타냅니다. 혹은 특정 값이 절대 발생할 수 없을 때 사용합니다.

  ```ts
  // 예제1
  function throwError(msg: string): never {
    throw new Error(msg);
  }

  // 예제2
  function alwaysDoSomething(): never {
    while (true) {
      //...
    }
  }

  // 예제3
  type Method = "GET" | "POST" | "PUT";
  function request(method: Method, url: string) {
    switch (method) {
      case "GET":
        return "GET 완료";
      case "POST":
        return "POST 완료";
      default:
        const n: never = method; // PUT case가 없다고 Error =>Type 'string' is not assignable to type 'never'
        return "default 완료";
    }
  }

  // 예제4
  // number 타입 빼고 다 받겠다고 요구사항이 있을경우
  function log<T>(x: T extends number ? never : T) {}
  log("string"); // 정상
  log({}); // 정상
  log(88); // Error

  // 위에 코드 고급지게
  type BanType<T, K> = T extends K ? never : T;
  function log2<T>(x: BanType<T, string>) {}
  log2("string"); // Error
  log2({}); // 정상
  log2(88); // 정상
  ```

- Literal Inference: 특정 문자열을 타입으로 사용합니다.

  ```ts
  // 예제1
  let gender: "남" | "여";
  gender = "남"; // 정상
  gender = "woman"; // Error

  //예제2
  let arr: []; //arr영원히 빈배열이여야 함

  arr = []; // 정상
  arr = ["sss"]; // Error

  // 예제3 (통상 안씀)
  let user: { name: string; age: string };

  user = { name: "ss" }; //Error
  ```

  [다른 예제](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference)

- Tuple: 길이가 고정된 배열이며 배열의 각 항목은 정의된 유형입니다.

  ```ts
  let tu: [string, number];

  tu = ["3", 4];
  tu = ["3"]; //Error
  tu = ["3", "st"]; //Error
  tu = ["3", 0, 9]; //Error
  ```

- any: any는 타입 검사를 무시하므로 임의의 타입의 데이터를 any에 할당할 수 있습니다. (any를 많이 사용하면 ts 안쓰는 효과와 비슷하므로 신중하게 써야한다.)

# Type Aliases

우리는 객체 타입과 union 타입을 타입 주석에 직접 작성하여 사용하고 있습니다. 이것은 편리하지만 동일한 타입을 두 번 이상 사용하고 단일 이름으로 참조하려는 것이 일반적입니다.

Type Aliases는 정확히 타입의 이름 입니다

```ts
type Gender = "남" | "여";
type User = {
  name: string;
  age: number;
  gender: Gender;
};

let u: User;

u = {
  name: "sdfd",
  gender: "남",
  age: 34,
};

// 타입 중복사용 가능
function getUsers(g: Gender): User[] {
  return [];
}
```

# 함수와 관련된 타입 설정

함수 오버로드: 함수가 구현되기 전에 함수 호출의 여러 경우를 선언합니다.

```ts
// 요구 사항
// 함수는 a 와 b 라는 두개의 인자를 받게 되며 둘은 무조건 같은 타입이여야 함.
// a 와 b가 number일 경우 a*b 리턴하고
// a 와 b가 string일 경우 문자열 결합을 리턴하는 함수를 선언하라.

// 함수 선언
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("a와 b는 같은 타입이여야 합니다.");
}

// 함수 사용
combine("3", 4); // Error 없음
const result = combine(3, 4); // 타입 추론이 애매함

// 위와 같이 타입 정의를 하면 예제와 같이 첫번째 두번째 인자가 타입이 다르더라도 TS는 에러를 내지않습니다.
// 또한 설사 같은 타입을 쓴다고 해도 result는 정확한 타입 추론을 하지 못하는 것을 확인하게 된다.
// 이러한 결과는 우리가 원하는게 아닙니다.
// 우리는 첫번째 인자가 넘버 타입이면 두번째 인자가 다른 타입일 경우 에러가 발생하기를 원합니다.

// 함수의 타입 정의

/**
 * a*b 결과 값 리턴
 * @param a
 * @param b
 */
function combine1(a: number, b: number): number;
/**
 * a와 b의 결합 결과 값 리턴
 * @param a
 * @param b
 */
function combine1(a: string, b: string): string;
function combine1(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("a와 b는 같은 타입이여야 합니다.");
}

// 함수 사용
combine1("3", 4); // Error
const result1 = combine1(3, 4); // 타입 추론이 정확함
const result2 = combine1("a", "b"); // 타입 추론이 정확함
```

선택적 매개변수: 특정 매개변수 이름에 물음표를 추가하여 매개변수가 전달되지 않을 수 있음을 나타낼 수 있습니다. 선택적 인수는 인수 목록의 마지막에 있어야 합니다.

```ts
function sum_1(a: number, b: number, c: number) {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
}

sum_1(3, 4); // Error

sum_1(3, 4, 5);

// 옵셔널 정의
function sum_2(a: number, b: number, c?: number) {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
}

sum_2(3, 4); // 정상

sum_2(3, 4, 5);

// 혹은 default 값 지정
function sum_3(a: number, b: number, c: number = 0) {
  return a + b + c;
}

sum_3(3, 4); // 정상

sum_3(3, 4, 5);
```
