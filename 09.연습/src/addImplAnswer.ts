/**
 *
 * @param a js type
 * @param b js type
 * @param c js type
 * @param Callback function
 *
 * 요구사항 Callback 함수 앞에는 한개 또는 여러개의 js 타입인 string이여야 하고
 * Callback 함수의 모든 파라미터는 콜백 함수 앞에 있는 모든 파라미터를 그래도 받아야 한다.
 *
 *
 *
 *
 * ex) addImpl("string", (a) => {});
 *
 * ex) addImpl("string", "boolean", "number", (a, b, c) => {});
 *
 *
 */

type JsTypeMap = {
  string: string;
  number: number;
  boolean: boolean;
  object: object;
  function: Function;
  symbol: symbol;
  undefined: undefined;
  bigint: bigint;
};

type JsTypeName = keyof JsTypeMap;

type ArgsType<T extends JsTypeName[]> = { [I in keyof T]: JsTypeMap[T[I]] };

declare function addImpl<T extends JsTypeName[]>(
  ...args: [...T, (...args: ArgsType<T>) => any]
): void;

addImpl("string", "boolean", "number", (a, b, c) => {});

// addImpl("string", (a ,b, c) => {}); // X

addImpl("string", (a) => {});
