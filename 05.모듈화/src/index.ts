// //// default export 있는 경우
// import myModule from "./myModule";
// myModule.sum(5, 4);
// console.log("myModule", myModule);

//// default export 없는 경우
// import * as fs from "fs";
// fs.readFileSync("./");

// "esModuleInterop": true, 설정후
// import fs from "fs";
// fs.readFileSync("./");

// 기존에 commonjs 의 가져오기
// const myModule = require("./myModule");

// ts에서 commonjs로 가져오기
import myModule = require("./myModule");
