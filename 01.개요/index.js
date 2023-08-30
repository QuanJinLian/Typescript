function getUserName() {
  if (Math.random() < 0.5) {
    return "yuan jin";
  }
  return 404;
}

let myname1 = getUserName();

mynmae1 = myname1
  .split(" ")
  .filter((it) => it)
  .map((it) => it[0].toUpperCase() + it.substr(1))
  .join(" ");
//
//
//
//
//
//
//
//.....다른 예제
let width = 500;

// ....
width = "500px"; // 버그 생성
// ....
document.getElementById("#dsf").style.width = width + "px";

let obj = getObj(); // {} | null | undefined

obj.name;
