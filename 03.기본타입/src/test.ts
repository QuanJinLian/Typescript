export function sum(a: number, b: number) {
  return a + b;
}

let num = sum(5, 4);

type Method = "GET" | "POST" | "PUT";
function request(method: Method, url: string) {
  switch (method) {
    case "GET":
      return "GET 완료";
    case "POST":
      return "POST 완료";
    case "PUT":
      return "PUT 완료";
    default:
      const n: never = method; // PUT case가 없다고 Error =>Type 'string' is not assignable to type 'never'
      return "default 완료";
  }
}
