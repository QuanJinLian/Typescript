// type Watcher<T> = {
//   on<K extends string & keyof T>(
//     eventName: `${K}Changed`, // keyof T 는 string | number | symbol 유니언 타입니다. symbol 타입은 템플릿 리터럴 방식을 사용할 수 없으므로 string으로 추가 제약
//     callback: (oldValue: T[K], newValue: T[K]) => void
//   ): void;
// };

// declare function watch<T extends Record<string | symbol, any>>(
//   obj: T
// ): Watcher<T>;

// const personWathcer = watch({
//   firstName: "Hong",
//   lastName: "GilDong",
//   age: "55",
// });

// personWathcer.on("firstNameChanged", (oldValue, newValue) => {});

// const animalWater = watch({
//   name: "duck",
//   canSwim: true,
//   sound: "꽥꽥",
// });

// animalWater.on("canSwimChanged", (oldValue, newValue) => {});
