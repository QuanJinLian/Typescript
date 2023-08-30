# 확장형 - Enums

[doc](https://www.typescriptlang.org/docs/handbook/enums.html)

> 확장 유형: Type Aliases, Enums, 인터페이스, 클래스

Enums은 특정 변수의 값 범위를 제한하는 데 자주 사용됩니다.

Literal Types과 Union Types을 함께 사용하여 동일한 목적을 달성할 수 있습니다.

```ts
let gender: "man" | "woman";
```

# Literal Types의 문제점

- 유형 제약 조건이 있는 위치에 중복 코드가 생성됩니다. 해당 문제는 Type Aliases을 사용하면 이 문제를 해결할 수 있습니다.

  ```ts
  // Literal Types의 문제점 (타입 중복 코드)
  let gender: "man" | "woman";

  function searchUsers(g: "man" | "woman") {}

  // Type Aliases 사용
  type Gender = "man" | "woman";
  let gender: Gender;
  function searchUsers(g: Gender) {}
  ```

- 논리적 의미와 실제 값을 혼동하면 실제 값을 수정할 때 많은 수의 수정이 발생할 수 있습니다.

  ```ts
  type Gender = "man" | "woman";
  function searchUsers(g: Gender) {}

  // 사용처1
  let gender1: Gender = "man";

  // 사용처2
  let gender2: Gender = "woman";

  // ........

  // 사용처1000
  let gender1000: Gender = "woman";

  // 어느날 'man' => '남자', 'woman' => '여자' 바꾸라는   요구사항을 받았다............어떡하지.......
  ```

- Literal Types은 컴파일 결과에 포함되지 않습니다.

  ```ts
  // compile.ts
  type Gender_c = "man" | "woman";
  let gender: Gender_c;
  function searchUsers(g: Gender_c) {
    if (g === "man") {
      // g === Gender_c.man 이렇게 사용하고 싶은데 그게 안됨
    } else if (g === "woman") {
      // g === Gender_c.woman 이렇게 사용하고 싶은데 그게 안됨
    }
  }

  // 컴파일 후 compile.js
  var gender;
  function searchUsers(g) {
    if (g === "man") {
      // g === Gender_c.man 이렇게 사용하고 싶은데 그게 안됨
    } else if (g === "woman") {
      // g === Gender_c.woman 이렇게 사용하고 싶은데 그게 안됨
    }
  }
  ```

# Enums

Enums을 정의하는 방법:

```ts
enum  이름 {
    Key1 =  Value1,
    Key2 = Value2,
    ...
    ...
}

// ex)
enum Gender {
  Man = "man",
  Woman = "woman",
}

let gender1 = Gender.Man;
let gender2 = Gender.Woman;
// ....
let gender1000 = Gender.Woman;

console.log("gender1-", gender1); // gender1- man
console.log("gender2-", gender2); // gender2- woman




// 컴파일 후
var Gender;
(function (Gender) {
    Gender["Man"] = "man";
    Gender["Woman"] = "woman";
})(Gender || (Gender = {}));
var gender1 = Gender.Man;
var gender2 = Gender.Woman;
// ....
var gender1000 = Gender.Woman;
console.log("gender1-", gender1); // gender1- man
console.log("gender2-", gender2); // gender2- woman
```

Enums은 컴파일 결과에 나타나며, 컴파일 결과에서 객체로 표시됩니다.

Enums에 대한 규칙:

- Enums의 필드 값은 문자열 또는 숫자일 수 있습니다.
- 숫자 Enums의 값은 자동으로 증가합니다.

  ```ts
  // ts
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }

  // 컴파일 후 js
  var Direction;
  (function (Direction) {
    Direction[(Direction["Up"] = 1)] = "Up";
    Direction[(Direction["Down"] = 2)] = "Down";
    Direction[(Direction["Left"] = 3)] = "Left";
    Direction[(Direction["Right"] = 4)] = "Right";
  })(Direction || (Direction = {}));

  // 위에 코드 해석
  var Direction = {
    "1": "Up",
    "2": "Down",
    "3": "Left",
    "4": "Right",
    Up: 1,
    Down: 2,
    Left: 3,
    Right: 4,
  };
  ```

- 숫자 Enums에 바인딩된 변수는 숫자에 직접 할당할 수 있습니다.

  ```ts
  enum Level {
    level1,
    level2,
    level3,
  }

  let level: Level = 2; // 또 코드 중복의 우려가...

  level = 1;
  console.log(level);
  ```

- 숫자 Enums의 컴파일 결과는 문자열 Enums의 컴파일 결과와 다릅니다. 추후에 숫자 Enums의 값이나 key를 Iterate 할 경우 해당 상황을 고려해야 합니다.

모범 사례:

- Enums에 문자열 필드와 숫자 필드를 동시에 포함하지 않도록 하세요.
- Enums을 사용할 때는 실제 값 대신 열거된 필드의 이름을 사용하세요.

  ```ts
  enum Level {
    level1,
    level2,
    level3,
  }

  function getSome(l: Level) {}

  getSome(1); // X
  getSome(Level.level3); // ✓
  ```

  ## Enum 의 단점

  - string Enum 정의 및 사용 시 값은 같더라도 Enum.Key처럼 인용된 것이 아니라면 타입 체크할때 에러가 납니다. 이 경우 라이브러리 만드는 입장이라면 약속된 문자열도 받을 수 있게 자유롭게 만들어야 하는데 제약 사항이 많아지게 됩니다.

  [antd Api](https://ant.design/components/tooltip)
  [antd const Enum](https://github.com/search?q=repo%3Aant-design%2Fant-design+topRight&type=code)

  ```ts
  enum Direction {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right",
  }

  function getDirection(d: Direction) {
    return "something";
  }

  getDirection("top"); // X
  getDirection(Direction.Top); // ✓
  ```

  - 컴파일 후 Enum의 값은 객체로 변경되고 이과정에 선언 방식이 var로 되어있으며 이것은 allowJs 모드에서 전역 변수 오염 문제가 생길 우려도 존재해 보입니다.

  ## Const Assertions

  ```ts
  const Direction = {
    Top: "top",
    Bottom: "bottom",
    Left: "left",
    Right: "right",
  } as const;

  function getDirection(d: (typeof Direction)[keyof typeof Direction]) {
    return "something";
  }

  getDirection("top"); //  ✓
  getDirection(Direction.Top); // ✓
  ```

## 확장지식:

#### Computed and constant members

> [Enum 에서 + - 와 같은 operators와 .length 와 같은 계산식도 사용이 가능한데요. 이는 컴파일 시점에 완전히 평가됩니다.](https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members)

해당 지식을 이용하여 권한 타입을 우아하게 정의할 수 있습니다.(permission.ts 참고)
[js 연산자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

```ts
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}
```
