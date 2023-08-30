# 모듈화

모듈화와 관련된 구성입니다:

|     구성이름     |                             의미                             |
| :--------------: | :----------------------------------------------------------: |
|      module      |            컴파일 결과에 사용할 모듈화 기준 설정             |
| moduleResolution |                   모듈 구문 분석 모드 설정                   |
|  removeComments  |                  컴파일 결과에서 주석 제거                   |
|  noEmitOnError   |              오류 시 컴파일 결과 생성되지 않음               |
| esModuleInterop  | es 모듈이 아닌 모듈 내보내기에 대해 es 모듈 상호 작용 활성화 |

> 프런트엔드 모듈화 표준: ES6, commonjs, amd, umd, system, esnext

> TS에서 모듈화 문을 작성하는 방법
> 컴파일 결과?

# TS에서 모듈화 문을 작성하는 방법

TS에서 모듈 가져오기 및 내보내기는 ES6 모듈화 표준을 사용합니다.

# 컴파일 결과의 모듈화

구성 가능

TS의 모듈화은 컴파일 결과에 있습니다:

- 컴파일된 결과의 모듈화 표준이 ES6인 경우: 차이 없음
- 컴파일 결과의 모듈화 표준이 commonjs인 경우: export한 선언은 exports의 속성이 되고, default export는 exports의 기본 속성이 됩니다;

  ```ts
  // ES6 표준으로 코딩
  export function sayHello() {
    console.log("hello my module!");
  }

  export default {
    name: "kevin",
    sum(a: number, b: number) {
      return a + b;
    },
  };

  // CommonJS 표준으로 컴파일
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sayHello = void 0;

  function sayHello() {
    console.log("hello my module!");
  }
  exports.sayHello = sayHello;
  exports.default = {
    name: "kevin",
    sum(a, b) {
      return a + b;
    },
  };
  ```

  모듈이 다름으로 인해 import 구문 사용이 조금 다를 수 있음

  ```ts
  import myModule from "./myModule";
  myModule.sum(5, 4);

  //해당 import 구문은 myModule에서 default export 가 있는 경우에만 사용 가능함.
  // default export 가 없는 commonJs 방식으로 구현한 각종 라이브러리 사용 시 아래와 같이 import해야 함.

  import * as fs from "fs";
  fs.readFileSync("./");
  ```

  ```json
  // * as 매번 쓰기 귀찮으면 tsconfig에서 설정이 필요함
  {
    "compilerOptions": {
      "esModuleInterop": true
    }
  }
  ```

# TS에서 commonjs 모듈형 코드를 작성하는 방법

```js
// 기존에 commonjs 의 내보내기
module.exports = {
  name: "kevin",
  sum(a: number, b: number) {
    return a + b;
  },
};

// 기존에 commonjs 의 가져오기
const myModule = require("./myModule");
```

기존에 commonjs 표현식으로 코딩하면 컴파일에는 문제가 없습니다.
다만 이렇게 사용하면 myModule 타입은 any로 잡히게 되어 더이상 타입스크립트의 기능을 사용하지 못하게 됩니다.

하여 부득이하게 commonjs 표현식으로 코딩을 해야된다면 아래와 같이 써야 타입스크립트의 기능을 사용할 수 있겠습니다.

```ts
// 내보내기: export = xxx;
export = {
  name: "kevin",
  sum(a: number, b: number) {
    return a + b;
  },
};

// 가져오기: import xxx = require("xxx");
import myModule from "./myModule";

//혹은
import myModule = require("./myModule");
```

[모듈 핸드북](https://www.typescriptlang.org/docs/handbook/2/modules.html)
[모듈 해석](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
