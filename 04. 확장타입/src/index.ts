//// Literal Types & Union Types
// let gender: "man" | "woman";

// gender = "man";
// gender = "woman";

// function searchUsers(g: "man" | "woman") {}

// // Type Aliases
// type Gender = "man" | "woman";
// let gender: Gender;
// function searchUsers(g: Gender) {}

// type Gender = "man" | "woman";
// function searchUsers(g: Gender) {}

// // 사용처1
// let gender1: Gender = "man";

// // 사용처2
// let gender2: Gender = "woman";

// // ........

// // 사용처1000
// let gender1000: Gender = "woman";

// // 어느날 'man' => '남자', 'woman' => '여자' 바꾸라는 요구사항을 받았다............

// Enums
// enum Gender {
//   Man = "man",
//   Woman = "woman",
// }

// let gender1 = Gender.Man;
// let gender2 = Gender.Woman;
// // ....
// let gender1000 = Gender.Woman;

// console.log("gender1-", gender1); // gender1- man
// console.log("gender2-", gender2); // gender2- woman

// enum Direction {
//   Up = 1,
//   Down = 1,
//   Left,
//   Right,
// }

// console.log(Direction);

// enum Level {
//   level1,
//   level2,
//   level3,
// }

// let level: Level = Level.level2;

// level = 1;
// console.log(level);

/*********************************/

// export enum Direction {
//   Top = "top",
//   Bottom = "bottom",
//   Left = "left",
//   Right = "right",
// }

// function getDirection(d: Direction) {
//   return "something";
// }

// getDirection("top"); // X
// getDirection(Direction.Top); // ✓

// export enum Direction2 {
//   Top = "top",
//   Bottom = "bottom",
//   Left = "left",
//   Right = "right",
// }

/*********************************/

// const Direction = {
//   Top: "top",
//   Bottom: "bottom",
//   Left: "left",
//   Right: "right",
// } as const;

// const d = Direction["Top"];

// function getDirection(d: (typeof Direction)[keyof typeof Direction]) {
//   return "something";
// }

// getDirection("right"); //  ✓
// getDirection(Direction.Top); // ✓

export function getNameOut() {}

export default {
  getName: () => {},
};
