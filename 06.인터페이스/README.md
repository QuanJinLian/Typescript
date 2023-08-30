# 인터페이스 및 유형 호환성

# 확장형 인터페이스

> 확장 유형: Type Aliases, Enums, 인터페이스, 클래스

TypeScript의 인터페이스: 클래스, 객체, 함수를 제약하기 위한 계약서(표준)

계약서(표준)의 형태:

- API 문서, 약한 표준
- 코드상 제약, 강력한 표준 (백엔드 - interface)

Type Aliases과 마찬가지로 인터페이스는 컴파일 결과에 나타나지 않습니다.

1. 인터페이스 제약 객체

```ts
// 선언
interface User {
  name: string;
  age: number;
}

// 사용
let u: User = {
  name: "sdfds",
  age: 33,
  sayHello() {
    console.log("asfadasfaf");
  },
};

// Type Aliases 로 선언
type User = {
  name: string;
  age: number;
};
```

인터페이스와 Type Aliases 는 별 차이점을 못느끼지만 미묘한 차이는 있습니다.
[차이](https://blog.logrocket.com/types-vs-interfaces-typescript/)

2. 인터페이스 제약 함수

```ts
// 선언 1 - 객체안의 멤버
interface User {
  sayHello(): void;
}

// 사용
let u: User = {
  sayHello() {
    console.log("asfadasfaf");
  },
};

// Type Aliases 로 선언
type User = {
  sayHello: () => void;
};

// 선언 2
interface Condition {
  (n: number): boolean;
}

// 사용
function sum(numbers: number[], callBack: Condition) {
  let s = 0;
  numbers.forEach((n) => {
    if (callBack(n)) {
      s += n;
    }
  });
  return s;
}

const result = sum([3, 4, 5, 7, 11], (n) => n % 2 !== 0);
console.log(result);

// Type Aliases 로 선언
type Condition = (n: number) => boolean;
```

**인터페이스는 상속 가능**합니다.

한 인터페이스에서 다른 인터페이스로 상속하여 인터페이스를 결합할 수 있습니다.

`&`를 통과해야 하는 Type Aliases을 사용하여 유사한 조합 효과를 얻을 수 있으며, 이를 교차 타이핑이라고 합니다

```ts
// interface 상속
interface A {
  T1: string;
}

interface B {
  T2: number;
}

interface C extends A, B {
  T3: boolean;
}

// Type Aliases 상속
type A = {
  T1: string;
};

type B = {
  T2: number;
};

type C = {
  T3: boolean;
} & A &
  B;

// 사용
let u: C = {
  T2: 33,
  T1: "43",
  T3: true,
};
```

enthus Compare able

- 자식 인터페이스는 부모 인터페이스의 멤버를 재정의할 수 없습니다.

```ts
interface A {
  T1: string;
}

// Interface 'C' incorrectly extends interface 'A'.
//   Types of property 'T1' are incompatible.
//     Type 'number' is not assignable to type 'string'.ts(2430)
interface C extends A {
  T1: number;
}
```

- 교차 type은 동일한 멤버를 가진 유형을 교차합니다.(override 아님)
  [선언 병합(Declaration Merging)](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)

```ts
type A = {
  T1: string;
};

type B = {
  T2: number;
};

type C = {
  T1: number; // A와 중복 선언
  T3: boolean;
} & A &
  B;

let u: C = {
  T2: 33,
  T1: "ii", // T1 => never 타입으로 바뀌어 number, string 타입 모두 할당 불가
  T3: true,
};
```

**readonly**

읽기 전용 수정자, 수정 대상이 읽기 전용인 경우

읽기 전용 수정자는 컴파일 결과에 포함되지 않습니다.

```ts
type C = {
  readonly T3: boolean;
  readonly T4: number[];
  readonly T5: readonly number[];
};

let u: C = {
  T3: true,
  T4: [4, 5],
  T5: [4, 5],
};

u.T3 = "sss"; // Error
u.T4 = [5, 4]; // Error
u.T4[1] = 6; // 정상
u.T5[1] = 6; // Error
```

# 유형 호환성 ([구조적 타입 시스템 (Structural Type System)](https://www.typescriptlang.org/ko/docs/handbook/typescript-in-5-minutes.html#%EA%B5%AC%EC%A1%B0%EC%A0%81-%ED%83%80%EC%9E%85-%EC%8B%9C%EC%8A%A4%ED%85%9C-structural-type-system))

B->A, 할당을 완료할 수 있는 경우 B와 A는 유형 호환 가능

[덕 타이핑](https://nesoy.github.io/articles/2018-02/Duck-Typing) : 타겟 유형에는 몇 가지 특성이 필요하며 할당 유형은 가능한 한 특성을 만족시킬 수 있습니다.

- 기본 유형: 정확히 일치

- 객체 유형: 덕 타이핑
  객체 리터럴을 사용하여 직접 값을 할당할 때는 더 엄격한 판단이 이루어집니다.

  ```ts
  interface Duck {
    sound: "꽥꽥";
    swin(): void;
  }

  let person = {
    name: "오리인척하는 인간",
    age: 11,
    sound: "꽥꽥" as "꽥꽥",
    swin() {
      console.log(
        this.name + "수영중， 그리고" + this.sound + " 소리를 내였다"
      );
    },
  };

  let duck1: Duck = person; // 할당 가능

  let duck2: Duck = {
    //할당 불가
    name: "오리인척하는 인간",
    age: 11,
    sound: "꽥꽥" as "꽥꽥",
    swin() {
      console.log(
        this.name + "수영중， 그리고" + this.sound + " 소리를 내였다"
      );
    },
  };
  ```

- 함수 유형
  모든 것이 매우 자연스럽습니다.
  **인수**: 대상 함수에 전달되는 매개변수는 적을 수 있지만 많으면 안됩니다.

  **반환값**: 반환이 필요한 경우 반드시 반환해야 하며, 그렇지 않은 경우 자유롭게 반환할 수 있습니다;

# 타입 단언

[Type Assertions(타입 단언)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

때때로 타입스크립트에서 알 수 없는 값의 유형에 대한 정보가 있을 수 있습니다.
이런 경우, 타입 단언을 사용하면 타입을 좀 더 구체적으로 명시할 수 있습니다.
이는 컴파일 결과에 포함되지 않습니다.
