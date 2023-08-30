# TS의 클래스

> 객체 지향 사고

이 문서는 기본 부분을 제외하고 구문에서 추가된 부분만 설명합니다.

**프로퍼티**

프로퍼티 목록을 사용하여 클래스의 프로퍼티를 설명합니다.

```ts
class Person {
  // 프로퍼티 목록
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

**프로퍼티에 대한 초기화 검사**

`strictPropertyInitialization:true`

프로퍼티가 초기화되는 위치

1. 생성자에서
2. 프로퍼티의 기본값에서

   ```ts
   class Person {
     gender: "남" | "여" = "남";
   }
   ```

**프로퍼티를 선택 사항으로 수정할 수 있습니다.**

```ts
class Person {
  pid?: string;
}
```

**프로퍼티를 읽기 전용으로 수정할 수 있습니다.**

```ts
class Person {
  private _publishNumber: number = 3;
}
```

**접근 제어자 사용**

접근 제어자는 클래스의 멤버에 대한 접근을 제어할 수 있습니다.

- public: 기본 접근 제어자, 공개, 모든 코드에서 액세스할 수 있습니다.
- private: 비공개, 클래스 내에서만 접근 가능
- protected: ---

**프로퍼티 약어**

생성자의 매개 변수를 통과하여 아무런 처리 없이 프로퍼티에 할당된 경우. 다음과 같이 축약할 수 있습니다.

```ts
class Person2 {
  age: number;

  constructor(public name: string, age: number) {
    this.age = age;
  }
}
```

**접근자**

역할: 프로퍼티의 읽기 및 할당을 제어하는 데 사용됩니다.

```ts
class User {
  private _age: number;

  set age(value: number) {
    if (value < 0) {
      this._age = 0;
    } else if (value > 200) {
      this._age = 200;
    } else {
      this._age = value;
    }
  }

  get age() {
    return Math.floor(this._age);
  }
}
```
