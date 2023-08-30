// type Callback = {
//   (a, b, c): void;
// };

// /**
//  *
//  * @param a js type
//  * @param b js type
//  * @param c js type
//  * @param Callback function
//  *
//  * 요구사항 Callback 함수 앞에는 한개 또는 여러개의 js 타입인 string이여야 하고
//  * Callback 함수의 모든 파라미터는 콜백 함수 앞에 있는 모든 파라미터 값에 해당하는 타입을 받아야 한다.
//  *
//  *
//  *
//  *
//  * ex) addImpl("string", (a) => {}); // O    a => string
//  *
//  * ex) addImpl("ssdf", (a) => {});  // X
//  *
//  * ex) addImpl("string", "boolean", "number", (a, b, c) => {});  // O    a => string, b => boolean, c => number
//  *
//  *
//  */
// declare function addImpl(a: string, b: string, c: string, Callback): void;

// addImpl("string", "boolean", "number", (a, b, c) => {});

//// 1. 불규칙한 파라미터 제약
///     declare function addImpl(...args: string[], fn: Function): void;

//// 2. 불규칙한 파라미터 제약
////    declare function addImpl(...args: [...string[], Function]): void;

//// 3. js type name 제약
////    type JsTypeName = 'string' | 'number' | 'boolean' | 'object' | ' function'| 'symbol'| 'undefined' | 'bigint'

//// 4. Function 제약
///     declare function addImpl(...args: [...JsTypeName[], (...args: any) => any]): void;

//// 5. 제너릭으로 함수 앞에 타입들 선언
////    declare function addImpl<T extends JsTypeName[]> (...args: [...T , (...args: any) => any]): void;

//// 6. JsTypeName 을 키, 타입을 값으로 하는 매핑 테이블 선언
// type JsTypeMap = {
//     string: string;
//     number: number;
//     boolean: boolean;
//     object: object;
//     function: Function;
//     symbol: symbol;
//     undefined: undefined;
//     bigint: bigint;
//   };

//   type JsTypeName = keyof JsTypeMap;

//// 7. key 값을 받으면 타입을 추론해주는 보조 ArgsType 선언
////    type ArgsType<T extends JsTypeName[]> = { [I in keyof T]: JsTypeMap[T[I]] };
