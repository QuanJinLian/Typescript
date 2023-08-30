// type Watcher = {
//   on(eventName: string, callback: (oldValue: any, newValue: any) => void): void;
// };

// declare function watch(obj: object): Watcher;

// const personWathcer = watch({
//   firstName: "Hong",
//   lastName: "GilDong",
//   age: "55",
// });

// personWathcer.on("ageChanged", (oldValue, newValue) => {});

//  1.  eventName 제약 , 구독하는 객체의 키값 + 'Changed' 라는 string으로 제약
//      예) {age: 10, name: '11'} eventName = "ageChanged" | "nameChanged"
//      예) {food: 'apple', color: 'red'} eventName = "foodChanged" | "colorChanged"

//  2.  oldValue, newValue 제약 (on 함수에 제네릭)
//      정확하게 구독하는 멤버의 타입 추론 가능하게

//  3.  on 의 제너릭 타입과 eventName 타입을 통일  (아래와 같은 불상사가 없기를)
// animalWater.on<"sound">("canSwimChanged", (oldValue, newValue) => {});
